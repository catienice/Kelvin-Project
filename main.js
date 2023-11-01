// the forecast is 293 Kelvin today
const kelvin = 293;

// Celsuis is 273 degrees less than Kelvin
const celsius = (kelvin - 273);

// Conversion from Celsius to Farenheit and rounded down
let farenheit = celsius* (9 / 5) + 32;
Math.floor(farenheit);

let temperature = farenheit;
console.log(`The temperature is ${temperature} degrees Fahrenheit.`);
