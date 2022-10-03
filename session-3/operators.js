// BODMAS

// Addition
let result = 1 + 1;
let num1 = 2;
let num2 = 3;
let anotherResult = num1 + num2;

console.log(anotherResult);

let num3 = 4;
let id = '23';

let output = num3 + parseInt(id, 10);
console.log(output);

// subtraction

let num4 = 5;
let num5 = 3;
console.log(num4 - num5);

// multiply
let num6 = 5;
let num7 = 3;
console.log(num6 * num7);

// division
let num8 = 10;
let num9 = 5;
console.log(num8 / num9);

// Reminder/Modulus
let num10 = 10;
let num11 = 3;

console.log(num10 % num11);

// increment:

let start = 0;

// post increment
start++;
console.log(start);

// pre-increment:
++start;
console.log(start);

// decrement:

// post decrement:
start--;
console.log(start);

// pre-decrement
--start;
console.log(start);

// compound operators

let num12 = 0;

num12 += 3;
// num12 = num12 + 3;

num12 -= 1;
// num12 = num12 - 1;

num12 /= 1;
// num12 = num12 / 1;

// Equals
let num13 = 10;
let num14 = 10;

console.log(num13 == num14);

let mobileNumber = 447980099876;
let altMobileNumber = '447980099876';

// strict equality
console.log(mobileNumber === altMobileNumber);

// NOT

let topScore = 10;
let result2 = topScore !== 0;
console.log(result2);

// GREATER Than
let result3 = topScore > 5;
console.log(result3);

let num16 = 10;
let num17 = 20;

let resultX = num16 > 10 || num17 > 9;

let people = [];

let allPeople = people || [];

// Ternary Operator

// some condition that evaluates to true ? outcome of true : outcome of false

const isRaining = true;
const whatToWear = isRaining ? 'raincoat' : 'shorts';

// multiple ternaries:
let speed = 90;
let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';
console.log(message); 

// if statement
let age = 12;
if (age < 12) {
    console.log('Too young to vote');
} else {
    console.log('You are old enough to vote');
}

// if else if
if (age < 12) {
    console.log('Too young to vote');

    if (age <= 5) {
        console.log('Should be go to reception')

        /* nested if statements are fine as long as they
        dont go beyond two levels
        */
        if (age < 2) {
            console.log('Should be go to nursery')
        }
        else if (age < 18) {
            console.log('Too young to buy alcohol');
        }
        else if (age < 18) {
            console.log('Too young to buy alcohol');
        }
        else if (age < 18) {
            console.log('Too young to buy alcohol');
        }
    }
} 
else if (age < 18) {
    console.log('Too young to buy alcohol');
}
else {
    console.log('You are old enough to vote');
}
