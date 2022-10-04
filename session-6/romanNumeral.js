export const romanNumeral = (number) => {
  let remainder = number;
  const romanNumerals = [];

  if (remainder > 5) {
    remainder -= number;
    romanNumerals.push('V');
  } else if (remainder <= 5) {
    if (remainder <= 3) {
      for (let i = 1; i <= remainder; i++) {
        romanNumerals.push('I');
        remainder -= 1;
      }
    }
  }
  return romanNumerals.join('');
};

// const addIToNumber = (startingArr, number) => {
//   const arrayWithI = startingArr;
//   for (let i = 1; i <= number; i++) {
//     arrayWithI.push('I');
//   }
//   return arrayWithI.join('');
// };
