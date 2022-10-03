// var, let, const

// let

const fullMoon = true;

let species = 'human';

if (fullMoon) {
    const fullMoon = true;

    let species = 'werewolf';
    console.log(`it is a full moon. Lupin is currently a ${species}`); // werewolf

    if (fullMoon) {
        const fullMoon = true;

        console.log('Another full moon');
        
    }
}

console.log(`it is a full moon. Lupin is currently a ${species}`); // human
