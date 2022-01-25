function fizzbuzz(number) {
    if (number % 5 === 0 && number % 3 === 0) {
        return 'FizzBuzz';
    }   else if (number % 5 === 0) {
        return 'Buzz';
    }   else if (number % 3 === 0)  {
        return 'Fizz';
    }   else {
        return number;
    }
}

for (let i = 1; i < 51; i++) {
 console.log(`Fizzbuzz result for ${i} is ` + fizzbuzz(i) )
}

module.exports = fizzbuzz;