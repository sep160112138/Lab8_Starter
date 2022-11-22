// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// function isPhoneNumber

test('Checking (123)456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('Checking 111-111-1111 is a phone number', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('Checking 1234567890 is a phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('Checking 1 is a phone number', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});



// function isEmail

test('Checking cbhan@ucsd.edu is email', () => {
    expect(functions.isEmail('cbhan@ucsd.edu')).toBe(true);
});

test('Checking ilovesungod@ucsd.edu is email', () => {
    expect(functions.isEmail('ilovesungod@ucsd.edu')).toBe(true);
});

test('Checking ilovesungod@ucsd.html is email', () => {
    expect(functions.isEmail('ilovesungod@ucsd.html')).toBe(false);
});

test('Checking ilovesungod is email', () => {
    expect(functions.isEmail('ilovesungod')).toBe(false);
});



// function isStrongPassword

test('Checking ILoveSunGod123 is strong password', () => {
    expect(functions.isStrongPassword('ILoveSunGod123')).toBe(true);
});

test('Checking SanDiego92093 is strong password', () => {
    expect(functions.isStrongPassword('SanDiego92093')).toBe(true);
});

test('Checking 123456 is strong password', () => {
    expect(functions.isStrongPassword('123456')).toBe(false);
});

test('Checking yo is strong password', () => {
    expect(functions.isStrongPassword('yo')).toBe(false);
});



// function isDate

test('Checking 11/20/2022 is date', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});

test('Checking 9-16-2001 is date', () => {
    expect(functions.isDate('9/16/2001')).toBe(true);
});

test('Checking 1/2/3 is date', () => {
    expect(functions.isDate('1/2/3')).toBe(false);
});

test('Checking 2022-11-20 is date', () => {
    expect(functions.isDate('2022-11-20')).toBe(false);
});



// function isHexColor

test('Checking #000000 is hex', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('Checking #FFFFFF is hex', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('Checking #FFFFF is hex', () => {
    expect(functions.isHexColor('#FFFFF')).toBe(false);
});

test('Checking #HFFFF0 is hex', () => {
    expect(functions.isHexColor('#HFFFF0')).toBe(false);
});