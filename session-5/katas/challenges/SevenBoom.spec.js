import { sevenBoom } from './SevenBoom';

describe('Seven Boom', () => {
  it(`should return 'No booming here' when empty array is passed`, () => {
    const input = [];

    expect(sevenBoom(input)).toBe('No booming here');
  });

  it('should throw an error when an array is not provided', () => {
    expect(() => sevenBoom(undefined)).toThrowError('No array provided');
  });

  it('should throw an error if a string is provided as input', () => {
    expect(() => sevenBoom('hello')).toThrowError('No array provided');
  });

  it('should return boom when 7 appears in numbers', () => {
    const numbers = [1, 2, 3, 7];
    expect(sevenBoom(numbers)).toBe('Boom!');
  });
});
