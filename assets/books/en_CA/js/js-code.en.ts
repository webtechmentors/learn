function getOutput(code: string) {
  return `<!DOCTYPE html>
  <html>
  <head>
    <style>
      html { font-size: 16px; }
      a { text-decoration: none; }
    </style>
    <script src="assets/js/utils2.js"></script>
  </head>
  <body>
    <script>
      ${code}
    </script>
  </body>
  </html>`
}

export const js_2_1_1 =
`console.log('Hello, world!');`;

export const js_2_1_1_1 = getOutput(js_2_1_1);

export const js_2_1_2 =
`let x = 5;`;

export const js_2_1_3 =
`// This is a single-line comment`;

export const js_2_1_4 =
`/* This is a
multi-line comment */`;

export const js_2_1_5 =
`let message = 'Hello';
const PI = 3.14;`;

export const js_2_1_6 =
`let number = 10;        // Number
let name = 'Jane';      // String
let isActive = true;    // Boolean
let x;                  // Undefined
let y = null;           // Null`;

export const js_2_1_7 =
`let obj = {name: 'John', age: 30};  // Object
let array = [1, 2, 3];              // Array`;

export const js_2_1_8 =
`const userAge = 25;

if (userAge >= 18) {
  console.log('User is an adult.');
} else {
  console.log('User is a minor.');
}`;

export const js_2_1_8_1 = getOutput(js_2_1_8);

export const js_2_1_9 =
`for (let i = 0; i < 5; i++) {
  console.log(i);
}`;

export const js_2_1_9_1 = getOutput(js_2_1_9);

export const js_2_1_10 =
`function greet(name) {
  return 'Hello ' + name;
}`;

export const js_2_1_11 =
`console.log(greet('Alice'));  // Outputs: Hello Alice`;

export const js_2_1_11_1 = getOutput(`${js_2_1_10} ${js_2_1_11}`);

export const js_2_1_12 =
`document.getElementById('myBtn').onclick = function() {
  // Action to perform on button click
};`;

export const js_2_1_13 =
`function func() {
  'use strict';
  x = 3.14;  // This will cause an error because x is not declared
}

func();`;

export const js_2_1_13_1 = getOutput(
`try {
  ${js_2_1_13}
} catch (err) {
  console.error(err)
}`);

export const js_2_2_1 =
`let age = 35;`;

export const js_2_2_2 =
`let name = 'John';`;

export const js_2_2_3 =
`let isActive = true;`;

export const js_2_2_4 =
`let car = null;`;

export const js_2_2_5 =
`let address = undefined;`;

export const js_2_2_6 =
`let id = Symbol();`;

export const js_2_2_7 =
`let person = { name: 'John', age: 25 };`;

export const js_2_2_8 =
`let bigNumber = BigInt(123456789);`;

export const js_2_2_9 =
`let age = 25;
let str = 'John is ' + 25 + ' years old.' // returns 'John is 25 years old.' `;

export const js_2_2_10 =
`let age = 25; 
let typeOfAge = typeof age; // returns 'number'`;

export const js_2_2_11 =
`let person = { name: 'John', age: 25 };
let isInstance = person instanceof Object; // returns true`;

export const js_2_3_1 =
`let x = 5; // Using the assignment operator (=) to assign a value to the variable 'x'
console.log('Initial value of x:', x); // Outputs: 5`;

export const js_2_3_1_1 = getOutput(js_2_3_1);

export const js_2_3_2 =
`let x = 5; // Using the assignment operator (=) to assign a value to the variable 'x'

// Additional assignment operators: +=, -=, *=, /=, and %=
x += 3; // x = x + 3
console.log('x += 3:', x); // Outputs: 8

x -= 2; // x = x - 2
console.log('x -= 2:', x); // Outputs: 6

x *= 4; // x = x * 4
console.log('x *= 4:', x); // Outputs: 24

x /= 3; // x = x / 3
console.log('x /= 3:', x); // Outputs: 8

x %= 5; // x = x % 5 (remainder after division by 5)
console.log('x %= 5:', x); // Outputs: 3`;

export const js_2_3_2_1 = getOutput(js_2_3_2);

export const js_2_3_3 =
`let a = 10;
let b = 4;

// Addition
let sum = a + b;
console.log('Addition:', sum); // Outputs: 14

// Subtraction
let difference = a - b;
console.log('Subtraction:', difference); // Outputs: 6

// Multiplication
let product = a * b;
console.log('Multiplication:', product); // Outputs: 40

// Division
let quotient = a / b;
console.log('Division:', quotient); // Outputs: 2.5`;

export const js_2_3_3_1 = getOutput(js_2_3_3);

export const js_2_3_4 =
`let a = 10;
let b = 4;

// Modulo
let remainder = a % b;
console.log('Modulo:', remainder); // Outputs: 2`;

export const js_2_3_4_1 = getOutput(js_2_3_4);

export const js_2_3_5 =
`// Increment
let x = 5;
x++;
console.log('Increment:', x); // Outputs: 6

// Decrement
let y = 8;
y--;
console.log('Decrement:', y); // Outputs: 7`; 

export const js_2_3_5_1 = getOutput(js_2_3_5);

export const js_2_3_6 =
`// Equal to (==)
let a = 5;
let b = '5';
let isEqual = a == b;
console.log('Equal to (==):', isEqual); // Outputs: true

// Not equal to (!=)
let c = 10;
let d = 7;
let notEqual = c != d;
console.log('Not equal to (!=):', notEqual); // Outputs: true

// Strict equal to (===)
let e = 5;
let f = 5;
let isStrictEqual = e === f;
console.log('Strict equal to (===):', isStrictEqual); // Outputs: true

// Strict not equal to (!==)
let g = 10;
let h = '10';
let isStrictNotEqual = g !== h;
console.log('Strict not equal to (!==):', isStrictNotEqual); // Outputs: true`;

export const js_2_3_6_1 = getOutput(js_2_3_6);

export const js_2_3_7 =
`// Greater than (>)
let i = 8;
let j = 5;
let isGreater = i > j;
console.log('Greater than (>):', isGreater); // Outputs: true

// Less than (<)
let k = 3;
let l = 6;
let isLess = k < l;
console.log('Less than (<):', isLess); // Outputs: true

// Greater than or equal to (>=)
let m = 7;
let n = 7;
let isGreaterOrEqual = m >= n;
console.log('Greater than or equal to (>=):', isGreaterOrEqual); // Outputs: true

// Less than or equal to (<=)
let o = 9;
let p = 12;
let isLessOrEqual = o <= p;
console.log('Less than or equal to (<=):', isLessOrEqual); // Outputs: true`;

export const js_2_3_7_1 = getOutput(js_2_3_7);

export const js_2_3_8 =
`// Logical AND (&&)
let a = true;
let b = true;
let resultAND = a && b;
console.log('Logical AND (&&):', resultAND); // Outputs: true`;

export const js_2_3_8_1 = getOutput(js_2_3_8);

export const js_2_3_9 =
`// Logical OR (||)
let c = true;
let d = false;
let resultOR = c || d;
console.log('Logical OR (||):', resultOR); // Outputs: true`;

export const js_2_3_9_1 = getOutput(js_2_3_9);

export const js_2_3_10 =
`// Logical NOT (!)
let e = true;
let resultNOT = !e;
console.log('Logical NOT (!):', resultNOT); // Outputs: false`;

export const js_2_3_10_1 = getOutput(js_2_3_10);

export const js_2_3_11 =
`let num = 10;
let result = num % 2 === 0 ? 'Even' : 'Odd';
console.log(result); // Outputs: 'Even'`;

export const js_2_3_11_1 = getOutput(js_2_3_11);

export const js_2_3_12 =
`// Without using the grouping operator
let result1 = 10 + 5 * 2;
console.log('Result 1:', result1); // Outputs: 20 (Multiplication performed first, then addition)

// Using the grouping operator
let result2 = (10 + 5) * 2;
console.log('Result 2:', result2); // Outputs: 30 (Addition inside parentheses performed first, then multiplication)`;

export const js_2_3_12_1 = getOutput(js_2_3_12);

export const js_2_3_13 =
`// Bitwise AND (&)
let a = 5; // Binary: 0101
let b = 3; // Binary: 0011
let resultAND = a & b; // Binary: 0001 (Decimal: 1)
console.log('Bitwise AND (&):', resultAND); // Outputs: 1

// Bitwise OR (|)
let c = 5; // Binary: 0101
let d = 3; // Binary: 0011
let resultOR = c | d; // Binary: 0111 (Decimal: 7)
console.log('Bitwise OR (|):', resultOR); // Outputs: 7

// Bitwise XOR (^)
let e = 5; // Binary: 0101
let f = 3; // Binary: 0011
let resultXOR = e ^ f; // Binary: 0110 (Decimal: 6)
console.log('Bitwise XOR (^):', resultXOR); // Outputs: 6

// Bitwise NOT (~)
let g = 5; // Binary: 0101
let resultNOT = ~g; // Binary: 1010 (Decimal: -6)
console.log('Bitwise NOT (~):', resultNOT); // Outputs: -6

// Bitwise left shift (<<)
let h = 5; // Binary: 0101
let resultLeftShift = h << 2; // Binary: 010100 (Decimal: 20)
console.log('Bitwise left shift (<<):', resultLeftShift); // Outputs: 20

// Bitwise right shift (>>)
let i = 16; // Binary: 0001 0000
let resultRightShift = i >> 2; // Binary: 0000 0100 (Decimal: 4)
console.log('Bitwise right shift (>>):', resultRightShift); // Outputs: 4

// Bitwise unsigned right shift (>>>)
let j = -16; // Binary: 1111 1111 1111 1111 1111 1111 1111 0000
let resultUnsignedRightShift = j >>> 2; // Binary: 0011 1111 1111 1111 1111 1111 1111 1100 (Decimal: 1073741820)
console.log('Bitwise unsigned right shift (>>>):', resultUnsignedRightShift); // Outputs: 1073741820`;

export const js_2_3_13_1 = getOutput(js_2_3_13);

export const js_3_1_1 =
`if (condition) {
  // Code to execute if condition is true
}`;

export const js_3_1_2 =
`let score = 75;
if (score > 70) {
  console.log('Pass');
}`;

export const js_3_1_2_1 = getOutput(js_3_1_2);

export const js_3_1_3 =
`if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}`;

export const js_3_1_4 =
`let score = 65;
if (score > 70) {
  console.log('Pass');
} else {
  console.log('Fail');
}`;

export const js_3_1_4_1 = getOutput(js_3_1_4);

export const js_3_1_5 =
`if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if both condition1 and condition2 are false
}`;

export const js_3_1_6 =
`let score = 85;
if (score >= 90) {
  console.log('Grade A');
} else if (score >= 80) {
  console.log('Grade B');
} else {
  console.log('Grade below B');
}`;

export const js_3_1_6_1 = getOutput(js_3_1_6);

export const js_3_1_7 =
`switch(expression) {
  case x:
    // Code to execute if expression equals x
    break;
  case y:
    // Code to execute if expression equals y
    break;
  default:
    // Code to execute if expression doesn't match any case
}`;

export const js_3_1_8 =
`let fruit = 'Apple';
switch(fruit) {
  case 'Banana':
    console.log('Yellow fruit');
    break;
  case 'Apple':
    console.log('Red or green fruit');
    break;
  default:
    console.log('Unknown fruit');
}`;

export const js_3_1_8_1 = getOutput(js_3_1_8);

export const js_3_2_1 =
`condition ? expressionIfTrue : expressionIfFalse;`;

export const js_3_2_2 =
`let age = 20;
let role = age >= 18 ? 'Adult' : 'Child';
console.log(role); // 'Adult'`;

export const js_3_2_2_1 = getOutput(js_3_2_2);

export const js_3_2_3 =
`obj?.prop;       // Accessing property
obj?.[expr];     // Accessing property with expression
func?.(...args); // Calling a function (if it exists)`;

export const js_3_2_4 =
`let user = {
  name: 'Alice',
  address: null
};

let streetName = user?.address?.street; // No error, returns undefined
console.log(streetName); // undefined`;

export const js_3_2_4_1 = getOutput(js_3_2_4);

export const js_3_2_5 =
`leftExpr ?? rightExpr;`;

export const js_3_2_6 =
`let inputName = null;
let userName = inputName ?? 'Anonymous'; // userName will be 'Anonymous'
console.log(userName); // 'Anonymous'`;

export const js_3_2_6_1 = getOutput(js_3_2_6);

export const js_3_3_1 =
`for (initialization; condition; increment) {
  // Code to be executed
}`;

export const js_3_3_2 =
`for (let i = 0; i < 5; i++) {
  console.log(i); // This will log 0, 1, 2, 3, 4
}`;

export const js_3_3_2_1 = getOutput(js_3_3_2);

export const js_3_3_3 =
`while (condition) {
  // Code to be executed
}`;

export const js_3_3_4 =
`let i = 0;
while (i < 5) {
  console.log(i); // This will log 0, 1, 2, 3, 4
  i++;
}`;

export const js_3_3_4_1 = getOutput(js_3_3_4);

export const js_3_3_5 =
`do {
  // Code to be executed
} while (condition);`;

export const js_3_3_6 =
`let i = 0;
do {
  console.log(i); // This will log 0, 1, 2, 3, 4
  i++;
} while (i < 5);`;

export const js_3_3_6_1 = getOutput(js_3_3_6);

export const js_3_3_7 =
`for (key in object) {
  // Code to be executed
}`;

export const js_3_3_8 =
`const person = {firstName: 'John', lastName: 'Doe'};
for (let key in person) {
  console.log(key + ': ' + person[key]); // This will log 'firstName: John' and 'lastName: Doe'
}`;

export const js_3_3_8_1 = getOutput(js_3_3_8);

export const js_3_3_9 =
`for (value of iterable) {
  // Code to be executed
}`;

export const js_3_3_10 =
`let colors = ['Red', 'Green', 'Blue'];
for (let color of colors) {
  console.log(color); // This will log 'Red', 'Green', and 'Blue' respectively
}`;

export const js_3_3_10_1 = getOutput(js_3_3_10);

export const js_4_1_1 =
`function greet(name) {
  return 'Hello ' + name;
}`;

export const js_4_1_2 =
`const square = function(number) {
  return number * number;
};`;

export const js_4_1_3 =
`const sum = (a, b) => a + b;`;

export const js_4_1_4 =
`function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}`;

export const js_4_1_5 =
"function greet({ name, age }) { \n\
  return `Hello, my name is ${name} and I am ${age} years old.`; \n\
}";

export const js_4_1_6 =
"function setCoordinates([x, y]) { \n\
  return `X: ${x}, Y: ${y}`; \n\
}";

export const js_4_1_7 =
`console.log(greet('Alice')); // Calls the greet function with 'Alice' as an argument
console.log(square(4));     // Calls the square function with 4 as an argument
console.log(sum(5, 10));    // Calls the sum function with 5 and 10 as arguments`;

export const js_4_1_7_1 = getOutput(`${js_4_1_1} ${js_4_1_2} ${js_4_1_3} ${js_4_1_7}`);

export const js_4_1_8 =
`console.log(sum(1, 2, 3, 4)); // Outputs: 10`;

export const js_4_1_8_1 = getOutput(`${js_4_1_4} ${js_4_1_8}`);

export const js_4_1_9 =
`console.log(greet({ name: 'Alice', age: 30 })); // Outputs: Hello, my name is Alice and I am 30 years old.`;

export const js_4_1_9_1 = getOutput(`${js_4_1_5} ${js_4_1_9}`);

export const js_4_1_10 =
`console.log(setCoordinates([10, 20])); // Outputs: X: 10, Y: 20`;

export const js_4_1_10_1 = getOutput(`${js_4_1_6} ${js_4_1_10}`);

export const js_4_1_11 =
`function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  console.log(callback(name));
}

processUserInput(greet); // The greet function is passed as a callback`;

export const js_4_1_11_1 = getOutput(`${js_4_1_1} ${js_4_1_11}`);

export const js_4_1_12 =
`(function() {
  var privateVar = 'I am private';
  console.log(privateVar);  // Outputs: 'I am private'
})();`;

export const js_4_1_12_1 = getOutput(js_4_1_12);

export const js_4_2_1 =
`let globalVar = 'I am global';

function testScope() {
  console.log(globalVar); // Accessible here
}

testScope();

console.log(globalVar); // Also accessible here`;

export const js_4_2_1_1 = getOutput(js_4_2_1);

export const js_4_2_2 =
`function testFunctionScope() {
  var localVar = 'I am local to testFunctionScope';
  console.log(localVar); // Accessible here
}

testFunctionScope();

try {
  console.log(localVar); // Uncaught ReferenceError: localVar is not defined
} catch (err) {
  console.error(err);
}`;

export const js_4_2_2_1 = getOutput(js_4_2_2);

export const js_4_2_3 =
`if (true) {
  let blockScopedVar = 'I am block-scoped';
  console.log(blockScopedVar); // Accessible here
}

try {
  console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined
} catch (err) {
  console.error(err);
}`;

export const js_4_2_3_1 = getOutput(js_4_2_3);

export const js_4_2_4 =
`function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
      console.log('Outer Variable: ' + outerVariable);
      console.log('Inner Variable: ' + innerVariable);
  }
}

const newFunction = outerFunction('outside');
newFunction('inside');`;

export const js_4_2_4_1 = getOutput(js_4_2_4);

export const js_4_3_1 =
`const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

person.greet(); // this in greet() refers to person`;

export const js_4_3_1_1 = getOutput(js_4_3_1);

export const js_4_3_2 =
`var hello = 'Hello';

function showThis() {
  console.log(this.hello);
}

showThis(); // this refers to the global object or undefined in strict mode`;

export const js_4_3_2_1 = getOutput(js_4_3_2);

export const js_4_3_3 =
`function Person(name) {
  this.name = name;
}

const bob = new Person('Bob');
console.log(bob.name); // this in Person() refers to the new instance bob`;

export const js_4_3_3_1 = getOutput(js_4_3_3);

export const js_4_3_4 =
`function greet() {
  console.log('Hello, ' + this.name);
}

const user = { name: 'Sarah' };
greet.call(user); // this in greet() refers to user`;

export const js_4_3_4_1 = getOutput(js_4_3_4);

export const js_4_3_5 =
`const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamGreet: function() {
    this.members.forEach((member) => {
      console.log(member + ' is part of ' + this.teamName);
    });
  }
};

team.teamGreet(); // 'this' inside the arrow function refers to team`;

export const js_4_3_5_1 = getOutput(js_4_3_5);

export const js_4_3_6 =
`function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10`;

export const js_4_3_6_1 = getOutput(js_4_3_6);

export const js_4_4_1 =
`function greet(greeting, signOff) {
  console.log(greeting + ', ' + this.name + '. ' + signOff);
}

const user = { name: 'Alice' };
greet.call(user, 'Hello', 'Have a nice day'); // 'Hello, Alice. Have a nice day'
`;

export const js_4_4_1_1 = getOutput(js_4_4_1);

export const js_4_4_2 =
`function sum() {
  return Array.prototype.reduce.call(arguments, (acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sum.apply(null, numbers)); // 15`;

export const js_4_4_2_1 = getOutput(js_4_4_2);

export const js_4_4_3 =
`function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // 10`;

export const js_4_4_3_1 = getOutput(js_4_4_3);

export const js_4_5_1 =
`const functionName = (parameters) => {
  // Function body
};`;

export const js_4_5_2 =
`const greet = () => console.log('Hello');

greet(); // 'Hello'`;

export const js_4_5_2_1 = getOutput(js_4_5_2);

export const js_4_5_3 =
`const square = number => number * number;

console.log(square(3)); // 9`;

export const js_4_5_3_1 = getOutput(js_4_5_3);

export const js_4_5_4 =
`const add = (a, b) => a + b;

console.log(add(1, 2)); // 3`;

export const js_4_5_4_1 = getOutput(js_4_5_4);

export const js_4_5_5 =
`const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // 6
`;

export const js_4_5_5_1 = getOutput(js_4_5_5);

export const js_4_5_6 =
`const complexFunction = (a, b) => {
  const result = a + b;
  return result * 2;
};

console.log(complexFunction(1, 2)); // 6`;

export const js_4_5_6_1 = getOutput(js_4_5_6);

export const js_4_5_7 =
`class Timer {
  constructor() {
    this.seconds = 0;
    setTimeout(() => {
      this.seconds += 100; // 'this' refers to the Timer instance
    }, 1000);
  }
}

let timer = new Timer();

setTimeout(() => {
  console.log(timer.seconds); // 100
}, 2000);`;

export const js_4_5_7_1 = getOutput(js_4_5_7);

export const js_4_5_8 =
`const showArgs = (...args) => console.log(args);

showArgs(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]`;

export const js_4_5_8_1 = getOutput(js_4_5_8);

export const js_4_5_9 =
`const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(number => number * number);

console.log(squares); // [1, 4, 9, 16, 25]`;

export const js_4_5_9_1 = getOutput(js_4_5_9);

export const js_5_1_1 =
`let stringPrimitive1 = 'This is a string';
let stringPrimitive2 = "This is also a string";
let stringPrimitive3 = \`This is a string using template literals\`;`;

export const js_5_1_2 =
`let stringObject = new String('This is a string object');`;

export const js_5_1_3 =
`console.log(typeof stringPrimitive1); // Outputs: 'string'
console.log(typeof stringObject); // Outputs: 'object'`;

export const js_5_1_3_1 = getOutput(`${js_5_1_1} ${js_5_1_2} ${js_5_1_3}`);

export const js_5_1_4 =
`console.log('Hello' === 'Hello'); // Outputs: true
console.log(new String('Hello') === new String('Hello')); // Outputs: false`;

export const js_5_1_4_1 = getOutput(js_5_1_4);

export const js_5_1_5 =
`console.log('Hello'.length); // Outputs: 5`;

export const js_5_1_5_1 = getOutput(js_5_1_5);

export const js_5_1_6 =
`console.log('Hello'.charAt(1)); // Outputs: e`;

export const js_5_1_6_1 = getOutput(js_5_1_6);

export const js_5_1_7 =
`console.log('Hello '.concat('World!')); // Outputs: Hello World!`;

export const js_5_1_7_1 = getOutput(js_5_1_7);

export const js_5_1_8 =
`console.log('Hello'.includes('ell')); // Outputs: true`;

export const js_5_1_8_1 = getOutput(js_5_1_8);

export const js_5_1_9 =
`console.log('Hello'.indexOf('e')); // Outputs: 1`;

export const js_5_1_9_1 = getOutput(js_5_1_9);

export const js_5_1_10 =
`console.log('Hello'.slice(1, 3)); // Outputs: el`;

export const js_5_1_10_1 = getOutput(js_5_1_10);

export const js_5_1_11 =
`console.log('a,b,c'.split(',')); // Outputs: ['a', 'b', 'c']`;

export const js_5_1_11_1 = getOutput(js_5_1_11);

export const js_5_1_12 =
`console.log('Hello'.toLowerCase()); // Outputs: hello`;

export const js_5_1_12_1 = getOutput(js_5_1_12);

export const js_5_1_13 =
`console.log('Hello'.toUpperCase()); // Outputs: HELLO`;

export const js_5_1_13_1 = getOutput(js_5_1_13);

export const js_5_1_14 =
`console.log('  Hello  '.trim()); // Outputs: Hello`;

export const js_5_1_14_1 = getOutput(js_5_1_14);

export const js_5_1_15 =
`let hello = 'Hello, ';
let world = 'world!';
let greeting = hello + world;

console.log(greeting); // Outputs: Hello, world!`;

export const js_5_1_15_1 = getOutput(js_5_1_15);

export const js_5_1_16 =
`let message = 'Hello, ';
message += 'world!';

console.log(message); // Outputs: Hello, world!`;

export const js_5_1_16_1 = getOutput(js_5_1_16);

export const js_5_1_17 =
"let name = 'Alice'; \n\
let greeting = `Hello, ${name}!`; \n\
\n\
console.log(greeting); // Outputs: Hello, Alice!";

export const js_5_1_17_1 = getOutput(js_5_1_17);

export const js_5_1_18 =
`let text = 'Hello';

for (const char of text) {
    console.log(char);
}
`;

export const js_5_1_18_1 = getOutput(js_5_1_18);

export const js_5_1_19 =
`let greeting = 'Hello';
let [firstChar, secondChar, thirdChar, fourthChar, fifthChar] = greeting;

console.log(firstChar);  // Outputs: H
console.log(secondChar); // Outputs: e
console.log(thirdChar);  // Outputs: l
console.log(fourthChar); // Outputs: l
console.log(fifthChar);  // Outputs: o`;

export const js_5_1_19_1 = getOutput(js_5_1_19);

export const js_5_1_20 =
`let str = 'Hello, world!';
let [firstChar, secondChar, ...restOfChars] = str;

console.log(firstChar);  // Outputs: H
console.log(secondChar); // Outputs: e
console.log(restOfChars); // Outputs: ['l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']`;

export const js_5_1_20_1 = getOutput(js_5_1_20);

export const js_5_2_1 =
`let fruits = ['apple', 'banana', 'cherry']; // Creates an array with three elements
let numbers = [1, 2, 3, 4, 5]; // Creates an array with five numeric elements
let emptyArray = []; // Creates an empty array

console.log(fruits); // Outputs: ['apple', 'banana', 'cherry']
console.log(numbers); // Outputs: [1, 2, 3, 4, 5]
console.log(emptyArray); // Outputs: []`;

export const js_5_2_1_1 = getOutput(js_5_2_1);

export const js_5_2_2 =
`let colors = new Array('red', 'green', 'blue');
console.log(colors); // Outputs: ['red', 'green', 'blue']`;

export const js_5_2_2_1 = getOutput(js_5_2_2);

export const js_5_2_3 =
`let arrayOfUndefined = new Array(3); // Creates an array with 3 empty slots
console.log(arrayOfUndefined); // Outputs: [undefined, undefined, undefined]`;

export const js_5_2_3_1 = getOutput(js_5_2_3);

export const js_5_2_4 =
`let mixedArray = [1, 'hello', { a: 1, b: 2 }, [2, 3, 4]];
console.log(mixedArray); // Outputs: [1, 'hello', { a: 1, b: 2 }, [2, 3, 4]]`;

export const js_5_2_4_1 = getOutput(js_5_2_4);

export const js_5_2_5 =
`let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let firstRowFirstCol = matrix[0][0]; // 1

console.log(matrix); // Outputs: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(firstRowFirstCol); // Outputs: 1`;

export const js_5_2_5_1 = getOutput(js_5_2_5);

export const js_5_2_6 =
`let fruits = ['apple', 'banana', 'cherry'];
let length = fruits.length; // Returns the length of the fruits array

console.log(length); // Outputs: 3`;

export const js_5_2_6_1 = getOutput(js_5_2_6);

export const js_5_2_7 =
`let fruits = ['apple', 'banana', 'cherry'];

// Accesses the first element
let firstFruit = fruits[0]; // apple

// Accesses the second element
let secondFruit = fruits[1]; // banana

// Accesses the last element
let lastFruit = fruits[fruits.length - 1]; // cherry

console.log(firstFruit, secondFruit, lastFruit); // Outputs: apple banana cherry`;

export const js_5_2_7_1 = getOutput(js_5_2_7);

export const js_5_2_8 =
`let fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach(fruit => console.log(fruit));`;

export const js_5_2_8_1 = getOutput(js_5_2_8);

export const js_5_2_9 =
`let fruits = ['apple', 'banana', 'cherry'];

// Destructures the array
let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // Outputs: apple
console.log(secondFruit); // Outputs: banana
console.log(thirdFruit); // Outputs: cherry`;

export const js_5_2_9_1 = getOutput(js_5_2_9);

export const js_5_2_10 =
`let fruits = ['apple', 'banana', 'cherry'];
let [firstFruit, , thirdFruit] = fruits;

console.log(firstFruit); // Outputs: apple
console.log(thirdFruit); // Outputs: cherry`;

export const js_5_2_10_1 = getOutput(js_5_2_10);

export const js_5_2_11 =
`let fruits = ['apple', 'banana', 'cherry'];
let [firstFruit, ...remainingFruits] = fruits;

console.log(firstFruit); // Outputs: apple
console.log(remainingFruits); // Outputs: ['banana', 'cherry']`;

export const js_5_2_11_1 = getOutput(js_5_2_11);

export const js_5_2_12 =
`let colors = ['red'];
let [firstColor, secondColor = 'green'] = colors;

console.log(firstColor);  // Outputs: red
console.log(secondColor); // Outputs: green (default value)`;

export const js_5_2_12_1 = getOutput(js_5_2_12);

export const js_5_2_13 =
`let fruits = ['apple', 'banana'];
fruits.push('orange'); // fruits is now ['apple', 'banana', 'orange']

console.log(fruits); // Outputs: ['apple', 'banana', 'orange']`;

export const js_5_2_13_1 = getOutput(js_5_2_13);

export const js_5_2_14 =
`let fruits = ['apple', 'banana', 'cherry'];
let lastFruit = fruits.pop(); // Removes 'orange'

console.log(lastFruit); // Outputs: cherry
console.log(fruits); // Outputs: ['apple', 'banana']`;

export const js_5_2_14_1 = getOutput(js_5_2_14);

export const js_5_2_15 =
`let fruits = ['apple', 'banana', 'cherry'];
fruits.unshift('strawberry'); // fruits is now ['strawberry', 'apple', 'banana', 'orange']

console.log(fruits); // Outputs: ['strawberry', 'apple', 'banana', 'orange']`;

export const js_5_2_15_1 = getOutput(js_5_2_15);

export const js_5_2_16 =
`let fruits = ['strawberry', 'apple', 'banana', 'cherry'];
let firstFruit = fruits.shift(); // Removes 'strawberry'

console.log(firstFruit); // Outputs: strawberry
console.log(fruits); // Outputs: ['apple', 'banana', 'cherry']`;

export const js_5_2_16_1 = getOutput(js_5_2_16);

export const js_5_2_17 =
`let numbers = [1, 2, 3];
let squared = numbers.map(num => num * num); // [1, 4, 9]

console.log(squared); // Outputs: [1, 4, 9]`;

export const js_5_2_17_1 = getOutput(js_5_2_17);

export const js_5_2_18 =
`let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

console.log(evenNumbers); // Outputs: [2, 4]`;

export const js_5_2_18_1 = getOutput(js_5_2_18);

export const js_5_2_19 =
`let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15

console.log(sum); // Outputs: 15`;

export const js_5_2_19_1 = getOutput(js_5_2_19);

export const js_5_2_20 =
`let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(num => num % 2 === 0); // 2

console.log(firstEven); // Outputs: 2`;

export const js_5_2_20_1 = getOutput(js_5_2_20);

export const js_5_2_21 =
`let fruits = ['apple', 'banana', 'cherry'];
let index = fruits.indexOf('banana'); // 1

console.log(index); // Outputs: 1`;

export const js_5_2_21_1 = getOutput(js_5_2_21);

export const js_5_2_22 =
`let fruits = ['apple', 'banana', 'cherry'];
let reversedFruits = fruits.reverse(); // Reverses the order of 'fruits'

console.log(reversedFruits); // Outputs: ['cherry', 'banana', 'apple']`;

export const js_5_2_22_1 = getOutput(js_5_2_22);

export const js_5_2_23 =
`let fruits = ['strawberry', 'banana', 'apple', 'cherry'];
let sortedFruits = fruits.sort(); // Sorts the 'fruits' array alphabetically

console.log(sortedFruits); // Outputs: ['apple', 'banana', 'cherry', 'strawberry']`;

export const js_5_2_23_1 = getOutput(js_5_2_23);

export const js_5_2_24 =
`let people = [
  { name: 'John', age: 30 },
  { name: 'Anna', age: 24 },
  { name: 'Mike', age: 28 }
];

// Sorts by age
people.sort((a, b) => a.age - b.age);
console.log(people); // Outputs: [{ name: 'Anna', age: 24 }, { name: 'Mike', age: 28 }, { name: 'John', age: 30 }]`;

export const js_5_2_24_1 = getOutput(js_5_2_24);

export const js_5_2_25 =
`let fruits = ['apple', 'banana', 'cherry'];
let someFruits = fruits.slice(1, 3); // Gets elements from index 1 to 2

console.log(someFruits); // Outputs: ['banana', 'cherry']`;

export const js_5_2_25_1 = getOutput(js_5_2_25);

export const js_5_2_26 =
`let fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 0, 'kiwi'); // Inserts 'kiwi' at index 1

console.log(fruits); // Outputs: ['apple', 'kiwi', 'banana', 'cherry']`;

export const js_5_2_26_1 = getOutput(js_5_2_26);

export const js_5_2_27 =
`let fruits = ['apple', 'banana', 'cherry'];
let fruitsString = fruits.join(', '); // 'apple, banana, orange'

console.log(fruitsString); // Outputs: 'apple, banana, orange'`;

export const js_5_2_27_1 = getOutput(js_5_2_27);

export const js_5_2_28 =
`let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);

console.log(combinedArray); // Outputs: [1, 2, 3, 4, 5, 6]`;

export const js_5_2_28_1 = getOutput(js_5_2_28);

export const js_5_2_29 =
`let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let combinedArray = [...array1, ...array2];

console.log(combinedArray); // Outputs: ['a', 'b', 'c', 'd', 'e', 'f']`;

export const js_5_2_29_1 = getOutput(js_5_2_29);

export const js_5_3_1 =
`let person = {
  name: 'Alice',
  age: 30,
  greet: function() { 
    return 'Hello!'; 
  }
};

console.log(person.name); // Outputs: Alice
console.log(person.age); // Outputs: 30
console.log(person.greet()); // Outputs: Hello!`;

export const js_5_3_1_1 = getOutput(js_5_3_1);

export const js_5_3_2 =
`let person = {
  name: 'Alice',
  age: 30
};

person.job = 'Developer'; // Adds a new property
console.log(person.job); //  Outputs: 'Developer'

person.age = 31; // Modifies an existing property
console.log(person.age); //  Outputs: 31

delete person.age; // Deletes a property
console.log(person.age); //  Outputs: undefined`;

export const js_5_3_2_1 = getOutput(js_5_3_2);

export const js_5_3_3 =
"let person = { \n\
  firstName: 'Alice', \n\
  lastName: 'Smith', \n\
  get fullName() {  \n\
    return `${this.firstName} ${this.lastName}`;  \n\
  }, \n\
  set fullName(name) { \n\
    let parts = name.split(' '); \n\
    this.firstName = parts[0]; \n\
    this.lastName = parts[1]; \n\
  } \n\
}; \n\
\n\
console.log(person.fullName); // Outputs: Alice Smith \n\
\n\
person.fullName = 'John Doe'; // Resets fullName \n\
console.log(person.fullName); // Outputs: John Smith";

export const js_5_3_3_1 = getOutput(js_5_3_3);

export const js_5_3_4 =
`let name = 'Alice';
let age = 25;

let person = { name, age };

console.log(person.name); // Outputs: Alice
console.log(person.age); // Outputs: 25`;

export const js_5_3_4_1 = getOutput(js_5_3_4);

export const js_5_3_5 =
`let propName = 'status';

let person = { 
  name: 'Alice', 
  age: 25,
  [propName]: 'active'
};

console.log(person.status); // Outputs: active;`;

export const js_5_3_5_1 = getOutput(js_5_3_5);

export const js_5_3_6 =
`let person = {
  name: 'Alice',
  age: 30,
  greet: function() { 
    return 'Hello!'; 
  }
};

console.log(person.greet()); // Outputs: Hello!`;

export const js_5_3_6_1 = getOutput(js_5_3_6);

export const js_5_3_7 =
"let person = { \n\
  name: 'Alice', \n\
  greet: function() {  \n\
    return `Hello ${this.name}`;  \n\
  } \n\
} \n\
\n\
console.log(person.greet()); // Outputs: Hello Alice";

export const js_5_3_7_1 = getOutput(js_5_3_7);

export const js_5_3_8 =
`let person = {
  name: 'John Doe',
  age: 30,
  isEmployed: true
};

console.log(person);`;

export const js_5_3_8_1 = getOutput(js_5_3_8);

export const js_5_3_9 =
`let person = new Object();
person.name = 'John Doe';
person.age = 30;
person.isEmployed = true;

console.log(person);`;

export const js_5_3_9_1 = getOutput(js_5_3_9);

export const js_5_3_10 =
`function Person(name, age, isEmployed) {
  this.name = name;
  this.age = age;
  this.isEmployed = isEmployed;
}

let person = new Person('John Doe', 30, true);
console.log(person);`;

export const js_5_3_10_1 = getOutput(js_5_3_10);

export const js_5_3_11 =
"let personProto = { \n\
  greet: function() { \n\
    return `Hello, ${this.name}`; \n\
  } \n\
}; \n\
\n\
let person = Object.create(personProto); \n\
person.name = 'John Doe'; \n\
person.age = 30; \n\
person.isEmployed = true; \n\
\n\
console.log(person);"; 

export const js_5_3_11_1 = getOutput(js_5_3_11);

export const js_5_3_12 =
"class Person { \n\
  constructor(name, age, isEmployed) { \n\
    this.name = name; \n\
    this.age = age; \n\
    this.isEmployed = isEmployed; \n\
  } \n\
  \n\
  greet() { \n\
    return `Hello, ${this.name}`; \n\
  } \n\
} \n\
\n\
let person = new Person('John Doe', 30, true); \n\
console.log(person);";

export const js_5_3_12_1 = getOutput(js_5_3_12);

export const js_5_3_13 =
`let person = {
  name: 'John Doe',
  age: 30
};

console.log(person.name); // Outputs: John Doe
console.log(person.age); // Outputs: 30`;

export const js_5_3_13_1 = getOutput(js_5_3_13);

export const js_5_3_14 =
`let person = {
  name: 'John Doe',
  age: 30
};

console.log(person['name']); // Outputs: John Doe
// When the property name is stored in a variable
let key = 'age';
console.log(person[key]); // Outputs: 30`;

export const js_5_3_14_1 = getOutput(js_5_3_14);

export const js_5_3_15 =
`let person = {
  name: 'John Doe',
  age: 30,
  isEmployed: true
};

let { name, age, isEmployed } = person;

console.log(name) // Outputs: John Doe
console.log(age) // Outputs: 30
console.log(isEmployed) // Outputs: true`;

export const js_5_3_15_1 = getOutput(js_5_3_15);

export const js_5_3_16 =
`let person = {
  name: 'John Doe',
  age: 30,
  isEmployed: true
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}`;

export const js_5_3_16_1 = getOutput(js_5_3_16);

export const js_5_3_17 =
`let person = {
  name: 'John Doe',
  age: 30,
  isEmployed: true
};

let keys = Object.keys(person);
console.log(keys); // Outputs: ['name', 'age', 'isEmployed']`;

export const js_5_3_17_1 = getOutput(js_5_3_17);

export const js_5_3_18 =
`let person = {
  name: 'John Doe',
  age: 30,
  isEmployed: true
};

let values = Object.values(person);
console.log(values); // Outputs: ['John Doe', 30, true]`;

export const js_5_3_18_1 = getOutput(js_5_3_18);

export const js_5_3_19 =
`let person = {
  name: 'John Doe',
  age: 30,
  isEmployed: true
};

let entries = Object.entries(person);
console.log(entries); // Outputs: [['name', 'John Doe'], ['age', 30], ['isEmployed', true]]`;

export const js_5_3_19_1 = getOutput(js_5_3_19);

export const js_5_3_20 =
`let person = { name: 'Alice' };

Object.defineProperty(person, 'age', {
  value: 25,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(person.age); // Outputs: 25

person.age = 30; // This will not change the age because writable is false
console.log(person.age); // Outputs: 25`;

export const js_5_3_20_1 = getOutput(js_5_3_20);

export const js_5_3_21 =
`Object.defineProperties(person, {
  'firstName': {
    value: 'Alice',
    writable: true
  },
  'lastName': {
    value: 'Johnson',
    writable: false
  }
});`;

export const js_5_3_21_1 = getOutput(js_5_3_21);

export const js_5_3_22 =
`let person = { name: 'Alice' };
 
Object.defineProperty(person, 'age', {
  value: 25,
  writable: false,
  enumerable: true,
  configurable: false
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'age');
console.log(descriptor); // Outputs: {value: 25, writable: false, enumerable: true, configurable: false}`;

export const js_5_3_22_1 = getOutput(js_5_3_22);

export const js_5_3_23 =
`let original = { a: 1, b: { c: 2 } };
let copy = { ...original };

copy.a = 3;
copy.b.c = 4;

console.log(original); // Outputs: { a: 1, b: { c: 4 } }
console.log(copy); // Outputs: { a: 3, b: { c: 4 } }`;

export const js_5_3_23_1 = getOutput(js_5_3_23);

export const js_5_3_24 =
`let original = { a: 1, b: { c: 2 } };
let copy = Object.assign({}, original);

copy.a = 3;
copy.b.c = 4;

console.log(original); // Outputs: { a: 1, b: { c: 4 } }
console.log(copy); // Outputs: { a: 3, b: { c: 4 } }`;

export const js_5_3_24_1 = getOutput(js_5_3_24);

export const js_5_3_25 =
`let original = { a: 1, b: { c: 2 } };
let copy = JSON.parse(JSON.stringify(original));

copy.a = 3;
copy.b.c = 4;

console.log(original); // Outputs: { a: 1, b: { c: 2 } }
console.log(copy); // Outputs: { a: 3, b: { c: 4 } }`;

export const js_5_3_25_1 = getOutput(js_5_3_25);

export const js_5_4_1 =
`let map = new Map();`;

export const js_5_4_2 =
`map.set('key1', 'value1');
map.set('key2', 'value2');
map.set(123, 'numeric key'); // Keys can be of any type`;

export const js_5_4_3 =
`let value1 = map.get('key1'); // Returns 'value1'
let value2 = map.get('key2'); // Returns 'value2'
let numericValue = map.get(123); // Returns 'numeric key'

console.log(value1, value2, numericValue) // Outputs: value1 value2 numeric key`;

export const js_5_4_3_1 = getOutput(`${js_5_4_1} ${js_5_4_2} \n ${js_5_4_3}`);

export const js_5_4_4 =
`map.forEach((value, key) => {
  console.log(key, value);
});`;

export const js_5_4_4_1 = getOutput(`${js_5_4_1} ${js_5_4_2} \n ${js_5_4_4}`);

export const js_5_4_5 =
`for (let [key, value] of map.entries()) {
  console.log(key, value);
}`;

export const js_5_4_5_1 = getOutput(`${js_5_4_1} ${js_5_4_2} \n ${js_5_4_5}`);

export const js_5_4_6 =
`// Iterating over keys
for (let key of map.keys()) {
  console.log(key);
}

// Iterating over values
for (let value of map.values()) {
  console.log(value);
}`;

export const js_5_4_6_1 = getOutput(`${js_5_4_1} ${js_5_4_2} \n ${js_5_4_6}`);

export const js_5_4_7 =
`let set = new Set();`;

export const js_5_4_8 =
`set.add('value1');
set.add('value2');
set.add('value3');`;

export const js_5_4_9 =
`let hasValue1 = set.has('value1'); // true
let hasValue4 = set.has('value4'); // false

console.log(hasValue1, hasValue4) // Outputs: true false`;

export const js_5_4_9_1 = getOutput(`${js_5_4_7} ${js_5_4_8} ${js_5_4_9}`);

export const js_5_4_10 =
`set.delete('value1'); // Removes 'value1' from the set
let hasValue1 = set.has('value1'); // false

console.log(hasValue1) // Outputs: false`;

export const js_5_4_10_1 = getOutput(`${js_5_4_7} ${js_5_4_8} ${js_5_4_10}`);

export const js_5_4_11 =
`set.forEach(value => {
  console.log(value);
});`;

export const js_5_4_11_1 = getOutput(`${js_5_4_7} ${js_5_4_8} ${js_5_4_11}`);

export const js_5_4_12 =
`for (let value of set) {
  console.log(value);
}`;

export const js_5_4_12_1 = getOutput(`${js_5_4_7} ${js_5_4_8} ${js_5_4_12}`);

export const js_5_4_13 =
`let setSize = set.size; // Returns the number of elements in the set
console.log(setSize) // Outputs: 3`;

export const js_5_4_13_1 = getOutput(`${js_5_4_7} ${js_5_4_8} ${js_5_4_13}`);

export const js_5_4_14 =
`let weakMap = new WeakMap();`;

export const js_5_4_15 =
`let objKey = {};
weakMap.set(objKey, 'some value');`;

export const js_5_4_16 =
`let value = weakMap.get(objKey); // Returns 'some value'
console.log(value); // Outputs: some value`;

export const js_5_4_16_1 = getOutput(`${js_5_4_14} ${js_5_4_15} ${js_5_4_16}`);

export const js_5_4_17 =
`weakMap.delete(objKey); // Removes the key-value pair where the key is objKey
let value = weakMap.get(objKey); // Returns undefined

console.log(value); // Outputs: undefined`;

export const js_5_4_17_1 = getOutput(`${js_5_4_14} ${js_5_4_15} ${js_5_4_17}`);

export const js_5_4_18 =
`let weakSet = new WeakSet();`;

export const js_5_4_19 =
`let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);`;

export const js_5_4_20 =
`let hasObj1 = weakSet.has(obj1); // true if obj1 is in the WeakSet
let hasObj3 = weakSet.has({});   // false, as this is a new object

console.log(hasObj1, hasObj3) // Outputs: true false`;

export const js_5_4_20_1 = getOutput(`${js_5_4_18} ${js_5_4_19} ${js_5_4_20}`);

export const js_5_4_21 =
`weakSet.delete(obj1); // Removes obj1 from the WeakSet
let hasObj1 = weakSet.has(obj1); // false

console.log(hasObj1) // Outputs: false`;

export const js_5_4_21_1 = getOutput(`${js_5_4_18} ${js_5_4_19} ${js_5_4_21}`);

export const js_5_5_1 =
`{
  "name": "John",
  "occupation": "Engineer"
}`;

export const js_5_5_2 =
`[
  "Apple",
  "Banana",
  "Cherry"
]`;

export const js_5_5_3 =
`{
  "name": "Jane",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  },
  "hobbies": ["Reading", "Hiking", "Coding"]
}`;

export const js_5_5_4 =
`let person = {
  name: 'Alice',
  hobbies: ['reading', 'cycling']
};

let jsonString = JSON.stringify(person);
console.log(jsonString); // Outputs: {"name":"Alice","age":30,"hobbies":["reading","cycling"]}`;

export const js_5_5_4_1 = getOutput(js_5_5_4);

export const js_5_5_5 =
`let jsonString = '{"name":"Alice","age":30,"hobbies":["reading","cycling"]}';
let person = JSON.parse(jsonString);

console.log(person); // Outputs: {name: 'Alice', age: 30, ['reading', 'cycling']}`;

export const js_5_5_5_1 = getOutput(js_5_5_5);

export const js_6_1_1 =
"function Person(name) { \n\
  this.name = name; \n\
} \n\
\n\
Person.prototype.greet = function() { \n\
  return `Hello, my name is ${this.name}`; \n\
}; \n\
\n\
var alice = new Person('Alice'); \n\
console.log(alice.greet()); // Outputs: Hello, my name is Alice";

export const js_6_1_1_1 = getOutput(js_6_1_1);

export const js_6_1_2 =
"function Vehicle(type) { \n\
  this.type = type; \n\
} \n\
\n\
Vehicle.prototype.describe = function() { \n\
  return `This is a ${this.type}.`; \n\
};";

export const js_6_1_3 =
`function Car(name, type) {
  Vehicle.call(this, type); // Call the Vehicle constructor function
  this.name = name;
}

// Inherit from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;`;

export const js_6_1_4 =
"Car.prototype.showDetails = function() { \n\
  return `This car is a ${this.name} and is a type of ${this.type}.`; \n\
}; \n\
\n\
// Overriding the describe method from Vehicle \n\
Car.prototype.describe = function() { \n\
  return `This is a car named ${this.name}.`; \n\
};";

export const js_6_1_5 =
`const myCar = new Car('Tesla Model 3', 'electric car');
console.log(myCar.describe()); // Outputs: This is a car named Tesla Model 3.
console.log(myCar.showDetails()); // Outputs: This car is a Tesla Model 3 and is a type of electric car.`;

export const js_6_1_5_1 = getOutput(`${js_6_1_2} ${js_6_1_3} ${js_6_1_4} ${js_6_1_5}`);

export const js_6_2_1 =
`class Person {
  // Class body goes here
}`;

export const js_6_2_2 =
`class Person {
  constructor(name, age) {
    // Code goes here
  }
}`;

export const js_6_2_3 =
`class Person {
  name = 'Default Name'; // Public class field
  age; // Public class field without initialization

  constructor(age) {
    this.age = age;
  }
}

const bob = new Person(30);
console.log(bob.name); // Outputs: Default Name`;

export const js_6_2_3_1 = getOutput(js_6_2_3);

export const js_6_2_4 =
"class Person { \n\
  name = 'Default Name'; \n\
  age; \n\
  \n\
  constructor(name, age) { \n\
    this.name = name; \n\
    this.age = age; \n\
  } \n\
  \n\
  greet() { \n\
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`; \n\
  } \n\
} \n\
\n\
const bob = new Person('Bob', 30); \n\
console.log(bob.greet()); // Outputs: Hello, my name is Bob, I am 30 years old.";

export const js_6_2_4_1 = getOutput(js_6_2_4);

export const js_6_2_5 =
`class Person {
  static species = 'Humans'; // Static field

  static getSpecies() {
    return Person.species; // Accessing the static field
  }
}

console.log(Person.getSpecies()); // Outputs: Humans`;

export const js_6_2_5_1 = getOutput(js_6_2_5);

export const js_6_2_6 =
`class Person {
  _name;
  
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const bob = new Person('Bob');
console.log(bob.name);  // Outputs: Bob
bob.name = 'Robert';
console.log(bob.name);  // Outputs: Robert`;

export const js_6_2_6_1 = getOutput(js_6_2_6);

export const js_6_2_7 =
"class Person { \n\
  #secret = 'I have a secret.'; \n\
  \n\
  #privateMethod() { \n\
    return `The secret is: ${this.#secret}`; \n\
  } \n\
  \n\
  revealSecret() { \n\
    return this.#privateMethod(); // Calling the private method \n\
  } \n\
} \n\
\n\
const alice = new Person(); \n\
console.log(alice.revealSecret()); // Outputs the result of the private method \n\
// console.log(alice.#secret); // Syntax Error: Private field '#secret' must be declared in an enclosing class";

export const js_6_2_7_1 = getOutput(js_6_2_7);

export const js_6_2_8 =
`class Vehicle {
  // Class body goes here
}

class Car extends Vehicle {
  // Class body goes here
}`;

export const js_6_2_9 =
`class Car extends Vehicle {
  ...

  constructor(...) {
    super(...); // Call the parent's constructor
    ...
  }

  ...
}`;

export const js_6_2_10 =
"class Vehicle { \n\
  constructor(brand) { \n\
    this.brand = brand; \n\
  } \n\
  \n\
  start() { \n\
    return `Starting the ${this.brand}`; \n\
  } \n\
}";

export const js_6_2_11 =
"class Car extends Vehicle { \n\
  constructor(brand, model) { \n\
    super(brand); // Call the parent's constructor with 'brand' \n\
    this.model = model; \n\
  } \n\
  \n\
  display() { \n\
    return `This is a ${this.brand} ${this.model}`; \n\
  } \n\
}";

export const js_6_2_12 =
"class Car extends Vehicle { \n\
  constructor(brand, model) { \n\
    super(brand); // Call the parent's constructor with 'brand' \n\
    this.model = model; \n\
  } \n\
  \n\
  display() { \n\
    return `This is a ${this.brand} ${this.model}`; \n\
  } \n\
  \n\
  start() { \n\
    // Call the parent's start method \n\
    return `${super.start()}. The ${this.model} is ready to go!`; \n\
  } \n\
}";

export const js_6_2_13 =
`const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.display()); // Outputs: This is a Toyota Corolla
console.log(myCar.start()); // Outputs: Starting the Toyota. The Corolla is ready to go!`;

export const js_6_2_13_1 = getOutput(`${js_6_2_10} ${js_6_2_12} ${js_6_2_13}`);

export const js_6_3_1 =
`let myObject = new Object();
myObject.name = 'Alice';
myObject.age = 30;

// Alternatively, using object literal syntax
let myObjectLiteral = {
    name: 'Alice',
    age: 30
};

console.log('Created by constructor:', myObject);
console.log('Created by literal:', myObject);`;

export const js_6_3_1_1 = getOutput(js_6_3_1);

export const js_6_3_2 =
`let myObject = Object();  // Equivalent to let obj = new Object();
myObject.name = 'Alice';
myObject.age = 30;

console.log('Created by calling the constructor as a function:', myObject);`;

export const js_6_3_2_1 = getOutput(js_6_3_2);

export const js_6_3_3 =
`let myArray = new Array('apple', 'banana', 'cherry');

// Alternatively, using array literal syntax
let myArrayLiteral = ['apple', 'banana', 'cherry'];

console.log('Created by constructor:', myArray);
console.log('Created by literal:', myArrayLiteral);`;

export const js_6_3_3_1 = getOutput(js_6_3_3);

export const js_6_3_4 =
`let myArray = Array('apple', 'banana', 'cherry');  // Equivalent to let arr = new Array('apple', 'banana', 'cherry');
console.log('Created by calling the constructor as a function:', myArray);`;

export const js_6_3_4_1 = getOutput(js_6_3_4);

export const js_6_3_5 =
`let myString = new String('Hello world');

// Using valueOf method to get string primitive
let myStringPrimitive = myString.valueOf();

// Operations on a string object returns a string primitive
let myStringResult = myStringPrimitive.concat('!');

// It's generally recommended to use string literals
let myStringLiteral = 'Hello world';

console.log('Created by constructor:', myStringPrimitive); // Outputs: Hello world
console.log('Type of concatenation of string objects:', typeof myStringResult); // Outputs: string
console.log('Created by literal:', myStringLiteral); // Outputs: Hello world`;

export const js_6_3_5_1 = getOutput(js_6_3_5);

export const js_6_3_6 =
`let stringFromNumber = String(123);  // Converts the number 123 to a string '123'
let stringFromBoolean = String(true);  // Converts the boolean value true to a string 'true'

console.log('Created by calling the constructor as a function:', stringFromNumber); // Outputs: 123
console.log('Created by calling the constructor as a function:', stringFromBoolean); // Outputs: true
console.log('Type of created string:', typeof stringFromNumber); // Outputs: string`;

export const js_6_3_6_1 = getOutput(js_6_3_6);

export const js_6_3_7 =
`let myNumber = new Number(123);

// Using valueOf method to get number primitive
let myNumberPrimitive = myNumber.valueOf();

// Operations on a number object returns a number primitive
let myNumberResult = myNumberPrimitive + new Number(456);

// Using number literal is preferred
let myNumberLiteral = 123;

console.log('Created by constructor:', myNumberPrimitive); // Outputs: 123
console.log('Type of sum of 2 number objects:', typeof myNumberResult); // Outputs: 579
console.log('Created by literal:', myNumberLiteral); // Outputs: 123`;

export const js_6_3_7_1 = getOutput(js_6_3_7);

export const js_6_3_8 =
`let numberFromString = Number('123');  // Converts the string '123' to the number 123
let numberFromBoolean = Number(false);  // Converts the boolean value false to the number 0

console.log('Created by calling the constructor as a function:', numberFromString); // Outputs: 123
console.log('Created by calling the constructor as a function:', numberFromBoolean); // Outputs: 0
console.log('Type of created number:', typeof numberFromString); // Outputs: number`;

export const js_6_3_8_1 = getOutput(js_6_3_8);

export const js_6_3_9 =
`let myBoolean = new Boolean(true);

// Using valueOf method to get boolean primitive
let myBooleanPrimitive = myBoolean.valueOf();

// Using boolean literal is preferred
let myBooleanLiteral = true;

console.log('Created by constructor:', myBooleanPrimitive); // Outputs: true
console.log('Created by literal:', myBooleanLiteral); // Outputs: true`;

export const js_6_3_9_1 = getOutput(js_6_3_9);

export const js_6_3_10 =
`let boolFromNumber = Boolean(1);  // Converts 1 to true

console.log('Created by calling the constructor as a function:', boolFromNumber); // Outputs: true
console.log('Type of created boolean value:', typeof boolFromNumber); // Outputs: boolean`;

export const js_6_3_10_1 = getOutput(js_6_3_10);

export const js_6_3_11 =
`let sum = new Function('a', 'b', 'return a + b');

// Typically, function declaration or expression syntax is used instead
let sumLiteral = function(a, b) {
    return a + b;
};

console.log('Created by constructor:', sum(2, 6)); // 8
console.log('Using function declaration:',sumLiteral(2, 6)); // 8`;

export const js_6_3_11_1 = getOutput(js_6_3_11);

export const js_6_3_12 =
`let sum = Function('a', 'b', 'return a + b');  // Equivalent to new Function('a', 'b', 'return a + b');

console.log('Created by calling the constructor as a function:', sum(2, 6)); // Outputs: 8
console.log('Type of created function:', typeof sum); // Outputs: function (Note: In JavaScript, functions are objects)`;

export const js_6_3_12_1 = getOutput(js_6_3_12);

export const js_6_3_13 =
`let now = new Date();
console.log(now); // Current date and time`;

export const js_6_3_13_1 = getOutput(js_6_3_13);

export const js_6_3_14 =
`let now = Date();  // Returns a string representing the current date and time

console.log('Created by calling the constructor as a function:', now); // Outputs: 8
console.log('Type of created date:', typeof now); // Outputs: string`;

export const js_6_3_14_1 = getOutput(js_6_3_14);

export const js_6_3_15 =
`let regex = new RegExp('\\\\b\\\\w+\\\\b');

// Using regular expression literal is preferred
let regexLiteral = /\\b\\w+\\b/;

console.log('Created by constructor:', regex); // Outputs: /\\b\\w+\\b/
console.log('Created by literal:', regexLiteral); // Outputs: /\\b\\w+\\b/`;

export const js_6_3_15_1 = getOutput(js_6_3_15);

export const js_6_3_16 =
`let regex = RegExp('\\\\b\\\\w+\\\\b');  // Equivalent to new RegExp('\\b\\w+\\b');

console.log('Created by calling the constructor as a function:', regex); // Outputs: /\\b\\w+\\b/
console.log('Type of created regular expression:', typeof regex); // Outputs: object`;

export const js_6_3_16_1 = getOutput(js_6_3_16);

export const js_9_2_1 =
`let element = document.getElementById('elementId');`;

export const js_9_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Get Elements by ID Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <h1>Get Elements by ID Example</h1>
  <div id="elementId">This is the selected element.</div>
  <br/>

  <script>
    let element = document.getElementById('elementId');

    console.log('This is the inner text of the selected element: ' + element.innerText); // innerText property will be discussed below
  </script>
</body>
</html>`;

export const js_9_2_2 =
`let elements = document.getElementsByClassName('className');`;

export const js_9_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Get Elements by Class Name Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <h1>Get Elements by Class Name Example</h1>
  <div class="className">Element 1</div>
  <div class="className">Element 2</div>
  <div class="className">Element 3</div>
  <br/>

  <script>
    let elements = document.getElementsByClassName('className');

    for (let i = 0; i < elements.length; i++) {
      console.log('This is the selected element: ' + elements[i].innerText);
    };
  </script>
</body>
</html>`;

export const js_9_2_3 =
`let elements = document.getElementsByTagName('tagName');`;

export const js_9_2_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Get Elements by Tag Name Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <h1>Get Elements by Tag Name Example</h1>
  <div>Element 1</div>
  <p>Element 2</p>
  <span>Element 3</span>
  <br/>

  <script>
    let elements = document.getElementsByTagName('div');
    
    for (let i = 0; i < elements.length; i++) {
      console.log('This is the selected element: ' + elements[i].innerText);
    };
  </script>
</body>
</html>`;

export const js_9_2_4 =
`let element = document.querySelector('selector');
let elements = document.querySelectorAll('selector');`;

export const js_9_2_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Query Selector Examples</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <h1>Query Selector Example</h1>
  <div id="elementId">Element 1</div>
  <div class="className">Element 2</div>
  <div class="className">Element 3</div>
  <br/>

  <script>
    // JavaScript code
    let element = document.querySelector('#elementId');

    console.log('This is the selected element by id: ' + element.innerText);

    let elements = document.querySelectorAll('.className');
    
    for (let i = 0; i < elements.length; i++) {
      console.log('This is the selected element by class name: ' + elements[i].innerText);
    };
  </script>
</body>
</html>`;

export const js_9_2_5 =
`element.innerHTML = 'New HTML content';
element.textContent = 'New text content';`;

export const js_9_2_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Modify Element Content Example</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <h1 id="elementId">Initial Content</h1>
  <p>Some paragraph with initial content</p>

  <script>
    let element = document.getElementById('elementId');
    element.innerHTML = 'New HTML content';

    let paragraph = document.querySelector('p');
    paragraph.textContent = 'New text content';
  </script>
</body>
</html>`;

export const js_9_2_6 =
`let value = element.getAttribute('attributeName');
element.setAttribute('attributeName', 'attributeValue');`;

export const js_9_2_6_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Get and Set Attribute Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <img id="myImage" src="assets/images/cute_cat.jpg" alt="My Image">
  <br/>

  <script>
    // JavaScript code
    let element = document.getElementById('myImage');

    // Get the value of the 'src' attribute
    let value = element.getAttribute('src');
    console.log(value);

    // Set the value of the 'alt' attribute
    element.setAttribute('alt', 'New Alt Text');
  </script>
</body>
</html>`;

export const js_9_2_7 =
`element.style.property = 'value';`;

export const js_9_2_7_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Set CSS Property Example</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <div id="myElement">Hello, World!</div>

  <script>
    let element = document.getElementById('myElement');
    
    // Set the CSS property values
    element.style.color = 'blue';
    element.style.backgroundColor = 'yellow';
    element.style.fontSize = '20px';
    element.style.padding = '10px';
  </script>
</body>
</html>`;

export const js_9_2_8 =
`element.classList.add('className');
element.classList.remove('className');`;

export const js_9_2_8_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Class Manipulation on Hover Example</title>
  <style>:root {font-size: 16px;}</style>
  <style>
    .highlight {
      background-color: yellow;
      color: black;
    }
  </style>
</head>
<body>
  <div id="myElement">Hello, World!</div>

  <script>
    let element = document.getElementById('myElement');

    // Add class on mouseover; addEventListener method will be discussed on next chapter
    element.addEventListener('mouseover', function() {
      element.classList.add('highlight');
    });

    // Remove class on mouseout
    element.addEventListener('mouseout', function() {
      element.classList.remove('highlight');
    });
  </script>
</body>
</html>`;

export const js_9_2_9 =
`let newElement = document.createElement('tagName');
let newText = document.createTextNode('Text content');`;

export const js_9_2_9_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Create Element and Create Text Node Example</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <div id="container"></div>

  <script>
    let container = document.getElementById('container');

    // Create a new element
    let newElement = document.createElement('p');

    // Create a text node
    let newText = document.createTextNode('Text content');

    // Append the text node to the new element
    newElement.appendChild(newText);

    // Append the new element to the container
    container.appendChild(newElement);
  </script>
</body>
</html>`;

export const js_9_2_10 =
`parentElement.appendChild(newElement);
parentElement.removeChild(childElement);`;

export const js_9_2_10_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Append and Remove Child Example</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <div id="parent">
    <p id="child">Child Element</p>
  </div>

  <script>
    // JavaScript code
    let parentElement = document.getElementById('parent');
    let childElement = document.getElementById('child');

    // Create a new element
    let newElement = document.createElement('span');
    newElement.textContent = 'New Child Element';

    // Append the new element to the parent
    parentElement.appendChild(newElement);

    // Remove the child element from the parent
    parentElement.removeChild(childElement);
  </script>
</body>
</html>`;

export const js_9_3_1 =
`element.addEventListener('eventName', eventHandler);`;

export const js_9_3_2 =
`function eventHandler(event) {
  // Event handling code
}`;

export const js_9_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Event Handler Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <button id="myButton">Click Me</button>

  <script>
    function eventHandler(event) {
      // Event handling code
      alert('Button clicked!');
    }

    // Select the button element
    let button = document.getElementById('myButton');

    // Attach the event handler to the button's click event
    button.addEventListener('click', eventHandler);
  </script>
</body>
</html>`;

export const js_9_3_3 =
`// Event bubbling
element1.addEventListener('click', eventHandler);

// Event capturing
element2.addEventListener('click', eventHandler, true);`;

export const js_9_3_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling and Capturing Example</title>
  <style>
    :root {
      font-size: 16px;
    }

    div {
      padding: 20px;
      border: 1px solid black;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div id="outerDiv1">
    <h2>Bubbling:</h2>
    <div id="innerDiv1">Click Me!</div>
  </div>

  <div id="outerDiv2">
    <h2>Capturing:</h2>
    <div id="innerDiv2">Click Me!</div>
  </div>
</div>
  <script>
    function eventHandler(event) {
      alert('Event handler triggered on:' + event.currentTarget.id);
      // event.stopPropagation();
    }

    let innerDiv1 = document.getElementById('innerDiv1');
    let outerDiv1 = document.getElementById('outerDiv1');
    
    let innerDiv2 = document.getElementById('innerDiv2');
    let outerDiv2 = document.getElementById('outerDiv2');
    
    // Event bubbling
    innerDiv1.addEventListener('click', eventHandler, false);
    outerDiv1.addEventListener('click', eventHandler, false);

    // Event capturing
    innerDiv2.addEventListener('click', eventHandler, true);
    outerDiv2.addEventListener('click', eventHandler, true);
  </script>
</body>
</html>`;

export const js_9_3_4 =
`const listContainer = document.getElementById('listContainer');

function handleItemClick(event) {
  const target = event.target;

  if (target.tagName === 'LI') {
    // Toggle the 'selected' class on the clicked list item
    target.classList.toggle('selected');
  }
}

// Attach the event listener to the parent element (listContainer)
listContainer.addEventListener('click', handleItemClick);

// Simulate dynamically adding more list items after a delay
setTimeout(() => {
  const newItem = document.createElement('li');
  newItem.textContent = 'Item 4';
  listContainer.appendChild(newItem);
}, 2000);`;

export const js_9_3_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Event Delegation Example</title>
  <style>
    :root {
      font-size: 16px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      cursor: pointer;
    }

    .selected {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <ul id="listContainer">
    <!-- Initial list items -->
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    const listContainer = document.getElementById('listContainer');

    function handleItemClick(event) {
      const target = event.target;

      if (target.tagName === 'LI') {
        // Toggle the 'selected' class on the clicked list item
        target.classList.toggle('selected');
      }
    }

    // Attach the event listener to the parent element (listContainer)
    listContainer.addEventListener('click', handleItemClick);

    // Simulate dynamically adding more list items after a delay
    setTimeout(() => {
      const newItem = document.createElement('li');
      newItem.textContent = 'Item 4';
      listContainer.appendChild(newItem);
    }, 2000);
  </script>
</body>
</html>`;

export const js_9_3_5 =
`element.removeEventListener('eventName', eventHandler);`;

export const js_9_3_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Remove Event Listener Example</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <button id="myButton">Click Me</button>

  <script>
    function eventHandler() {
      alert('Button clicked!');
    }

    let button = document.getElementById('myButton');

    // Attach the event handler to the button's click event
    button.addEventListener('click', eventHandler);

    // Remove the event handler after 3 seconds
    setTimeout(() => {
      button.removeEventListener('click', eventHandler);
      alert('Event handler removed!');
    }, 3000);
  </script>
</body>
</html>`;

export const js_9_3_6 =
`<button onclick="eventHandler(event)">Click me</button>`;

export const js_9_3_6_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Inline Event Handling Example</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <button onclick="eventHandler()">Click me</button>

  <script>
    function eventHandler() {
      alert('Button clicked!');
    }
  </script>
</body>
</html>`;

export const js_9_4_1 =
`// Fetch data from the server
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // DOM manipulation
    const container = document.getElementById('data-container');

    // Create a new list element for each data item
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name;
      container.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });`;

export const js_9_4_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Fetch API Example</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <ul id="data-container"></ul>

  <script>
    fetch('assets/data/json/list.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('data-container');

        // Create a new list element for each data item
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = item.name;
          container.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  </script>
</body>
</html>`;

export const js_7_2_1 =
`function callbackFunction(result) {
  // Code to be executed when the callback is invoked
}

// Passing callbackFunction as a callback to another function
someFunction(callbackFunction);`;

export const js_7_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Javascript Callback Function Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Define a function called 'greet' with parameters 'name' and 'callback'
    function greet(name, callback) {
      const message = 'Hello, ' + name + '!';
    
      // Call the 'callback' function and pass the 'message' as an argument
      callback(message);
    }
    
    function displayMessage(message) {
      console.log(message);
    }
    
    // Call the 'greet' function with arguments 'John' as the name and 'displayMessage' as the callback
    greet('John', displayMessage);
  </script>
</body>
</html>`;

export const js_7_2_2 =
`// Asynchronous function that simulates making an API request
function fetchDataFromAPI(callback) {
  // Simulating API request delay with setTimeout
  setTimeout(() => {
    const data = ['John', 'Jane', 'Alice'];
    callback(data);
  }, 2000); // Simulate 2 seconds delay
}

// Callback function to handle the fetched data
function handleData(data) {
  console.log(data);
}`;

export const js_7_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Asynchronous Callback Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Asynchronous function that simulates making an API request
    function fetchDataFromAPI(callback) {
      // Simulating API request delay with setTimeout
      setTimeout(() => {
        const data = ['John', 'Jane', 'Alice'];
        callback(data);
      }, 2000); // Simulate 2 seconds delay
    }

    // Callback function to handle the fetched data
    function handleData(data) {
      console.log(data);
    }

    fetchDataFromAPI(handleData);
  </script>
</body>
</html>`;

export const js_7_3_1 =
`function fetchData() {
  return new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation with setTimeout
    setTimeout(function() {
      // Simulating a successful response
      const data = { message: 'Data successfully fetched!' };

      // Resolve the promise with the data
      resolve(data);
      
      // Simulating an error scenario
      // reject(new Error('Failed to fetch data!'));
    }, 2000); // Wait for 2 seconds
  });
}`;

export const js_7_3_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Creating Promise Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    function fetchData() {
      return new Promise(function(resolve, reject) {
        // Simulating an asynchronous operation with setTimeout
        setTimeout(function() {
          // Simulating a successful response
          const data = { message: 'Data successfully fetched!' };
    
          // Resolve the promise with the data
          resolve(data);
    
          // Simulating an error scenario
          // reject(new Error('Failed to fetch data!'));
        }, 2000); // Wait for 2 seconds
      });
    }
    
    // Using the fetchData() function and handling the Promise
    fetchData()
      .then(function(data) {
        console.log(data.message); // Outputs: Data successfully fetched!
      })
      .catch(function(error) {
        console.error(error.message); // If the error scenario is uncommented, this will output: Failed to fetch data!
      });
  </script>
</body>
</html>`;

export const js_7_3_2 =
`promise
  .then(result => {
    // Process the result
    return transformedResult;
  })
  .then(transformedResult => {
    // Process the transformed result
  })
  .catch(error => {
    // Handle any errors along the chain
  });`;

export const js_7_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Promise Chaining Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // A function that returns a Promise to simulate an asynchronous operation
    function fetchData() {
      return new Promise(function(resolve) {
        // Simulating data fetching with setTimeout
        setTimeout(function() {
          const data = [1, 2, 3, 4, 5];
          resolve(data);
        }, 1000);
      });
    }
    
    // Function to process the data and return a new Promise with the transformed result
    function processData(data) {
      return new Promise(function(resolve) {
        // Simulating processing with setTimeout
        setTimeout(function() {
          const transformedResult = data.map((item) => item * 2);
          resolve(transformedResult);
        }, 1500);
      });
    }
    
    // Function to further process the transformed result and log the final output
    function processTransformedData(transformedData) {
      console.log('Final result:', transformedData.reduce((sum, item) => sum + item, 0));
    }
    
    // Chain the Promises together
    fetchData()
      .then((result) => {
        // Process the result and return a new Promise with the transformed result
        return processData(result);
      })
      .then((transformedResult) => {
        // Process the transformed result
        processTransformedData(transformedResult);
      })
      .catch((error) => {
        // Handle any errors along the chain
        console.error('Error occurred:', error);
      });
  </script>
</body>
</html>`;

export const js_7_4_1 =
`async function fetchData() {
  const response = await fetch('assets/data/json/hello.json');
  const data = response.json();
  return data;
}`;

export const js_7_4_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Async/Await Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    async function fetchData() {
      const response = await fetch('assets/data/json/hello.json');
      const data = response.json();
      return data;
    }

    fetchData().then(data => {
      console.log(data.hello);
    });
  </script>
</body>
</html>`;

export const js_7_4_2 =
`async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = response.json();
  return data;
}

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });`;

export const js_7_4_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Async/Await Error Handling Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const data = response.json();
      return data;
    }

    fetchData()
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  </script>
</body>
</html>`;

export const js_7_5_1 =
`// Adding an event listener to a DOM element for 'click' event
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button Clicked!');
});`;

export const js_7_5_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Event-Driven Programming</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <button id="myButton">Click Me!</button>
  <script>
    // Adding an event listener to the button element for 'click' event
    document.getElementById('myButton').addEventListener('click', function() {
      alert('Button Clicked!');
    });
  </script>
</body>
</html>`;

export const js_8_1_1 =
`let title = window.document.title; // Gets the title of the document
console.log(title); // Outputs the title of the current web page`;

export const js_8_1_1_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <style>
    html {
      font-size: 16px;
    }
  </style>
  <script src="assets/js/utils2.js"></script>
</head>
<body>
  <script>
    let title = window.document.title;
    console.log(title); // Outputs: My Webpage (Note: 'My Webpage' was specified in title tag)
  </script>
</body>
</html>`;

export const js_8_1_2 =
`let width = window.innerWidth; // Gets the width of the viewport in pixels
let height = window.innerHeight; // Gets the height of the viewport in pixels
console.log(width, height) // Outputs width and height of the viewport in pixels`;

export const js_8_1_2_1 = getOutput(js_8_1_2);


export const js_8_1_3 =
`let frames = window.frames; // Access all the iframes in the document`;

export const js_8_1_3_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <style>
    html { 
      font-size: 16px; 
    }
    iframe { 
      height: 10px;
    }
  </style>
  <script src="assets/js/utils2.js"></script>
</head>
<body>
  <iframe></iframe>
  <iframe></iframe>
  <script>
    let frames = window.frames;
    console.log(frames.length); // Outputs: 2
  </script>
</body>
</html>`;

export const js_8_1_4 =
`let newWindow = window.open('https://www.example.com');
window.close(); // Closes the current window`;

export const js_8_1_4_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <style>
    html { 
      font-size: 16px; 
    }
  </style>
  <script src="assets/js/utils2.js"></script>
</head>
<body>
<script>
  let newWindow;

  function onOpenWindow() {
    newWindow = window.open('assets/webpages/large-webpage.html', 'newWindow', 'width=200, height=150, left=100, top=150');
  }

  function onOpenWindow() {
    newWindow.close();
  }
</script>
<button onclick="onOpenWindow()">Open Window</button>
<br />
<button onclick="onOpenWindow()">Close Window</button>
</body>
</html>`;

export const js_8_1_5 =
`window.scrollTo(0, 300); // Scrolls the window to coordinates (0, 300)
window.scrollBy(0, 200); // Scrolls the window 200 pixels down from the current position`;

export const js_8_1_5_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <style>
    html { 
      font-size: 16px; 
    }
    div {
      width: 300px;
    }
    iframe {
      border-width: 0;
      height: 800px;
      width: 300px;
      overflow-y: hidden;
    }
  </style>
  <script src="assets/js/utils2.js"></script>
</head>
<body>
  <script>
    function onScrollTo() {
      window.scrollTo(0, 300);
    }

    function onScrollBy() {
      window.scrollBy(0, 200);
    }
  </script>
  <div>
    <button onclick="onScrollTo()">Srcoll Window Using <strong>window.scrollTo()</strong></button>
    <br />
    <button onclick="onScrollBy()">Srcoll Window Using <strong>window.scrollBy()</strong></button>
    <iframe src="assets/webpages/large-webpage.html"></iframe>
  <div>
</body>
</html>`;

export const js_8_1_6 =
`// Creating an alert dialog
alert('This is an alert dialog box!');

// Creating a confirm dialog
let userResponse = confirm('Do you really want to proceed?');
if (userResponse) {
    console.log('User clicked OK!');
} else {
    console.log('User clicked Cancel!');
}

// Creating a propmt dialog
let userName = prompt('Please enter your name:', 'John Doe');
if (userName != null) {
    console.log('Hello, ' + userName + '!');
}`;

export const js_8_1_6_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <style>
    html { 
      font-size: 16px; 
    }
  </style>
  <script src="assets/js/utils2.js"></script>
</head>
<body>
  <script>
    function onAlert() {
      window.alert('This is an alert dialog box!');
    }

    function onPrompt() {
      let userName = window.prompt('Please enter your name:', 'John Doe');
      if (userName != null) {
          console.log('Hello, ' + userName + '!');
      }
    }

    function onConfirm() {
      let userResponse = window.confirm('Do you really want to proceed?');
      if (userResponse) {
          console.log('User clicked OK!');
      } else {
          console.log('User clicked Cancel!');
      }
    }
  </script>
  <div>
    <button onclick="onAlert()">Creating an Alert Dialog Using <strong>window.alert()</strong></button>
    <br />
    <button onclick="onPrompt()">Creating a ConFirm Dialog Using <strong>window.prompt()</strong></button>
    <br />
    <button onclick="onConfirm()">Creating a Prompt Dialog Using <strong>window.confirm()</strong></button>
  <div>
</body>
</html>`;

export const js_8_1_7 =
`// Creating setTimeout
let timeoutID = setTimeout(() => {
  console.log('This message is shown after 3 seconds');
}, 3000);

// Clearing setTimeout
clearTimeout(timeoutID);

// Creating setInterval
let intervalID = setInterval(() => {
  console.log('This message is shown every 2 seconds');
}, 2000);

// Clearing setInterval
clearInterval(intervalID);`;

export const js_8_1_7_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <style>
    html { 
      font-size: 16px; 
    }
    button {
      cursor: pointer;
    }
  </style>
  <script src="assets/js/utils2.js"></script>
</head>
<body>
  <script>
    let timeoutID;

    function onSetTimeout() {
      timeoutID = window.setTimeout(() => {
        console.log('This message is shown after 3 seconds');
      }, 3000);
    }

    function onClearTimeout() {
      if(timeoutID) {
        window.clearTimeout(timeoutID);
        timeoutID = null;
        console.log('The setTimeout is cleared');
      }
    }

    let intervalID;

    function onSetInterval() {
      intervalID = window.setInterval(() => {
        console.log('This message is shown every 2 seconds');
      }, 2000);
    }

    function onClearInterval() {
      if(intervalID) {
        window.clearInterval(intervalID);
        intervalID = null;
        console.log('The interval is cleared');
      }
    }
  </script>
  <div>
    <button onclick="onSetTimeout()">Creating Timeout Using <strong>window.setTimeout()</strong></button>
    <br />
    <button onclick="onClearTimeout()">Clearing Timeout Using <strong>window.clearTimeout()</strong></button>
    <br />
    <button onclick="onSetInterval()">Creating Interval Using <strong>window.setInterval()</strong></button>
    <br />
    <button onclick="onClearInterval()">Clearing Interval Using <strong>window.clearInterval()</strong></button>
  <div>
</body>
</html>`;

export const js_8_1_8 =
`var globalVar = "I'm a global variable";
console.log(window.globalVar); // Accesses the global variable`;

export const js_8_1_8_1 = getOutput(js_8_1_8);

export const js_8_1_9 =
`window.addEventListener('resize', () => {
  console.log('Window size changed');
});`;

export const js_8_1_9_1 = getOutput(js_8_1_9);

export const js_8_2_1 =
`let screenWidth = screen.width;
let screenHeight = screen.height;
console.log(screenWidth, screenHeight); // Outputs depend on device`;

export const js_8_2_1_1 = getOutput(js_8_2_1);

export const js_8_2_2 =
`let availableScreenWidth = screen.availWidth;
let availableScreenHeight = screen.availHeight;
console.log(availableScreenWidth, availableScreenHeight) // Outputs depend on device`;

export const js_8_2_2_1 = getOutput(js_8_2_2);

export const js_8_2_3 =
`let colorDepth = screen.colorDepth;
console.log(colorDepth); // Output depends on device`;

export const js_8_2_3_1 = getOutput(js_8_2_3);

export const js_8_2_4 =
`let pixelDepth = screen.pixelDepth;
console.log(pixelDepth); // Output depends on device`;

export const js_8_2_4_1 = getOutput(js_8_2_4);

export const js_8_2_5 =
`if (screen.width <= 480) {
  console.log('Load mobile-specific content or layout');
} else {
  console.log('Load desktop-specific content or layout');
}`;

export const js_8_2_5_1 = getOutput(js_8_2_5);

export const js_8_2_6 =
`if (screen.colorDepth > 24) {
  console.log('Use high-quality images');
} else {
  console.log('Use standard-quality images');
}`;

export const js_8_2_6_1 = getOutput(js_8_2_6);

export const js_8_2_7 =
"window.open( \n\
  'assets/webpages/hello.html', \n\
  'newWindow', \n\
  `width=200, height=150, left=${(screen.availWidth-400)/2}, top=${(screen.availHeight-300)/2}` \n\
);";

export const js_8_2_7_1 = getOutput(js_8_2_7);

export const js_8_3_1 =
`let href = location.href;
console.log(href); // Outputs the current URL`;

export const js_8_3_1_1 = getOutput(`location.href = "assets/webpages/location-href-example.html";`);

export const js_8_3_2 =
`let protocol = location.protocol;
console.log(protocol); // Outputs 'http:' or 'https:'`;

export const js_8_3_2_1 = getOutput(`location.href = "assets/webpages/location-protocol-example.html";`);

export const js_8_3_3 =
`let host = location.host;
console.log(host); // Outputs 'example.com:80', for instance`;

export const js_8_3_3_1 = getOutput(`location.href = "assets/webpages/location-host-example.html";`);

export const js_8_3_4 =
`let hostname = location.hostname;
console.log(hostname); // Outputs 'example.com'`;

export const js_8_3_4_1 = getOutput(`location.href = "assets/webpages/location-hostname-example.html";`);

export const js_8_3_5 =
`let port = location.port;
console.log(port); // Outputs '80', for instance`;

export const js_8_3_5_1 = getOutput(`location.href = "assets/webpages/location-port-example.html";`);

export const js_8_3_6 =
`let pathname = location.pathname;
console.log(pathname); // Outputs '/path/'`;

export const js_8_3_6_1 = getOutput(`location.href = "assets/webpages/location-pathname-example.html";`);

export const js_8_3_7 =
`let search = location.search;
console.log(search); // Outputs '?query=string', for instance`;

export const js_8_3_7_1 = getOutput(`location.href = "assets/webpages/location-search-example.html?id=123";`);

export const js_8_3_8 =
`let hash = location.hash;
console.log(hash); // Outputs '#section1', for instance`;

export const js_8_3_8_1 = getOutput(`location.href = "assets/webpages/location-hash-example.html#section/12";`);

export const js_8_3_9 =
`// Please refer to the reload example in "Use Cases"
location.reload(); // Reloads the current page`;

export const js_8_3_10 =
`// Please refer to the redirect example in "Use Cases"
location.replace('https://www.newsite.com'); // Redirects to newsite.com without adding a history entry`;

export const js_8_3_11 =
`// Please refer to the redirect example in "Use Cases"
location.assign('https://www.newsite.com'); // Redirects to newsite.com and adds a history entry`;

export const js_8_3_12 =
`location.href = 'https://www.newsite.com'; // Redirects the browser to newsite.com
location.assign('https://www.newsite.com'); // Redirects to newsite.com and adds a history entry`;

export const js_8_3_12_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <style>
    html { 
      font-size: 16px; 
    }
  </style>
</head>
<body>
  <script>
    function onRedirectWithHref() {
      location.href = 'assets/webpages/location-redirect-example.html';
    }

    function onRedirectWithAssign() {
      location.assign('assets/webpages/location-redirect-example.html');
    }
  </script>
  <button onclick="onRedirectWithHref()">Click to Redirect Using <strong>location.href</strong> Property</button>
  <button onclick="onRedirectWithAssign()">Click to Redirect Using <strong>location.assign</strong> Method</button>
</body>
</html>`;

export const js_8_3_13 =
`location.reload(); // Reloads the current page`;

export const js_8_3_13_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <style>
    html {
      font-size: 16px;
    }
  </style>
  <script src="assets/js/utils2.js"></script>
</head>
<body>
  <script>
    function onReload() {
      // Simulate loading a big webpage by delaying a second to reload
      console.log('Loading ...');
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  </script>
  <button onclick="onReload()">Click to Reload Using <strong>location.reload</strong> Method</button>
</body>
</html>`;

export const js_8_3_14 =
`let protocol = location.protocol; // 'http:' or 'https:'
let host = location.host; // 'example.com:8080'
let hostname = location.hostname;  // 'example.com'
let port = location.port; // '8080'
let pathname = location.pathname; // '/path/page'
let search = location.search; // '?query=string'
let hash = location.hash; // '#section'`;

export const js_8_3_15 =
`let params = new URLSearchParams(location.search);
let id = params.get('id'); // Assuming URL is '...?id=123'
console.log(id); // Outputs: 123`;

export const js_8_3_15_1 = getOutput(`location.href = "assets/webpages/location-query-string-example.html?id=123";`);

export const js_8_3_16 =
"window.onhashchange = function() { \n\
  console.log(`New hash: ${location.hash}`); \n\
};";

export const js_8_3_16_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <style>
    html {
      font-size: 16px;
    }
  </style>
  <script src="assets/js/utils2.js"></script>
</head>
<body>
  <script>
    function onChangeHash() {
      location.hash = 'section/1';
    }

    window.addEventListener('hashchange', () => {
      console.log('Current hash:', window.location.hash);
    });
  </script>
  <button onclick="onChangeHash()">Click to Change URL Hash Using <strong>location.hash</strong> Property</button>
</body>
</html>`;

export const js_8_4_1 =
`let length = window.history.length;
console.log(length); // Outputs the number of pages in the session history`;

export const js_8_4_1_1 = getOutput(js_8_4_1);

export const js_8_4_2 =
`history.back(); // Navigates to the previous page`;

// export const js_8_4_2_1 = getOutput(js_8_4_2);

export const js_8_4_3 =
`history.forward(); // Navigates to the next page`;

export const js_8_4_4 =
`history.go(-1); // Equivalent to history.back()
history.go(1); // Equivalent to history.forward()
history.go(0); // Reloads the current page`;

export const js_8_4_5 =
`history.pushState({ page: 'newpage' }, 'New Page', 'newpage.html');`;

export const js_8_4_6 =
`history.replaceState({ page: 'anotherpage' }, 'Another Page', 'anotherpage.html');`;

export const js_8_4_7 =
`// When a new content is loaded
history.pushState({contentID: 'content123'}, 'Content Title', '/content/123');`;

export const js_8_4_8 =
`window.onpopstate = function(event) {
  if(event.state) {
    loadContent(event.state.contentID); // Function to load content based on state
  }
};`;

export const js_8_4_9 =
`history.replaceState(null, null, '/newpage');`;

export const js_8_5_1 =
`let appName = navigator.appName;
console.log(appName); // e.g., 'Netscape' for modern browsers`;

export const js_8_5_1_1 = getOutput(js_8_5_1);

export const js_8_5_2 =
`let appVersion = navigator.appVersion;
console.log(appVersion); // e.g., '5.0 (Windows)'`;

export const js_8_5_2_1 = getOutput(js_8_5_2);

export const js_8_5_3 =
`let userAgent = navigator.userAgent;
console.log(userAgent); // e.g., 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)...'`;

export const js_8_5_3_1 = getOutput(js_8_5_3);

export const js_8_5_4 =
`let platform = navigator.platform;
console.log(platform); // e.g., 'Win32'`;

export const js_8_5_4_1 = getOutput(js_8_5_4);

export const js_8_5_5 =
`let language = navigator.language;
console.log(language); // e.g., 'en-US'`;

export const js_8_5_5_1 = getOutput(js_8_5_5);

export const js_8_5_6 =
`let languages = navigator.languages;
console.log(languages); // e.g., ['en-US', 'en', 'fr']`;

export const js_8_5_6_1 = getOutput(js_8_5_6);

export const js_8_5_7 =
`let onLine = navigator.onLine;
console.log(onLine); // true or false`;

export const js_8_5_7_1 = getOutput(js_8_5_7);

export const js_8_5_8 =
`let cookieEnabled = navigator.cookieEnabled;
console.log(cookieEnabled); // true or false`;

export const js_8_5_8_1 = getOutput(js_8_5_8);

export const js_8_5_9 =
`navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude, position.coords.longitude);
});`;

export const js_8_5_9_1 = getOutput(js_8_5_9);

export const js_8_5_10 =
`if (navigator.onLine) {
  console.log('Browser is online');
} else {
  console.log('Browser is offline');
}`;

export const js_8_5_10_1 = getOutput(js_8_5_10);

export const js_8_5_11 =
`let preferredLanguage = navigator.languages ? navigator.languages[0] : navigator.language;
console.log(preferredLanguage); // e.g., 'en-US'`;

export const js_8_5_11_1 = getOutput(js_8_5_11);

export const js_8_5_12 =
`if (/Mobi|Android/i.test(navigator.userAgent)) {
  console.log('Mobile environment detected');
} else {
  console.log('Mobile environment is not detected');
}`;

export const js_8_5_12_1 = getOutput(js_8_5_12);

export const js_8_5_13 =
"if ('geolocation' in navigator) { \n\
  navigator.geolocation.getCurrentPosition(position => { \n\
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`); \n\
  }); \n\
}";

export const js_8_5_13_1 = getOutput(js_8_5_13);

export const js_8_6_1 =
``;

export const js_8_7_1 =
``;

export const js_8_8_1 =
``;


export const js_10_1_1 =
`navigator.geolocation.getCurrentPosition(
  position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // Do something with the coordinates
  },
  error => {
    console.error('Error:', error.message);
  }
);`;

export const js_10_1_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Browser Geolocation API Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(latitude, longitude);
        },
        error => {
          console.error('Error:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  </script>
</body>
</html>`;

export const js_10_1_2 =
`// Storing data
localStorage.setItem('key', 'value');

// Retrieving data
const data = localStorage.getItem('key');

// Removing data
localStorage.removeItem('key');`;

export const js_10_1_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Browser Storage API Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Storing data
    localStorage.setItem('key', 'Hello World!');
    
    // Retrieving data
    const data = localStorage.getItem('key');
    console.log(data);
    
    // Removing data
    localStorage.removeItem('key');
  </script>
</body>
</html>`;

export const js_10_1_3 =
`const copyButton = document.getElementById('copyButton');
const textToCopy = 'Hello, world!';

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    console.log('Text copied to clipboard successfully!');
  } catch (err) {
    console.error('Failed to copy text:', err);
  }
});`;

export const js_10_1_4 =
`const pasteButton = document.getElementById('pasteButton');
const outputElement = document.getElementById('output');

pasteButton.addEventListener('click', async () => {
  try {
    const textFromClipboard = await navigator.clipboard.readText();
    outputElement.textContent = 'Text from clipboard: ' + textFromClipboard;
  } catch (err) {
    console.error('Failed to read text from clipboard:', err);
  }
});`;

export const js_10_1_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Browser Clipboard API Example</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <input type="text" id="inputText" placeholder="Enter text to copy">
  <button id="copyButton">Copy to Clipboard</button>
  <button id="pasteButton">Paste from Clipboard</button>
  <div id="output"></div>

  <script>
    const inputText = document.getElementById('inputText');
    const copyButton = document.getElementById('copyButton');
    const pasteButton = document.getElementById('pasteButton');
    const outputElement = document.getElementById('output');

    copyButton.addEventListener('click', async () => {
      const textToCopy = inputText.value;
      try {
        await navigator.clipboard.writeText(textToCopy);
        console.log('Text copied to clipboard successfully!');
      } catch (err) {
        console.error('Failed to copy text:', err);
      }
    });

    pasteButton.addEventListener('click', async () => {
      try {
        const textFromClipboard = await navigator.clipboard.readText();
        outputElement.textContent = 'Text from clipboard: ' + textFromClipboard;
      } catch (err) {
        console.error('Failed to read text from clipboard:', err);
      }
    });
  </script>
</body>
</html>`;

export const js_10_2_1 =
`const xhr = new XMLHttpRequest();`;

export const js_10_2_2 =
`xhr.open('GET', 'https://api.example.com/data', true);`;

export const js_10_2_3 =
`xhr.setRequestHeader('Content-Type', 'application/json');`;

export const js_10_2_4 =
`xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Request was successful, handle the response
      const responseData = xhr.responseText;
      // ...
    } else {
      // Handle HTTP error
      console.error('HTTP error occurred:', xhr.status, xhr.statusText);
    }
  }
};`;

export const js_10_2_5 =
`xhr.send();`;

export const js_10_2_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Ajax Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // Set up the AJAX request
    xhr.open('GET', 'assets/data/json/hello.json', true); // true for asynchronous, false for synchronous
    
    // Set up request headers
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Handle the Response
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Request was successful, handle the response
          const responseData = xhr.responseText;
          console.log(xhr.responseText); // Output the response data
        } else {
          // Handle HTTP error
          console.error('HTTP error occurred:', xhr.status, xhr.statusText);
        }
      }
    };

    // Send the Request
    xhr.send();
  </script>
</body>
</html>`;

export const js_10_2_6 =
`let xhr;
try {
  xhr = new XMLHttpRequest();
} catch (error) {
  // Handle initialization error
  console.error('XMLHttpRequest creation failed:', error);
}`;

export const js_10_2_7 =
`xhr.onerror = function() {
  // Handle network error
  console.error('Network error occurred:', xhr.status, xhr.statusText);
};`;

export const js_10_2_8 =
`xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Request was successful, handle the response
    } else {
      // Handle HTTP error
      console.error('HTTP error occurred:', xhr.status, xhr.statusText);
    }
  }
};`;

export const js_10_2_9 =
`xhr.timeout = 5000; // Set the timeout to 5 seconds

xhr.ontimeout = function() {
  // Handle timeout error
  console.error('Request timed out');
};`;

export const js_10_2_10_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Ajax Error Handling Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Create an XMLHttpRequest object
    let xhr;
    try {
      xhr = new XMLHttpRequest();
    } catch (error) {
      // Handle initialization error
      console.error('XMLHttpRequest creation failed:', error);
    }

    // Set up the AJAX request
    xhr.open('GET', 'https://api.example.com/data', true); // true for asynchronous, false for synchronous
    
    // Set up request headers
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Handle the Response
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Request was successful, handle the response
          const responseData = xhr.responseText;
          console.log(xhr.responseText); // Output the response data
        } else {
          // Handle HTTP error
          console.error('HTTP error occurred:', xhr.status, xhr.statusText);
        }
      }
    };

    // Handle network error
    xhr.onerror = function() {
      console.error('Network error occurred:', xhr.status, xhr.statusText);
    };

    xhr.timeout = 5000; // Set the timeout to 5 seconds

    // Handle timeout error
    xhr.ontimeout = function() {
      console.error('Request timed out');
    };

    // Send the Request
    xhr.send();
  </script>
</body>
</html>`;

export const js_10_2_11 =
`<div>
  <!-- The content will be updated here -->
  <h2 id="header">Original header</h2>
  <p id="paragraph">Original paragraph</p>
</div>

<script>
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Configure the AJAX request
  xhr.open('GET', 'assets/data/json/content.json', true);

  // Set up the response handling
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request was successful, handle the response
        const data = JSON.parse(xhr.responseText);

        // Update the content of h2 and p elements with the data from the JSON file
        document.getElementById('header').innerText = data.title;
        document.getElementById('paragraph').innerText = data.content;
      }
    }
  };

  // Send the AJAX request
  xhr.send();
</script>`;

export const js_10_2_11_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>AJAX Updating Web Page Content Example</title>
  <style>:root {font-size: 16px;}</style>
</head>
<body>
  <div>
    <!-- The content will be updated here -->
    <h2 id="header">Original header</h2>
    <p id="paragraph">Original paragraph</p>
  </div>

  <button id="updateButton">Update Content</button>

  <script>
    // Event listener to handle the button click
    document.getElementById('updateButton').addEventListener('click', function() {
      // Create a new XMLHttpRequest object
      const xhr = new XMLHttpRequest();

      // Configure the AJAX request
      xhr.open('GET', 'assets/data/json/content.json', true);

      // Set up the response handling
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // Request was successful, handle the response
            const data = JSON.parse(xhr.responseText);

            // Update the content of h2 and p elements with the data from the JSON file
            document.getElementById('header').innerText = data.title;
            document.getElementById('paragraph').innerText = data.content;
          } else {
            // Handle HTTP error
            console.error('HTTP error occurred:', xhr.status, xhr.statusText);
          }
        }
      };

      // Handle network errors
      xhr.onerror = function() {
        console.error('Network error occurred');
      };

      // Send the AJAX request
      xhr.send();
    });
  </script>
</body>
</html>`;

export const js_10_3_1 =
`fetch('https://api.example.com/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed');
    }
  })
  .then(data => {
    // Process the response data
  })
  .catch(error => {
    console.error('Error:', error);
  });`;

export const js_10_3_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Fetch Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    fetch('assets/data/json/hello.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Request failed');
        }
      })
      .then(data => {
        console.log(data.hello);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  </script>
</body>
</html>`;

export const js_10_3_2 =
`fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Additional headers if needed
  },
  body: JSON.stringify(data) // Request body as JSON
})
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    console.error('Error:', error);
  });`;

export const js_10_3_3 =
`fetch('https://api.example.com/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed');
    }
  })
  .then(data => {
    // Process the response data
  })
  .catch(error => {
    console.error('Error:', error);
  });`;

export const js_10_3_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Fetch Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    fetch('assets/data/json/hello.js') // hello.js file doesn't exist
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Request failed');
        }
      })
      .then(data => {
        console.log(data.hello);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  </script>
</body>
</html>`;

export const js_11_2_1 =
`try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
  console.error('Error:', error);
} finally {
  // Code to be executed regardless of whether an exception is thrown or caught
}`;

export const js_11_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Try-Catch Example</title>
  <style>:root {font-size: 16px;}</style>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    function handleError() {
      try {
        // Simulating code that might throw an error
        throw new Error('Custom error message');
      } catch (error) {
        // Handle the error
        console.error('Error: ' + error.message);
      } finally {
        console.log(''Finally' code is exexuted.')
      }
    }

    handleError();
  </script>
</body>
</html>`;
