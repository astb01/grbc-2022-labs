// Weekly Routine:

/*
Given that a day is represented by a number and Monday is represented as the 
number 1.

1. Print out when the day is a weekday.
2. On a Tuesday I go to the gym. Display this. 
3. On a Thursday I go to the gym. Display this. 
4. On a Sunday I do gardening. Display this.

*/
let day = 1;

if (day > 0 && day <= 5) {
    console.log('Today is a weekday');
    
    if (day === 2 || day === 4) {
        console.log('Gym');
    }
}
else if (day === 7) {
    console.log('Gardening');
} else {
    console.log('Day does not exist');
}

