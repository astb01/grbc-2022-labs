function addFiveToNumber(number) {
    return number + 5;
}

console.log(addFiveToNumber(5));

function getName(userObj) {
    // does two things
    return userObj.name;
}

function getAddress(userObj) {
    return userObj.address;
}

// separation of concerns: de-couple logic
function getUserDetails() {
    const obj = {name: 'foo', address: 'london'};
    const name = getName(obj);
    const address = getAddress(obj);

    console.log('Name: ', name, 'Address: ', address);
    
}

// invoke user details function
getUserDetails();

let sayHello = function(message) {
    console.log(message);
}

sayHello('bonjour');

// too many arguments:
function printCustomerDetails(firstName, lastName, street1, 
    street2, city, postCode, contactNo) {
    return firstName;
}

// best practice:
function printCustomerDetailsShort(customerDetails) {
    // this can also be further improved - TBC
    const {firstName} = customerDetails; 
}

printCustomerDetailsShort({
    firstName: 'john', lastName: 'doe', street1: 'street', 
    street2: 'some place', city: 'london', postCode: 'W1', contactNo: '999'
})

function adjustOverdraftForCustomer(overdraftLimit = 300, customer = {}, hobbies = []) {
    console.log('You have a overdraft limit of', overdraftLimit);

    const newOverdraftLimit = overdraftLimit;

    return {
        customer,
        overdraft: newOverdraftLimit // undefined
    };
}

adjustOverdraftForCustomer(undefined, { firstName: 'john', lastName: 'doe'})

// Rest operator
function addNumbers(foo, ...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

const result = addNumbers(5, 6, 7);
console.log('result', result);

// Functions with functions as arguments
function func1(cb) {
    // prepare message:
    const someMessage = 'hhhhhhhaaaaaaaaa';

    cb(someMessage);
}

function func2(message) {
    console.log('Fired function 2', message);
}

func1(func2);

// callbacks

// arrow functions:

const sayHelloWorld = () => console.log('Hello World');

/*
function addFiveToNumber(number) {
    return number + 5;
}
*/

const addFiveToNumberArrow = (number) => {
    const subtracted = number - 5;

    return number + 5;
}

// this

// Guard Expressions
const sendEmail = (to, subject, body) => {
    if (to) {
        console.log('send email ...');
    } else {
        return 'Please enter email address';
    }
}

const sendEmailGuarded = (to, subject, body) => {
    if (!to) {
        return 'Please enter email address';
    }

    // send email to ....
}


