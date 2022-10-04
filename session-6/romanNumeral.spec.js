/*
Write a program to convert a number to 
Roman Numerals

so  given 1 should return I
    given 2 should return II ....

*/
import { romanNumeral } from './romanNumeral';
describe('Roman Numerals', () => {
  it('should I when 1 is given', () => {
    expect(romanNumeral(1)).toBe('I');
  });
  it('should return II when 2 is given', () => {
    expect(romanNumeral(2)).toBe('II');
  });
  it('should return III when 3 is given', () => {
    expect(romanNumeral(3)).toBe('III');
  });
  it('should return IV when 4 is given', () => {
    expect(romanNumeral(4)).toBe('IV');
  });
  it('should return V when 5 is given', () => {
    expect(romanNumeral(5)).toBe('V');
  });

  it('should return VI when 6 is given', () => {
    expect(romanNumeral(6)).toBe('VI');
  });
});
