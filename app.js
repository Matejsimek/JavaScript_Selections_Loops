// Exercise 1: Ignore Even
console.log('Exercise 1: Ignore Even');

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Exercise 2: FIZZBUZZ
console.log('Exercise 2: FIZZBUZZ');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ');
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    }
}

// Exercise 3: Repeat with While and Do/While
console.log('Exercise 3: Repeat with While and Do/While');

let i = 1;
while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

let j = 1;
do {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
} while (j <= 100);

// Exercise 4: Find Value
console.log('Exercise 4: Find Value');

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false;

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log('Found value!');
        found = true;
        break;
    }
}

if (!found) {
    console.log('Did not find value');
}

// Exercise 5: Customized FIZZBUZZ
console.log('Exercise 5: Customized FIZZBUZZ');

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= m; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log('FIZZBUZZ');
    } else if (i % fizzDivisor === 0) {
        console.log('FIZZ');
    } else if (i % buzzDivisor === 0) {
        console.log('BUZZ');
    }
}

git 