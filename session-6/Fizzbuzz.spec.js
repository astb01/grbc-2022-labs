/*
FizzBuzz

- If the number is a multiple of 3 return Fizz
- If the number is a multiple of 5 return Buzz
- If the number is a multiple of 3 AND 5 return FizzBuzz
- Any other number is simply returned as is
- Given a positive start and a positive end it should give the output as seen in the example
Example:

1 2 Fizz 4 Buzz Fizz 7 8 ...
*/

import { fizzbuzz, printFizzbuzz } from './Fizzbuzz';
describe('Test fizzbuzz', () => {
  let number;
  it('should return a number', () => {
    number = 1;
    expect(fizzbuzz(number)).toBe(1);
  });

  it('should return fizz when given number is 3', () => {
    number = 3;
    expect(fizzbuzz(number)).toBe('Fizz');
  });

  it('should return buzz when given number is 5', () => {
    number = 5;
    expect(fizzbuzz(number)).toBe('Buzz');
  });

  it('should return fizzbuzz when given number is multiple of 3 and 5', () => {
    number = 15;
    expect(fizzbuzz(number)).toBe('FizzBuzz');
  });
  it('should return 1 2 Fizz 4 Buzz Fizz 7 8 ', () => {
    const expectedOutput = '1 2 Fizz 4 Buzz Fizz 7 8';
    expect(printFizzbuzz(1, 8)).toBe(expectedOutput);
  });
});
