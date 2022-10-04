export const fizzbuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  }

  return number;
};

export const printFizzbuzz = (start, end) => {
  const fizzbuzzArray = [];
  for (let i = start; i <= end; i++) {
    fizzbuzzArray.push(fizzbuzz(i));
  }
  return fizzbuzzArray.join(' ');
};
