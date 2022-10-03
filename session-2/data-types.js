// Strings:

let message = 'this is message';

console.log(message);

let anotherMessage = "this is message";

console.log(anotherMessage);

let longMessage = `this is a backtick wrapped string

this is a long paragraph

because I can type here
`

console.log(longMessage);

// back ticks = template literals

let age = 19;
let personName = 'John Doe';

let personMessage = `${personName} is ${age} years old. He eats ${2 + 2} apples a day` 

// Strings are immutable in JS!

let footballTeam = 'Man Utd';
console.log(footballTeam[0]);

footballTeam[0] = 'K'; // this wont work
console.log(footballTeam[0]);

// String method:

let lengthOfHello = 'hello'.length;

console.log(`Length of hello ${lengthOfHello}`);

let country = 'England';

// sub string:
let landOutput = country.substring(3);
console.log(landOutput);

// devdocs.io

// indexOf - used for finding a needle in a haystack

let userEmailAddress = 'foo@bar.com';

console.log(userEmailAddress.indexOf('@')); // returns 3
console.log(userEmailAddress.indexOf('-')); // returns -1

// last index of:

let fileName = 'worksheets.xls';

let extension = fileName.substring(fileName.lastIndexOf('.'));

// replace:
const phrase = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(phrase.replace('dog', 'gorilla'));

const regularExpression = /Dog/i; // new RegExp('Dog');

console.log(phrase.replace(regularExpression, 'gorilla'));

// slice:
const phrase2 = 'The quick brown fox jumps over the lazy dog.';

console.log(phrase2.slice(31))

console.log(phrase2.slice(4, 19)); // quick brown fox

console.log(phrase2.slice(-4)); // dog.

// split

let paragraph = 'this is a long sentence. I know';

const words = paragraph.split(' '); // words is an array of 7 elements

console.log(words[4]); // sentence.

// Numbers:
let personAge = 18;

let percentage = 0.5; // 50%

let classRoomSize = parseInt('10');
let exchangeRate = parseFloat('8.9');

Number.isNaN(personAge); // true

// Boolean
const isHappy = true;
const isBored = false;

// Null
let respoonse = null;

// Undefined
let score;

// TRUTHY and FALSY

// truthy - except 0, -0, 0n, "", null or undefined
// falsy -  0, -0, 0n, "", null or undefined

// Objects:
const name = 'John';
const ageOfPerson = 56;

const personObj = {
    name: 'John',
    age: 56
};

// dot notation
console.log(`${personObj.name} is ${personObj.age} years old`);

// not preferred
console.log(`${personObj['name']} is ${personObj['age']} years old`);

// Date
const today = new Date();
// today.getTime(); // epoch

// Arrays

const people = [];

people[0] = 'Sofia';
people[1] = 99;  // not preferred to mix types
people[2] = 'Tay';

const nameGenderArr = [['John', 'M'], ['Sue', 'F']];

console.log(nameGenderArr[1][1]);

const nameGenderObjArr = [
    {
        name: 'John',
        gender: 'M'
    },
    {
        name: 'Sue',
        gender: 'F'
    }
];

const sueAsPerson = nameGenderObjArr[1];

console.log(nameGenderObjArr[1].gender);

// Array methods:

const countries = ['France', 'Greece'];

// length
console.log(countries.length);

// array push
countries.push('Italy');

console.log(countries); // 'France', 'Greece', 'Italy'

// array pop (removes the last element)
const lastCountry = countries.pop();
console.log(lastCountry); // 'Italy'

// splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb')

console.log(months);
const monthsWithFeb = months;

months.splice(1, 1);

console.log(months);

// joining arrays

const nationalInsuranceNumberArray = ['GH', '34', '90', '34', 'D'];

const nationalInsurnceFormatted = nationalInsuranceNumberArray.join('');
console.log(nationalInsurnceFormatted);

const cars1 = ['toyota', 'audi'];
const cars2 = ['mini', 'merc'];

console.log(cars1.concat(cars2));

console.log(cars1.reverse());

const garageCars = cars1.concat(cars2);

console.log(garageCars.sort());

const numbers = [ 1, 2, 4, 99, 55, 10 ]

console.log(numbers.sort());

// checking if an array contains an element:

const fruits = ['banana', 'apples'];

console.log(fruits.includes('pear'));

// -----------------------------------------

/*

A bus containing the following children has set of on a zoo trip. 

The order of where the children have been asked to initially sit in the bus is 
represented by the following Array structure where the back of the bus is the first element (i.e. the left most):

Ryan, Brandon, Rebecca, Richard, Jessica, Brian, Antoinne, Grace, Zee, Ibrahim

Issue 1:
On route, Ibrahim feels unwell and ask if he can sit at the back of the bus so he can lie down 
on the back bench Re-arrange the array to fulfill this request and return it as a new array.

Issue 2:
Rebecca is being a nuisance on the trip constantly singing which is upsetting the rest. To resolve this, she's 
best sat at the front of the bus.
Re-arrange the array to fulfill this request and return it as a new array, keeping the previous condition in mind. 

Issue 3:
Richard and Antoinne are best friends and are talking loudly across the bus which is disturbing Jessica and Brian. 
The teacher has decided it's best to move so that Richard to sit behind Antoinne.
Re-arrange the array to fulfilll this request and return it as a new array, keeping the previous conditions in mind. 

Issue 4:
The children have finally arrived! However Ryan has special needs and the teacher thinks he's best at the front 
where 
he can be supervised and enjoy the trip more. However, Rebecca must remain right at the front.
Re-arrange the array to fulfill this request and return it as a new array, keeping the previous conditions in mind.

*/

const childrenArray = ['Ryan', 'Brandon', 'Rebecca', 'Richard', 'Jessica', 'Brian', 'Antoinne', 'Grace', 'Zee', 'Ibrahim'];

// Solution 1
childrenArray.unshift(childrenArray.pop())
const childrenArray1 = childrenArray;
console.log(childrenArray1);

//Solution 2
const rebecca = childrenArray.splice(3, 1);
console.log(rebecca);
const childrenArray2 = childrenArray.concat(rebecca);
console.log(childrenArray2);

//Solution 3

const friend = childrenArray2.splice(3, 1);
console.log(friend)
childrenArray2.splice(5, 0, friend[0]);
const childrenArray3 = childrenArray2;
console.log(childrenArray3)

/*
Issue 4:
The children have finally arrived! However Ryan has special needs and the teacher thinks he's best at the front 
where 
he can be supervised and enjoy the trip more. However, Rebecca must remain right at the front.
Re-arrange the array to fulfill this request and return it as a new array, keeping the previous conditions in mind.
*/


const ryan = childrenArray3.splice(1, 1);

console.log(childrenArray3);

childrenArray3.splice(8, 0, ryan[0]);

console.log(childrenArray3);

// Set
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(6);
mySet.add(1);

console.log(mySet);

console.log(mySet.has(6));

// Map
const myMap = new Map();

myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', { name: 'John', age: 34 })

console.log(myMap);

console.log(myMap.get('c'));





