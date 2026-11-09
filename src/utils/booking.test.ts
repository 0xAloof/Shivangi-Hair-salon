import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isTuesday,
  generateTimeSlots,
  calculateBookingTotal,
  isValidPhone,
  validateBookingForm,
  formatWhatsAppBookingMessage,
  createWhatsAppUrl,
  getSalonStatusIST,
} from './booking';
import { ServiceItem } from '../types';
import { VIDEOS, MACRO_VIDEOS, HERO_CAROUSEL_SLIDES } from '../config/videos';
import { LOOKBOOK_ITEMS, SALON_INFO, SERVICES, REVIEWS } from '../data/salonData';

const mockServices: ServiceItem[] = [
  {
    id: 'sig-cut',
    name: 'Signature Haircut',
    category: 'hair',
    durationMinutes: 40,
    priceMin: 150,
    priceMax: 150,
    shortDesc: 'Precision scissor cut',
    inclusions: ['Wash', 'Style']
  },
  {
    id: 'beard-detail',
    name: 'Beard Shaping',
    category: 'beard',
    durationMinutes: 25,
    priceMin: 120,
    priceMax: 120,
    shortDesc: 'Razor styling',
    inclusions: ['Hot towel']
  }
];

test('isTuesday correctly identifies Tuesdays and other days', () => {
  assert.equal(isTuesday('2026-11-10'), true);
  assert.equal(isTuesday('2026-11-11'), false);
  assert.equal(isTuesday('2026-11-09'), false);
  assert.equal(isTuesday(''), false);
});

test('getSalonStatusIST evaluates Tuesday, open hours, and closed hours in Asia/Kolkata', () => {
  // Tuesday 2026-11-10 at 12:00 IST (06:30 UTC)
  const tueDate = new Date('2026-11-10T06:30:00.000Z');
  const tueStatus = getSalonStatusIST(tueDate);
  assert.equal(tueStatus.isTuesday, true);
  assert.equal(tueStatus.isOpen, false);
  assert.equal(tueStatus.label, 'CLOSED TODAY · WEEKLY OFF');

  // Wednesday 2026-11-11 at 14:00 IST (08:30 UTC) -> Open
  const openDate = new Date('2026-11-11T08:30:00.000Z');
  const openStatus = getSalonStatusIST(openDate);
  assert.equal(openStatus.isTuesday, false);
  assert.equal(openStatus.isOpen, true);
  assert.equal(openStatus.label, 'OPEN NOW · UNTIL 9:30 PM');

  // Wednesday 2026-11-11 at 22:30 IST (17:00 UTC) -> Closed outside hours
  const closedDate = new Date('2026-11-11T17:00:00.000Z');
  const closedStatus = getSalonStatusIST(closedDate);
  assert.equal(closedStatus.isTuesday, false);
  assert.equal(closedStatus.isOpen, false);
  assert.equal(closedStatus.label, 'CLOSED NOW · OPENS 8:30 AM');
});

test('generateTimeSlots produces valid range from 8:30 AM to 9:00 PM', () => {
  const slots = generateTimeSlots();
  assert.ok(slots.length > 20);
  assert.equal(slots[0], '8:30 AM');
  assert.ok(slots.includes('12:00 PM'));
  assert.ok(slots.includes('5:30 PM'));
  assert.equal(slots[slots.length - 1], '9:00 PM');
});

test('calculateBookingTotal computes correct sum of minutes and Bhopal INR prices', () => {
  const total = calculateBookingTotal(['sig-cut', 'beard-detail'], mockServices);
  assert.equal(total.totalDurationMinutes, 65);
  assert.equal(total.minPrice, 270);
  assert.equal(total.maxPrice, 270);
  assert.equal(total.selectedItems.length, 2);

  // Real SERVICES from salonData
  const realTotal = calculateBookingTotal(['sig-cut', 'beard-detail'], SERVICES);
  assert.equal(realTotal.minPrice, 250); // ₹150 + ₹100
});

test('isValidPhone correctly validates Indian mobile numbers', () => {
  assert.equal(isValidPhone('9575830421'), true);
  assert.equal(isValidPhone('+919575830421'), true);
  assert.equal(isValidPhone('09575830421'), true);
  assert.equal(isValidPhone('+91 95758 30421'), true);
  assert.equal(isValidPhone('12345'), false);
  assert.equal(isValidPhone('abcde'), false);
  assert.equal(isValidPhone('1234567890'), false);
});

test('validateBookingForm detects missing or invalid fields and Tuesday closure', () => {
  const emptyRes = validateBookingForm({
    fullName: '',
    phone: '',
    selectedServices: [],
    date: '',
    timeSlot: '',
    notes: '',
  });
  assert.equal(emptyRes.isValid, false);

  const tuesdayRes = validateBookingForm({
    fullName: 'Rohit Sharma',
    phone: '9575830421',
    selectedServices: ['sig-cut'],
    date: '2026-11-10', // Tuesday
    timeSlot: '11:00 AM',
    notes: 'Low taper fade',
  });
  assert.equal(tuesdayRes.isValid, false);
  assert.match(tuesdayRes.errors.date, /closed on Tuesdays/i);

  const validRes = validateBookingForm({
    fullName: 'Rohit Sharma',
    phone: '9575830421',
    selectedServices: ['sig-cut'],
    date: '2026-11-11',
    timeSlot: '11:00 AM',
    notes: 'Low taper fade',
  });
  assert.equal(validRes.isValid, true);
  assert.deepEqual(validRes.errors, {});
});

test('formatWhatsAppBookingMessage includes real INR pricing and zero Consultation Required strings', () => {
  const msg = formatWhatsAppBookingMessage(
    {
      fullName: 'Rohit Sharma',
      phone: '9575830421',
      selectedServices: ['sig-cut', 'beard-detail'],
      date: '2026-11-11',
      timeSlot: '11:00 AM',
      notes: 'Bespoke razor finish',
    },
    mockServices
  );

  assert.ok(msg.includes('Rohit Sharma'));
  assert.ok(msg.includes('Signature Haircut'));
  assert.ok(msg.includes('₹150'));
  assert.ok(msg.includes('*Total Price:* ₹270'));
  assert.ok(!msg.includes('Consultation Required'));

  const url = createWhatsAppUrl('919575830421', msg);
  assert.ok(url.startsWith('https://wa.me/919575830421?text='));
});

test('MACRO_VIDEOS hardcodes Supabase URLs directly without local /videos/*.mp4 paths and uses short labels', () => {
  assert.equal(
    MACRO_VIDEOS.hero.src,
    'https://tsufahvimyzdlkdhqvnk.supabase.co/storage/v1/object/public/Videos/clipper-3d.mp4'
  );
  assert.equal(
    MACRO_VIDEOS.trustStrip.src,
    'https://tsufahvimyzdlkdhqvnk.supabase.co/storage/v1/object/public/Videos/razor-3d.mp4'
  );
  assert.equal(
    MACRO_VIDEOS.serviceMenu.src,
    'https://tsufahvimyzdlkdhqvnk.supabase.co/storage/v1/object/public/Videos/towel-3d.mp4'
  );

  for (const url of Object.values(VIDEOS)) {
    assert.ok(url.startsWith('https://tsufahvimyzdlkdhqvnk.supabase.co/'), `Expected Supabase URL, got ${url}`);
  }

  assert.equal(HERO_CAROUSEL_SLIDES.length, 3);
  assert.equal(HERO_CAROUSEL_SLIDES[0].shortLabel, '01 · PRECISION CUT');
  assert.equal(HERO_CAROUSEL_SLIDES[1].shortLabel, '02 · FRESH BLADE BEARD');
  assert.equal(HERO_CAROUSEL_SLIDES[2].shortLabel, '03 · HOT TOWEL SPA');
});

test('LOOKBOOK_ITEMS has 16 distinct images, REVIEWS has Rohit Sharma, and developer LinkedIn URL is set', () => {
  assert.equal(LOOKBOOK_ITEMS.length, 16);
  const uniqueImages = new Set(LOOKBOOK_ITEMS.map(item => item.image));
  assert.equal(uniqueImages.size, 16);
  assert.equal(REVIEWS[0].clientName, 'Rohit Sharma');
  assert.equal(SALON_INFO.developer.name, 'Aashif Khan');
  assert.equal(SALON_INFO.developer.githubUrl, 'https://github.com/0xAashif');
  assert.equal(SALON_INFO.developer.linkedinUrl, 'https://www.linkedin.com/in/aashif-khan/');
  assert.ok(SALON_INFO.googleMapsEmbedUrl.includes('output=embed'));
});
