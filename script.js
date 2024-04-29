// 1. https://www.codewars.com/kata/53dc54212259ed3d4f00071c
// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.
// Input: [1, 5.2, 4, 0, -1] Output: 9.2
// Input: [] Output: 0
// Input: [-2.398] Output: -2.398

const sum = (numbers) => {
    let suma = 0; 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.length > 0) {
            suma += numbers[i];
        }
    }
    return suma;
};

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
console.log(sum([-2.398]));


// 2. https://www.codewars.com/kata/55a5befdf16499bffb00007b 
// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

const add = (a,b) => {
    return a + b;
}

const subt = (a,b) => {
    return a - b;
}

const divide = (a,b) => {
    return a / b;
}

const multiply = (a,b) => {
    return a * b;
}

const mod = (a,b) => {
    return a % b;
}
   
const exponent = (a,b) => {
    return a ** b;
}

console.log('Suma numerelor 10 si 5 este egala cu', add(10,5));
console.log('Diferenta numerelor 10 si 5 este egala cu', subt(10,5));
console.log('Impartirea numerelor 10 si 5 este egala cu', divide(10,5));
console.log('Produsul numerelor 10 si 5 este egal cu', multiply(10,5));
console.log('Restul impartirii numerelor 10 si 5 este egal cu', mod(10,5));
console.log('10 la puterea 5 este egal cu', exponent(10,5));

// 3. https://www.codewars.com/kata/56d6c333c9ae3fc32800070f 
// A variation of determining leap years, assuming only integers are used and years can be negative and positive.
// Write a function which will return the days in the year and the year entered in a string. For example:
// yearDays(2000) returns "2000 has 366 days"
// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.
// Also the basic rule for validating a leap year are as follows
// Most years that can be divided evenly by 4 are leap years.
// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.
// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.


const yearDays = (year) => {
    if (year % 400 === 0) {
        return `${year} has 366 days`
    } else {
        if (year % 4 === 0 && year % 100 !== 0) {
            return `${year} has 366 days`
        } else {
            return `${year} has 365 days`
        }
    }
};

console.log(yearDays(2000)); 
console.log(yearDays(0)); 
console.log(yearDays(-64)); 
console.log(yearDays(2016)); 
console.log(yearDays(1974)); 
console.log(yearDays(-10)); 
console.log(yearDays(600)); 


