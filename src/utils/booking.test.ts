import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isTuesday,
  generateTimeSlots,
  calculateBookingTotal,
  isValidPhone,
  validateBookingForm,
  formatWhatsAppBookingMessage,
  buildHinglishWhatsAppMessage,
  createWhatsAppUrl,
  getSalonStatusIST,
} from './booking';
import { ServiceItem } from '../types';
import { VIDEOS, MACRO_VIDEOS, HERO_CAROUSEL_SLIDES } from '../config/videos';
import { LOOKBOOK_ITEMS, SALON_INFO, SERVICES, REVIEWS, TRUST_SIGNALS, QUIZ_QUESTIONS } from '../data/salonData';

const mockServices: ServiceItem[] = [
  {
    id: 'sig-cut',
    name: 'Signature Haircut',
    category: 'hair',
    durationMinutes: 40,
    priceMin: 100,
    priceMax: 100,
    shortDesc: 'Precision scissor cut. Starts from ₹100 · Negotiable.',
    inclusions: ['Wash', 'Style']
  },
  {
    id: 'beard-detail',
    name: 'Beard Shaping',
    category: 'beard',
    durationMinutes: 25,
    priceMin: 100,
    priceMax: 100,
    shortDesc: 'Razor styling. Starts from ₹100 · Negotiable.',
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
  const tueDate = new Date('2026-11-10T06:30:00.000Z');
  const tueStatus = getSalonStatusIST(tueDate);
  assert.equal(tueStatus.isTuesday, true);
  assert.equal(tueStatus.isOpen, false);
  assert.equal(tueStatus.label, 'CLOSED TODAY · WEEKLY OFF');

  const openDate = new Date('2026-11-11T08:30:00.000Z');
  const openStatus = getSalonStatusIST(openDate);
  assert.equal(openStatus.isTuesday, false);
  assert.equal(openStatus.isOpen, true);
  assert.equal(openStatus.label, 'OPEN NOW · UNTIL 9:30 PM');

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

test('calculateBookingTotal computes correct sum of minutes and Starts from ₹100 pricing', () => {
  const total = calculateBookingTotal(['sig-cut', 'beard-detail'], mockServices);
  assert.equal(total.totalDurationMinutes, 65);
  assert.equal(total.minPrice, 200);
  assert.equal(total.maxPrice, 200);
  assert.equal(total.selectedItems.length, 2);

  const realTotal = calculateBookingTotal(['sig-cut', 'beard-detail'], SERVICES);
  assert.equal(realTotal.minPrice, 200);
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
    date: '2026-11-10',
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

test('buildHinglishWhatsAppMessage and formatWhatsAppBookingMessage use natural Hinglish and Near Fitness Planet address', () => {
  const singleMsg = buildHinglishWhatsAppMessage('Signature Haircut & Skin Fade');
  assert.equal(
    singleMsg,
    'Namaste Bhaiya! Mujhe Shivangi Hair Salon (Near Fitness Planet, Bhensakhedi Road, Bhopal) mein chair book karni hai. Selected Service: Signature Haircut & Skin Fade (Starts from ₹100 · Negotiable). Kya aaj slot khali hai?'
  );

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

  assert.ok(msg.includes('Namaste Bhaiya! Mujhe Shivangi Hair Salon (Near Fitness Planet, Bhensakhedi Road, Bhopal) mein chair book karni hai.'));
  assert.ok(msg.includes('Selected Service: Signature Haircut + Beard Shaping (Starts from ₹100 · Negotiable). Kya aaj slot khali hai?'));
  assert.ok(msg.includes('Rohit Sharma'));
  assert.ok(!msg.includes('7897+5X4'));

  const url = createWhatsAppUrl('919575830421', msg);
  assert.ok(url.startsWith('https://wa.me/919575830421?text='));
});

test('MACRO_VIDEOS and HERO_CAROUSEL_SLIDES use Supabase URLs and 150+ Verified Bhopal Customers', () => {
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
    assert.ok(url.startsWith('https://tsufahvimyzdlkdhqvnk.supabase.co/'));
  }

  assert.equal(HERO_CAROUSEL_SLIDES.length, 3);
  assert.equal(
    HERO_CAROUSEL_SLIDES[0].eyebrow,
    "BHOPAL'S BEST MEN'S SALON · 150+ VERIFIED BHOPAL CUSTOMERS"
  );
});

test('Address standardization, Hinglish Quiz, and 4 Indian Male Lookbook Age Profiles', () => {
  assert.equal(SALON_INFO.address, 'Near Fitness Planet, Bhensakhedi Road, Bhopal');
  assert.ok(!SALON_INFO.address.includes('7897+5X4'));
  assert.ok(!SALON_INFO.googleMapsEmbedUrl.includes('7897'));
  assert.equal(TRUST_SIGNALS[0].label, '150+ Verified Bhopal Customers');
  assert.equal(REVIEWS[0].clientName, 'Rohit Sharma');

  // Hinglish Quiz options
  assert.ok(QUIZ_QUESTIONS.faceShapes[0].label.includes('Chakor'));
  assert.ok(QUIZ_QUESTIONS.hairTypes[0].label.includes('Seedhe'));

  // 4 Age groups in Lookbook
  const allLookbookText = LOOKBOOK_ITEMS.map(i => `${i.title} ${i.desc}`).join(' ');
  assert.ok(allLookbookText.includes('Kids School Fade'));
  assert.ok(allLookbookText.includes('College Teen Textured Crop'));
  assert.ok(allLookbookText.includes('Young Man Skin Fade & Beard'));
  assert.ok(allLookbookText.includes('Senior/Uncle Classic Scissor Cut'));
});
