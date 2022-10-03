import {fromCelciusToFahrenheit} from './temperature-converter';

describe('Temperature Converter', () => {
    describe('Celcius to Fahrenheit', () => {

        //parameterized test
        it.each([
            [0, 32],
            [25, 77]
        ])(`when celcius is %p return %p`, (celcius, fahrenheit) => {
            expect(fromCelciusToFahrenheit(celcius)).toBe(fahrenheit);
        })

        // it('should return 32 when celcius is 0', () => {
        //     const celcius = 0;

        //     expect(fromCelciusToFahrenheit(celcius)).toBe(32);
        // })
        // it('should return 77 when celcius is 25', () => {
        //     const celcius = 25;

        //     expect(fromCelciusToFahrenheit(celcius)).toBe(77);
        // })

        // it('should return 80.6 when celcius is 27', () => {
        //     const celcius = 27;

        //     expect(fromCelciusToFahrenheit(celcius)).toBe(80.6);
        // })
    })

    describe('Fahrenheit to Celcius', () => {
        // ...
    });

})