
// Kata: Divisible By
// Iterate from numbers 1 to 500 inclusive and sum up the numbers 
// that are divisible by ONLY 3 or 5. 
// Also print these numbers as well as the total at the end.

let sum = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 3 === 0|| i % 5 === 0) {
        sum += i;
        console.log('i', i)
    }    
}

console.log('Total', sum)