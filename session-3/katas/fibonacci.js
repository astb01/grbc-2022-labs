/*
Write a program that produces the 
Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

From 0 to 100.
*/

let i;
let fib = [0, 1];

for (i = 2; i <= 50; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];

  if (fib[i] > 100) {
    break;
  }

  console.log(fib[i]);
}