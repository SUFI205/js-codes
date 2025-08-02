const score=400;
const balance=new Number(100.50)
console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(3));

const hundereds=1000000;
console.log(hundereds.toLocaleString());

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.sqrt(16));
console.log(Math.abs(-10));
console.log(Math.min(1, 2, 3, -1, -2, -3));
console.log(Math.max(1, 2, 3, -1, -2, -3));
console.log(Math.random());
console.log(Math.floor(Math.random() * 100)); // Random number between 0 and 99

const randomNum = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
console.log(`Random number between 1 and 100: ${randomNum}`);

const radius = 5;
const area = Math.PI * radius * radius;
console.log(`Area of circle with radius ${radius}: ${area.toFixed(2)}`); // Area of circle

const num1 = 10;
const num2 = 20;
console.log(`Sum of ${num1} and ${num2}: ${num1 + num2}`); // Sum of two numbers

const num3 = 15.678;
console.log(`Rounded value of ${num3}: ${Math.round(num3)}`); // Rounded value