// high order functions

const numbers = [1, 2, 3, 4];
numbers.forEach((number) => console.log(number));

const albums = [
    { title: 'Master of Reality', artist: 'Black Sabbath' },
    { title: '2001', artist: 'Dr. Dre'},
    { title: 'Wish You Were Here', artist: 'Pink Floyd' }
];

albums.forEach(album => console.log(album));

const countries = ['France', 'Germany', 'England'];
countries.forEach((country, index) => console.log(`${index + 1} ${country}`));

for (let i = 0; i < countries.length; i++) {
    console.log(`${i + 1} ${countries[i]}`);
}

// chaining

const onlyEvens = n => n % 2 === 0;

const evenNumbers = numbers.filter(n => n % 2 === 0); // numbers.filter(onlyEvens);
console.log(evenNumbers);

// transforming data:
const goalScorers = [
    { name: 'Ronaldo', goals: 20 },
    { name: 'Messi', goals: 30 },
    { name: 'Mbappe', goals: 15 }
];

const goalsAnnouncement = goalScorers.map(scorer => 
     `${scorer.name} has scored ${scorer.goals} goals this calendar year`
)
console.log(goalsAnnouncement);

const pokemonCharacters = [
    {name: 'Shuckle', defenceScore: 67 },
    {name: 'Mega Aggron', defenceScore: 45 },
    {name: 'Mega Steelix', defenceScore: 88 },
    {name: 'Blissey', defenceScore: 58 },
];

console.log(pokemonCharacters.sort());

const sortedCharacters = pokemonCharacters
.sort((a, b) => b.defenceScore - a.defenceScore || a.name.localeCompare(b.name));

console.log(sortedCharacters);


