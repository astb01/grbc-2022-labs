// DRY: DONT REPEAT YOURSELF
// YAGNI: YOU ARENT GOING TO NEED IT

for (let i = 0; i <= 10; i++) {
    if (i === 3) {
        continue;
    }

    console.log('i:', i);
}

// nested loops:
let timesTable = '';

for (let row = 1; row < 10; row++) {
    for (let col = 1; col < 3; col++) {
        timesTable += (col * row) + `\t`
    }

    timesTable += '\n'
}

console.log(timesTable);

const users = [
    {
        name: 'Jill Smith',
        hobbies: [
            'sport',
            'reading'
        ]
    }
];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user.name, 'likes');

    for (let h = 0; h < user.hobbies.length; h++) {
        console.log(user.hobbies[h]);
    }   
}

// While Loop

let isHappy = true;
let count = 0;

while (isHappy) {
    console.log(`I'm happy`);

    if (count > 5) {
        break;
    }

    count++;
}

// for .. of: array of numbers, array of objects, set, map (entries, keys, values)
const people = ['bob','tay', 'jyoti'];

let i = 0;
for (let person of people) {
    console.log(i, 'Person', person);
    i++;
}

const word = 'code';

for (let letter of word) {
    console.log(letter);
    
}

// for .. in
const student = {
    name: 'Monica',
    class: 7,
    age: 12 
}

for (let key in student) {
    console.log('Key: ', key);
    console.log(student[key]);
}

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

for ( let i in salaries) {
    // add a currency symbol
    let salary = `£${salaries[i]}`;
    // display the values
    console.log(`${i} : ${salary}`);
}