export const sevenBoom = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('No array provided');
  }

  let result = 'No booming here';

  for (let i = 0; i < numbers.length; i++) {
    const numAsStr = String(numbers[i]);

    if (numAsStr.includes('7')) {
      result = 'Boom!';
    }
  }

  return result;
};

// or (more succinct)

// const sevenBoom = (numbers) =>
//   numbers.some((num) =>
//     String(num).includes('7') ? 'Boom' : 'No booming here',
//   );
