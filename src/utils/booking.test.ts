import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isTuesday,
  isPastDate,
  generateTimeSlots,
  calculateBookingTotal,
  isValidPhone,
  validateBookingForm,
  formatWhatsAppBookingMessage,
  createWhatsAppUrl,
} from './booking';
import { ServiceItem } from '../types';
import { VIDEOS } from '../config/videos';

const mockServices: ServiceItem[] = [
  {
    id: 'sig-cut',
    name: 'Signature Haircut',
    category: 'hair',
    durationMinutes: 45,
    priceMin: 350,
    priceMax: 450,
    shortDesc: 'Precision scissor cut',
    inclusions: ['Wash', 'Style']
  },
  {
    id: 'beard-detail',
    name: 'Beard Shaping',
    category: 'beard',
    durationMinutes: 30,
    priceMin: 200,
    priceMax: 300,
    shortDesc: 'Razor styling',
    inclusions: ['Hot towel']
  }
];

test('isTuesday correctly identifies Tuesdays and other days', () => {
  // 2026-11-10 is a Tuesday (Nov 10, 2026)
  // Let's verify: 2026-11-08 is Sunday, Nov 09 is Monday, Nov 10 is Tuesday
  assert.equal(isTuesday('2026-11-10'), true);
  // Nov 11, 2026 is Wednesday
  assert.equal(isTuesday('2026-11-11'), false);
  // Nov 09, 2026 is Monday
  assert.equal(isTuesday('2026-11-09'), false);
  // Empty string
  assert.equal(isTuesday(''), false);
});

test('generateTimeSlots produces valid range from 8:30 AM to 9:00 PM', () => {
  const slots = generateTimeSlots();
  assert.ok(slots.length > 20);
  assert.equal(slots[0], '8:30 AM');
  assert.ok(slots.includes('12:00 PM'));
  assert.ok(slots.includes('5:30 PM'));
  assert.equal(slots[slots.length - 1], '9:00 PM');
});

test('calculateBookingTotal computes correct sum of minutes and price ranges', () => {
  const total = calculateBookingTotal(['sig-cut', 'beard-detail'], mockServices);
  assert.equal(total.totalDurationMinutes, 75);
  assert.equal(total.minPrice, 550);
  assert.equal(total.maxPrice, 750);
  assert.equal(total.selectedItems.length, 2);

  // Single item
  const single = calculateBookingTotal(['beard-detail'], mockServices);
  assert.equal(single.totalDurationMinutes, 30);
  assert.equal(single.minPrice, 200);
});

test('isValidPhone correctly validates Indian mobile numbers', () => {
  assert.equal(isValidPhone('9575830421'), true);
  assert.equal(isValidPhone('+919575830421'), true);
  assert.equal(isValidPhone('09575830421'), true);
  assert.equal(isValidPhone('+91 95758 30421'), true);
  assert.equal(isValidPhone('12345'), false);
  assert.equal(isValidPhone('abcde'), false);
  assert.equal(isValidPhone('1234567890'), false); // starts with 1
});

test('validateBookingForm detects missing or invalid fields and Tuesday closure', () => {
  // Empty form
  const emptyRes = validateBookingForm({
    fullName: '',
    phone: '',
    selectedServices: [],
    date: '',
    timeSlot: '',
    notes: '',
  });
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.fullName);
  assert.ok(emptyRes.errors.phone);
  assert.ok(emptyRes.errors.selectedServices);
  assert.ok(emptyRes.errors.date);
  assert.ok(emptyRes.errors.timeSlot);

  // Tuesday appointment rejection
  const tuesdayRes = validateBookingForm({
    fullName: 'Aashif Khan',
    phone: '9575830421',
    selectedServices: ['sig-cut'],
    date: '2026-11-10', // Tuesday
    timeSlot: '11:00 AM',
    notes: 'Low taper fade',
  });
  assert.equal(tuesdayRes.isValid, false);
  assert.match(tuesdayRes.errors.date, /closed on Tuesdays/i);

  // Valid appointment (Wednesday Nov 11, 2026)
  const validRes = validateBookingForm({
    fullName: 'Aashif Khan',
    phone: '9575830421',
    selectedServices: ['sig-cut'],
    date: '2026-11-11',
    timeSlot: '11:00 AM',
    notes: 'Low taper fade',
  });
  assert.equal(validRes.isValid, true);
  assert.deepEqual(validRes.errors, {});
});

test('formatWhatsAppBookingMessage and createWhatsAppUrl format correctly', () => {
  const msg = formatWhatsAppBookingMessage(
    {
      fullName: 'Aashif Khan',
      phone: '9575830421',
      selectedServices: ['sig-cut'],
      date: '2026-11-11',
      timeSlot: '11:00 AM',
      notes: 'Bespoke razor finish',
    },
    mockServices
  );

  assert.ok(msg.includes('Aashif Khan'));
  assert.ok(msg.includes('Signature Haircut'));
  assert.ok(msg.includes('11:00 AM'));
  assert.ok(msg.includes('Bespoke razor finish'));

  const url = createWhatsAppUrl('919575830421', msg);
  assert.ok(url.startsWith('https://wa.me/919575830421?text='));
  assert.ok(url.includes(encodeURIComponent('Aashif Khan')));
});

test('VIDEOS config uses external CDN URLs and zero local /assets/ paths', () => {
  assert.equal(VIDEOS.hero, 'https://placeholder-url.webm');
  assert.equal(VIDEOS.serviceMenu, 'https://placeholder-url.webm');
  assert.equal(VIDEOS.trustStrip, 'https://placeholder-url.webm');
  for (const url of Object.values(VIDEOS)) {
    assert.ok(url.startsWith('https://'), `Expected external https URL, got ${url}`);
    assert.ok(!url.includes('/assets/'), `Expected no local /assets/ path, got ${url}`);
  }
});

