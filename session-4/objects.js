// DESTRUCTURING

const countries = ['France', 'Brazil', 'Germany'];

const brazilElement = countries[1];

const [france, brazil] = countries;
console.log(france, brazil);

const person = {
    firstName: `Jil`,
    lastName: `Smith`,
    address: {
        addressLine1: '1st Foo St',
        addressLine2: null,
        city: 'London',
        postalCode: 'W12 5TY',
        longitude: 34.5,
        latitude: -89.0,
    },
    posts: []
};

// prior:
const firstName = person.firstName;

const {firstName:fName, lastName, address: {
    city
}} = person;



