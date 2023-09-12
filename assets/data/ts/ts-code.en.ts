function getOutput(url: string) {
  return `<!DOCTYPE html>
  <html>
  <head>
    <style>
      html { font-size: 16px; }
      a { text-decoration: none; }
    </style>
  </head>
  <body>
    <br/><p><a href="${url}" target="_blank">Go to TS Playground.</a></p>
  </body>
  </html>`
}

export const ts_1_3_1 =
`npm install -g typescript`;

export const ts_1_3_2 =
`npm init -y`;

export const ts_1_3_3 =
"function greet(name: string) { \n\
  return `Hello, ${name}!`; \n\
} \n\
\n\
const message = greet('TypeScript'); \n\
console.log(message);";

export const ts_1_3_4 =
`tsc main.ts`;

export const ts_1_3_5 =
`node main.js`;

export const ts_1_3_6 =
`tsc main.ts --watch`;

export const ts_2_1_1 =
`let age: number = 25;
let price: number = 49.99;`;

export const ts_2_1_2 =
`let firstName: string = 'John';
let lastName: string = 'Doe';`;

export const ts_2_1_3 =
`let isActive: boolean = true;
let isStudent: boolean = false;`;

export const ts_2_1_4 =
`const mySymbol: symbol = Symbol('description');

const obj = {
  [mySymbol]: 'This is a value associated with the symbol'
};

console.log(obj[mySymbol]); // 'This is a value associated with the symbol'`;

export const ts_2_1_4_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/MYewdgzgLgBAtgTwMoLgIxAGwFwwqjTGAXhhXSwAoAiAEwFMJgAnASwAcpXxqBKAbgCwAKBgjQkWCDQArEjADeImDADaicoQC6uagBUAFqwgxjMAIYwAbucwBXehYgQQwVuaj1aMAO6soBjABjvgUmNQiAL5CouLgLpj0AHSYIADmlNIy6sgEWFoCMAD0RTD6RiZmljb2jubOru6e3n4BQQYheeEiQA');

export const ts_2_1_5 =
`let age: number = '25'; // Error: Type 'string' is not assignable to type 'number'.`;

export const ts_2_2_1 =
`let myUndefined: undefined = undefined;`;

export const ts_2_2_2 =
`let myNull: null = null;`;

export const ts_2_2_3 =
`let myAny: any = 'Hello, TypeScript!';`;

export const ts_2_2_4 =
`let myUnknown: unknown = 'Hello, TypeScript!';
if (typeof myUnknown === 'string') {
    console.log(myUnknown.length);
}`;

export const ts_2_2_4_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/DYUwLgBAtgngqgOwNYIPYHcEC4IFdlqYQC8EA5ABIjDCoA0EAKjAA4gDKAxgE4CWLYAIRkA3AFgAULwBmEABRhWIVLNiIUGBCWKkyAZzB8EAczIBKCAG9JEWxE6oEe1KAB0tY3LUFN7kCbAACzNxCQBfIA');

export const ts_2_2_5 =
`function throwError(message: string): never {
  throw new Error(message);
}`;

export const ts_2_2_6 =
`const uniqueKey: unique symbol = Symbol('unique property');
const obj = {
  [uniqueKey]: 'This is a value associated with the unique symbol'
};`;

export const ts_2_3_1 =
`let age: number = 25;
let firstName: string = 'John';
let isActive: boolean = true;`;

export const ts_2_3_2 =
`const pi: number = 3.14159;
const greeting: string = 'Hello, TypeScript!';`;

export const ts_2_3_3 =
`const name: string = 'Alice';
name = 'Bob'; // Error: Cannot assign to 'name' because it is a constant.`;

export const ts_2_4_1 =
'let age: number = 25; // age is explicitly annotated as type number \n\
function greet(name: string): string { \n\
  return `Hello, ${name}!`; \n\
}';

export const ts_2_4_2 =
`let temperature = 30; // TypeScript infers temperature as type 'number'
const appName = 'MyApp'; // TypeScript infers appName as type 'string'`;

export const ts_2_4_3 =
`let age: number = 25; // Type annotation
let name = 'Alice'; // Type inference`;

export const ts_3_1_1 =
`let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];`;

export const ts_3_1_2 =
`let temperatures = [25, 30, 22]; // TypeScript infers temperatures as number[]`;

export const ts_3_1_3 =
`let fruits: string[] = ['apple', 'banana', 'orange'];
let firstFruit: string = fruits[0]; // 'apple'
let secondFruit: string = fruits[1]; // 'banana'`;

export const ts_3_1_4 =
`let numbers: number[] = [1, 2, 3, 4, 5];
let length: number = numbers.length; // Property 'length' is inferred as number
numbers.push(6); // push() method is type-checked for number[]
let poppedNumber: number | undefined = numbers.pop(); // pop() method returns a number or undefined if the array is empty`;

export const ts_3_1_5 =
`let colors: string[] = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(color => {
  console.log(color);
});

for (let color of colors) {
  console.log(color);
}`;

export const ts_3_1_5_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/DYUwLgBAxg9sMCcDOAuCSwIJYDsDmA2gLoQC8EBA5AiACaUA0EleNIOjzARsAK4iUiAbgCwAKHEAzRBAAUoSFjIQADEIhKAPNDiIkAOlD4wAC3VYA1BYCUEAN7iIOnEjghDMPLNjxkBLETWomIAvuLiPnr60ggAogCGUCbeughkAHz2js6uoB5ekQhB4iHFEmIxcgo6vhAwkjV6tg5iTrAubvkpvmUhQA');

export const ts_3_1_6 =
`let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];`;

export const ts_3_1_7 =
`let readOnlyArray: readonly number[] = [1, 2, 3];
readOnlyArray.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'`;

export const ts_3_2_1 =
`let person: [string, number] = ['Alice', 30];`;

export const ts_3_2_2 =
`let name: string = person[0]; // 'Alice'
let age: number = person[1]; // 30`;

export const ts_3_2_3 =
`let coordinate = [10, 20]; // TypeScript infers coordinate as [number, number]`;

export const ts_3_2_4 =
`function getCoordinates(): [number, number] {
  return [10, 20];
}

let [x, y] = getCoordinates();`;

export const ts_3_2_5 =
`let optionalTuple: [string, number?] = ['Alice'];`;

export const ts_3_2_6 =
`let multiValueTuple: [string, ...number[]] = ['Alice', 1, 2, 3];`;

export const ts_3_2_7 =
`let measurements: [string, number][] = [['height', 180], ['weight', 75]];`;

export const ts_4_1_1 =
`function add(a: number, b: number): number {
  return a + b;
}`;

export const ts_4_1_2 =
`let mathFunction: (x: number, y: number) => number;
mathFunction = add;`;

export const ts_4_1_3 =
`function processValue(input: string): string;
function processValue(input: number): number;
function processValue(input: string | number): string | number {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}`;

export const ts_4_1_4 =
`function doSomething(callback: (result: string) => void) {
  const result = 'Finished';
  callback(result);
}`;

export const ts_4_1_5 =
`const multiply = (a: number, b: number): number => a * b;`;

export const ts_4_2_1 =
"function greet(name: string, age?: number): string { \n\
  if (age) { \n\
    return `Hello, ${name}! You are ${age} years old.`; \n\
  } else { \n\
    return `Hello, ${name}!`; \n\
  } \n\
} \n\
\n\
console.log(greet('Alice'));           // Output: Hello, Alice! \n\
console.log(greet('Bob', 30));         // Output: Hello, Bob! You are 30 years old.";

export const ts_4_2_1_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/GYVwdgxgLglg9mABAcwE4FN1QBRgIYC26AXIgM5SoxjIA0iey6A-KWCAQEbqoCUpFKjUQBvRAFgAUIkQxgibI3S9RE6TMQYoIVEgAGACXQAbY3HoASEfiIBfAISIAmnBAMMiK0tuIAnujxUMkQ4YwATADo9AG41GR8TMnRVKQ1NLB19I1NzT2tCdAcYuMQfKTLpKQgEMlD0CLNkbDRMHAByAEFjGAh0Nt5eWLThxAB6UcQAeRAoAAcZ0myzei6e9EcqmrqGuCaWrGw2gCE4Tjb6AGYABgGhkbGJ6bmFxCXck85HFzdA5Ou-AJBELhCJSIA');

export const ts_4_2_2 =
"function introduce(name: string, role: string = 'user'): string { \n\
  return `My name is ${name} and I am a ${role}.`; \n\
} \n\
\n\
console.log(introduce('Alice'));       // Output: My name is Alice and I am a user. \n\
console.log(introduce('Bob', 'admin')); // Output: My name is Bob and I am an admin.";

export const ts_4_2_2_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/JAMwrgdgxgLglgewgAjhGAnBATMUCmAFBAIYC2+AXMgM6ZoDmANMlgDZW30QPIC8yAORga+DIICU1OhkbIA3sgCwAKGSt8MMBhQADALIBPZKQqoayACTzT+AL7ISEbMgCSjso6vz29gHS6ANzKKg6qIVBINAgcfmwIDIRomDh4RIIAgmxwBJISweqFyAD0xcgA8mAwAA5V1EYm5PjmyFk5zU4u7uReImJ+EVEx+HEJSehYuASEggBCCABGgiyCJNhkaHnBpRVVtTD1xrYt8wuOzm4e547raH6qQA');

export const ts_4_2_3 =
"function greetUser(firstName: string, lastName?: string, title: string = 'Mr.'): string { \n\
  if (lastName) { \n\
    return `Hello, ${title} ${firstName} ${lastName}!`; \n\
  } else { \n\
    return `Hello, ${title} ${firstName}!`; \n\
  } \n\
} \n\
\n\
console.log(greetUser('John'));                   // Output: Hello, Mr. John! \n\
console.log(greetUser('Alice', 'Smith'));          // Output: Hello, Mr. Alice Smith! \n\
console.log(greetUser('Bob', undefined, 'Dr.'));  // Output: Hello, Dr. Bob!";

export const ts_4_2_3_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/JAMwrgdgxgLglgewgAgOYCcCmmYFUDOm6AFCHOvjAHICGAtpgFzKXpwSoA0yANjZbQYB+Zq3Zdk8GDyYsYbDsgC8yAOQBZdADpVASlHzxyAN7IAsAChkyOCGTE+A+pl0nzV68iwww6FAAMACUweHgRuABJjKRkAX2QosgpqZ3ioxxSGWIBCfwBud2t4kMI3S08vHF8A4NDwhOi4aUw04ySnLNyC8uR4yz6rSygkfAQZLTDUYgxsPEISVQApBAALCD1dAortnc8Aej3kAHkwGAAHU+ZasO5NLWRltez3YYhR8cnprBwCImJVACCPDgUEwqm4qgAynQmisNltdsgDsdThcYFcQjdkHdkECQZhkNDYc8hiMxpgJggpjMfvN-gAhBAAI3ByEgABNMGQIJh2RCACLaeHWZEnc6XZDXeqC+6MpnZIA');

export const ts_4_2_4 =
`function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}`;

export const ts_5_1_1 =
`class MyClass {
  // Properties and methods go here
}`;

export const ts_5_1_2 =
`class Person {
  constructor(public firstName: string, public lastName: string) {}
}

const person = new Person('John', 'Doe');
console.log(person.firstName); // Output: John`;

export const ts_5_1_2_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/MYGwhgzhAEAKCmAnCB7AdtA3gWAFDWmHQgBdEBXYElRACgAdyAjEAS2GgDNXkSA5MAFt4ALmilErNAHMANNEYt20cKQHCxEqdICUWAL55D+PETSkFSVBgC80NPADucK+loByAFIoAFmnfy7gAiKPDuOgDcpsQoIPAAdCAo0gyuaPHcvOrwkdAA9HnQAPLkJIwkYt5+QA');

export const ts_5_1_3 =
`class Student {
  public readonly school: string = 'MountainView School';
  private studentId: number;

  constructor(studentId: number) {
    this.studentId = studentId;
  }
}`;

export const ts_5_1_4 =
`class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    if (value >= 0) {
      this._radius = value;
    } else {
      throw new Error('Radius cannot be negative.');
    }
  }

  get area(): number {
    return Math.PI * this._radius * this._radius;
  }
}`;

export const ts_5_1_5 =
`class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }
}`;

export const ts_5_1_6 =
`class MathUtils {
  static PI: number = 3.14;

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}`;

export const ts_5_1_7 =
`class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }
}`;

export const ts_5_2_1 =
`abstract class Shape {
  // Properties and methods go here
}`;

export const ts_5_2_2 =
`abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(private sideLength: number) {
    super();
  }

  calculateArea(): number {
    return this.sideLength * this.sideLength;
  }
}`;

export const ts_5_2_3 =
`class Parent {
  greet(): void {
    console.log('Hello from Parent');
  }
}

class Child extends Parent {
  greet(): void {
    console.log('Hello from Child');
  }
}`;

export const ts_5_2_3_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/MYGwhgzhAEAKYCcCmA7ALtA3gWAFDWgHNkk0AKASgC5oA3AewEsATLPAg4elCekJAHQh6hMgHIAEkhDDoAMwT0AtnESo0YigG520AL54D+PKEgwAwgAtGIVkgAeaVMxjxk6NviIly1Ok1YcL05uXn4hEXEpGXp5RRUrG2ZNHS8jPSA');

export const ts_5_2_4 =
`const circle = new Circle(5);
console.log(circle.calculateArea()); // Output: 78.53981633974483

const square = new Square(4);
console.log(square.calculateArea()); // Output: 16

const child = new Child();
child.greet(); // Output: Hello from Child`;

export const ts_5_2_4_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/IYIwzgLgTsDGEAJYBthjAgygC2ABwFMEBvAWACgEFRIZ4lhlYBXVCAgQSgOAAoBKAFwIAdswC2IAlADcFAL4UKKNBgDCASygoiBAB7sRAEww58RMpSQB7EbWbxrUXnigaAbsHYIYRjczBhMUlpfhIKKiowZkJnfjkrRXIIhiZWL05uPiFRCSkocKsqbghmKBEEAFkvbAA6AAUASQQAKgQIbA0wWt9-DDaOrp7gPwCEqiSk5VR0LABHZmBuBH1DEyxcQkKqWFt7R2dXDwyEMA0jAgAZAhEAcw6gvNDtyOjYgXGEKatYRhY2TI8ASPEIFSyRHwEUrldqdbpnC7XO4dVqwoYIq43e7YT6TJTkFSzepLG6IcEIW7cKHAhDuaznF47PbWZAEWrIay3XgAIgAEgRkByEAAzKDWcQIYncEQQbnxFJ45IEmbqTrIIwrAw3dZS0kvSkEak5OkM8lMuwstkcrl8gVC0XihBqNVGOW4hT43Z2RCwLQ6BAAXlEBAA7k6-azeABWeUE5ms9mc3i+7QJ35pAFcIH8eIIAD0eYQAHlmBA8KXhAB2AActSjAGYAJzVgCMADZ603KwAWbvV+uevaIMALEmB4NhzCj7i8buxr1gS2JrkjxbcWrp-4ZLPZXMF4ul8sQYTtwfepAu8ciUNOl0fZQu2oGo0yfOFktlisIfmC6wisUSs6GjqhQQA');

export const ts_6_1_1 =
`interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): string;
}`;

export const ts_6_1_2 =
'class Employee implements Person { \n\
  firstName: string; \n\
  lastName: string; \n\
  age: number; \n\
  \n\
  constructor(firstName: string, lastName: string, age: number) { \n\
    this.firstName = firstName; \n\
    this.lastName = lastName; \n\
    this.age = age; \n\
  } \n\
  \n\
  greet() { \n\
    return `Hello, my name is ${this.firstName} ${this.lastName}.`; \n\
  } \n\
}';

export const ts_6_1_3 =
`interface Book {
  title: string;
  author: string;
  pages?: number; // Optional property
}`;

export const ts_6_1_4 =
`interface Circle {
  readonly radius: number;
}`;

export const ts_6_2_1 =
`type Age = number;
type Name = string;

let age: Age = 25;
let name: Name = 'Alice';`;

export const ts_6_2_2 =
`type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

let person: Person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};`;

export const ts_6_2_3 =
`type ID = string | number;
type Point = { x: number; y: number };
type PointWithLabel = Point & { label: string };`;

export const ts_6_2_4 =
`type MathFunction = (x: number, y: number) => number;

let add: MathFunction = (a, b) => a + b;`;

export const ts_6_2_5 =
`type ReadonlyPerson = Readonly<Person>;
type OptionalPerson = Partial<Person>;`;

export const ts_6_2_6 =
`type Wrapper<T> = { value: T };

let stringWrapper: Wrapper<string> = { value: 'Hello' };
let numberWrapper: Wrapper<number> = { value: 42 };`;

export const ts_7_1_1 =
`let value: any = 'Hello, TypeScript!';
let length: number = (<string>value).length;`;

export const ts_7_1_2 =
`let value: any = 'Hello, TypeScript!';
let length: number = (value as string).length;`;

export const ts_7_2_1 =
`function castToType<T>(value: any): T {
  return value as T;
}

let stringValue: string = castToType<string>('Hello');`;

export const ts_7_2_2 =
`function isString(value: any): value is string {
  return typeof value === 'string';
}

let value: any = 'Hello';
if (isString(value)) {
  let length: number = value.length;
}`;

export const ts_7_2_3 =
`function isStringArray(value: any[]): value is string[] {
  return value.every(item => typeof item === 'string');
}

let array: any[] = ['Hello', 'World'];
if (isStringArray(array)) {
  let firstItem: string = array[0];
}`;

export const ts_7_2_4 =
`type StringOrNumber = string | number;

let value: StringOrNumber = 'Hello';
let length: number = (value as string).length; // Type assertion`;

export const ts_7_2_5 =
`type StringOrNumber = string | number;

let value: StringOrNumber = 'Hello';
if (typeof value === 'string') {
  let length: number = value.length; // No type assertion needed
}`;

export const ts_8_1_1 =
`enum Color {
  Red,
  Green,
  Blue,
}`;

export const ts_8_1_2 =
`let myColor: Color = Color.Green;`;

export const ts_8_1_3 =
`enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

let direction: Direction = Direction.Up;`;

export const ts_8_1_4 =
`enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
}`;

export const ts_8_1_5 =
`let currentStatus: Status = Status.Active;
console.log(currentStatus); // Output: 'ACTIVE'`;

export const ts_8_1_5_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/KYOwrgtgBAygLgQzmAzlA3gWAFBSgQQGM4BLAN2CgF4oByfAYQBUBJANQFFaAaHPFkAmLlKNWiwByjVpx58oABVAATEiADm1Ogo4SAIpIDic7AF8cOADbA4UQmABOD0HHhJUALliJkaGm98AOiJSCgBuHEIAexAUKOtAyyj1AAp7JxcA1ABKMKgAenyoAHkwOAAHMq96ZnYuHCA');

export const ts_8_1_6 =
`enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}`;

export const ts_8_1_7 =
`enum Fruit {
  Apple,
  Banana,
}

let fruitName: string = Fruit[1]; // 'Banana'`;

export const ts_8_2_1 =
'enum Color { \n\
  Red, \n\
  Green, \n\
  Blue, \n\
} \n\
\n\
for (let key in Color) { \n\
  if (isNaN(Number(key))) { \n\
      console.log(`Enum member: ${key}, Value: ${Color[key]}`); \n\
  } \n\
}';

export const ts_8_2_1_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/KYOwrgtgBAwg9gGzgJygbygWAFBSgJWABMAaLXKAcWWFDJzwCEExh7sBfc8gMxSgAUCYABcoAa2ABPKAEsQsRCgCU6bnJ6DZAZwByAQ10DdkAEbBkAyVOW21DPI4DGcENsTAAdEgDmAgAYAouDQEMAQ5sgAXFAAJGjWHGQAavoswDHx8EjIANrWALoc-soA3OpcOBw4QA');

export const ts_8_2_2 =
'enum Direction { \n\
  Up, \n\
  Down, \n\
  Left, \n\
  Right, \n\
} \n\
\n\
Object.keys(Direction).forEach(key => { \n\
  if (isNaN(Number(key))) { \n\
      console.log(`Enum member: ${key}, Value: ${Direction[key as keyof typeof Direction]}`); \n\
  } \n\
});';

export const ts_8_2_2_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/KYOwrgtgBAIglgJ2AYwC5wPYigbygWACgooBVABwBoDjYMB3EaokgGWADNVnaAlOAOYALbjQC+NGgHkARgCsUqAHQBrYAE8AzgAp4SNJhABKJRwwIAogENkQ7WvVQAvAD5ckqHA5RtcTQDkrf21-SBlgBHsNIxj3FhIE5CxNDAAbYCVUjAFtAAMLcGgIYAhwhAAuKAASHAcxagA1K1SwYEqavUVDAG0HKCtNKAcMb1R1cmAR2EQurABdMVyjAG4PCSIxFaIgA');

export const ts_8_2_3 =
'enum Status { \n\
  Active, \n\
  Inactive, \n\
  Pending, \n\
} \n\
\n\
for (const value of Object.values(Status)) { \n\
  console.log(`Enum value: ${value}`); \n\
}';

export const ts_8_2_3_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/KYOwrgtgBAygLgQzmAzlA3lAsAKClAQQGM4BLAN2ABps8oBJEBEi62-ABVABNSQBzGrgC+7XADMA9gCcoACiKSQKOFHIIANmGBRJ4qAHkARgCtgJAHTqtwFHPhJUASicZ2URcskbgFjZP45AAMAUXBoa20ALigAEnRI4GEgpwBuWmFcIA');

export const ts_8_2_4 =
`enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let today: Day = Day.Wednesday;
console.log(today); // Output: 3

let dayName: string = Day[3]; // 'Wednesday'`;

export const ts_8_2_4_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/KYOwrgtgBAIghgTygbwLACgpQMphAE0QBoMsBZAewONKgBUxgBnQhEzKAdWHxGdfZY6ACzAAnFjQ4AxMQEsBtbHAAu4xegC+GDABtgKqCoqsAXLERQAvBYQA6br36IA3BgDGVJhX13dFAHMACmNWAEoXKAB6KKgAeTAVAAdE8wBmHXR9Q1YAOTgIYHMmFXkQAOtbAG00gF1ImKgAIkc+SQQmjCA');

export const ts_9_2_1 =
`function identity<T>(value: T): T {
  return value;
}

const numberResult = identity(42); // TypeScript infers T as number
const stringResult = identity('Hello'); // TypeScript infers T as string`;

export const ts_9_2_2 =
`class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(42); // Creates a Box<number> instance
const stringBox = new Box<string>('Hello'); // Creates a Box<string> instance`;

export const ts_9_2_3 =
`function combineArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

const combinedArray = combineArrays([1, 2], ['a', 'b']); // Array of mixed types: [1, 2, 'a', 'b']`;

export const ts_9_2_4 =
`const explicitResult = identity<number>(42); // Specifies T as number
const explicitBox = new Box<string>('Hello'); // Specifies T as string`;

export const ts_9_3_1 =
`interface Lengthy {
  length: number;
}

function logLength<T extends Lengthy>(item: T): void {
  console.log(item.length);
}`;

export const ts_9_3_2 =
`interface Printable {
  print: () => void;
}

function processItem<T extends Lengthy & Printable>(item: T): void {
  console.log(item.length);
  item.print();
}`;

export const ts_9_3_3 =
`function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Alice', age: 30 };
const name = getProperty(person, 'name'); // Type of name is string
const age = getProperty(person, 'age'); // Type of age is number`;

export const ts_9_3_4 =
"class Animal { \n\
  constructor(public name: string) {} \n\
} \n\
\n\
class Cat extends Animal { \n\
  meow(): void { \n\
    console.log('Meow!'); \n\
  } \n\
} \n\
\n\
function adopt<T extends Animal>(animal: T): void { \n\
  console.log(`You adopted ${animal.name}`); \n\
} \n\
\n\
const cat = new Cat('Whiskers'); \n\
adopt(cat); // Outputs: You adopted Whiskers";

export const ts_9_3_4_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/MYGwhgzhAECCB2BLAtmE0De0CwAoa0wA9vBAC4BOArsGURQBQAOVARiIsNPGMgKYAuaOQqJ4AcwCUmAL45ccvPNCQYAYTBlofAB5k+8ACYwEKNJnkF+RAO4NJQgG5FEhi0oKESEIiD4A6ECJxBgByAFk+WwBCUMkAbktoRQVLPAAzKnhaRBJoMEMiJjIAHgAVbT0DYzgkVBAAPgYwOrQhModoZ1d3fC9SXwCgkIADAE0iKnzC4r43ABIMFrMQfx5+GRGE+RTlby1gTWgAXm4+G2gNMjCAdQALRAgAaz4KCDjEvAKi68OybYA9ADoAB5KhkFhkCBCCZTb6zNz3R4vN5AA');

export const ts_10_1_1 =
`type Result = string | number;

let data: Result;
data = 'Hello'; // Valid
data = 42;      // Valid
// data = true; // Error: Type 'boolean' is not assignable to type 'Result'`;

export const ts_10_1_2 =
`type Person = {
  firstName: string;
};

type Employee = {
  employeeId: number;
};

type EmployeePerson = Person & Employee;

let employee: EmployeePerson = {
  firstName: 'Alice',
  employeeId: 123,
};`;

export const ts_10_1_3 =
`type Value = string | number;

type Configurable = {
  readonly id: number;
};

type ConfigurableValue = Value & Configurable;`;

export const ts_10_2_1 =
`function isString(value: any): boolean {
  return typeof value === 'string';
}

let data: any = 'Hello, TypeScript!';
if (isString(data)) {
  // Inside this block, TypeScript knows that 'data' is of type 'string'
  console.log(data.toUpperCase());
}`;

export const ts_10_2_1_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/GYVwdgxgLglg9mABDAzgORAWwEYFMBOAFAG4CGANiLgFyKlgCeAlLWZbsiomFnvogG8AsAChEifLigh8SKAwAOuOMERsqiALzbEAch44CugNyiAvqMSjQkWAkQL8cCLhQoAahSokvNRCih8GDAAc0QAH25eAhY1OBgAE0FLZFVCVAxDInVcJiZksXEigHpixABJMBREjigAC1REbHJnAGsAGkQAFUVcAGUIIIUoRFawOAB3LnrSEd0c3U5EFUR5JT0DPl0UosQIBBQ4clwAOhaQn3ZEACpEACYmU0KzRFxyFA5hQt3Siqqa1YNLjNNqdHpKAZDEZjSbTOqzPQLJYrNYcXQBIKhbbfIr7KpHU7nS5UE5QOAAVQUSnwAGFSB9CHknuILCIzEA');

export const ts_10_2_2 =
`function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function processValue(value: string | number): void {
  if (isNumber(value)) {
      // Inside this block, TypeScript knows that 'value' is of type 'number'
      console.log(value * 2);
  } else {
      // Inside this block, TypeScript knows that 'value' is of type 'string'
      console.log(value.toUpperCase());
  }
}`;

export const ts_10_2_2_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/GYVwdgxgLglg9mABDAzgORAWwEYFMBOAFAG4CGANiLgFyKlgCeAlLWZbsiomFnvogG8AsAChEifLigh8SKAwAOuOMERsqiALzbEAch44CugNyiAvqMSjQkWAkQL8cCLhQoAahSokvNRCih8GDAAc0QAH25eAhY1OBgAE0FLZFVCVAxDInVcJiZksXEigHpixABJMBREjigAC1REbHJnAGsAGkQAFUVcAGUIIIUoRFawOAB3LnrSEd0c3U5EFUR5JT0DPl0UosQIBBQ4clwAOhaQn3ZEACpEACYmU0KzRFxyFA5hQt3Siqqa1YNLjNNqdHpKAZDEZjSbTOqzPQLJYrNYcXQBIKhbbfIr7KpHU7nS5UE5QOAAVQUSnwAGFSB9CHknuILCIzEA');

export const ts_10_2_3 =
`function hasNameProperty(obj: any): obj is { name: string } {
  return 'name' in obj;
}

let item: any = { name: 'Book' };
if (hasNameProperty(item)) {
  // Inside this block, TypeScript knows that 'item' has a 'name' property of type 'string'
  console.log(item.name.toUpperCase());
}`;

export const ts_10_2_3_1 = getOutput('https://www.typescriptlang.org/play?ts=5.1.6#code/GYVwdgxgLglg9mABACwIYGcByqC2BTABQCc4AHPIqATwAo4AjAKwC5FUwqBKVhxxGdIgDeiMLjyt0UIjDABzRAF9hAWABQiRETxQQRJAHIx+A-yS8A3OsXrE6gDY7+UPDlbsqiALzDR41gYAQnBwANamilZqMMCINGhY4sRkFNQ0MC44nJyqGogA9PmIAJJg6DAAJniIUMgCiPT2cBChADSIACpU5ADKEDKkUIihYHAA7oK1qEMGGa6mCWyIRuKmpCTklJ5wsdTky1Iy8ga2iBAI6HCOAHRNcumZ18Z411BwAKqkmwDCGHg02SiiiAA');

export const ts_10_3_1 =
`T extends U ? X : Y`;

export const ts_10_3_2 =
`type Extract<T, U> = T extends U ? T : never;
type Exclude<T, U> = T extends U ? never : T;

type Result1 = Extract<'a' | 'b' | 'c', 'a' | 'c'>; // 'a' | 'c'
type Result2 = Exclude<'a' | 'b' | 'c', 'a' | 'c'>; // 'b'`;

export const ts_10_3_3 =
`type Filter<T> = T extends string ? T : never;
type Result = Filter<'a' | 123 | 'b'>; // Result is 'a' | 'b'`;

export const ts_10_4_1 =
`type Partial<T> = {
  [P in keyof T]?: T[P];
};`;

export const ts_10_4_2 =
`type ReadonlyProperties<T> = {
  readonly [P in keyof T]: T[P];
};

type NullableProperties<T> = {
  [P in keyof T]: T[P] | null;
};`;

export const ts_10_4_3 =
`type NonOptional<T> = {
  [P in keyof T]-?: T[P];
};`;

export const ts_10_4_4 =
`interface User {
  id: number;
  name: string;
  email: string;
}

type OptionalUser = Partial<User>;
type ReadonlyUser = ReadonlyProperties<User>;
type NullableUser = NullableProperties<User>;
type RequiredUser = NonOptional<User>;`;

export const ts_10_4_5 =
`type Required<T> = {
  [P in keyof T]-?: T[P];
};

function setDefaults<T>(input: T): Required<T> {
  const defaults = {} as Required<T>;
  for (const key in input) {
    defaults[key] = input[key];
  }
  return defaults;
}

const defaultUser = setDefaults({ id: 0, name: '', email: '' });`;

export const ts_11_1_1 =
`function myClassDecorator(constructor: Function) {
  console.log('Class decorator called');
}

@myClassDecorator
class MyClass {
  // Class implementation
}`;

export const ts_11_1_1_1 = getOutput('https://www.typescriptlang.org/play?experimentalDecorators=true&ts=5.1.6#code/GYVwdgxgLglg9mABAWwJ4GEA2BDAzrgEQFMI4AnbKcgClLFyjJGnIC5EAxcaeMASkQBvALAAoRIjq44mIgDpMcAObUA5Fjy5EAExLlK5SdkyztqvgG4xAXzGIxAATQb8xUhSpkxEHPkQBZDF8tEXFEAHpwxBctGGQAB1lkIjAoSl4bIA');

export const ts_11_2_1 =
`function prefix(prefixStr: string) {
  return function(target: Function) {
    target.prototype.prefix = prefixStr;
  };
}

@prefix('My')
class Example {
  // Class implementation
}

const example = new Example();
console.log(example.prefix); // Output: 'My'`;

export const ts_11_2_1_1 = getOutput('https://www.typescriptlang.org/play?experimentalDecorators=true&ts=5.1.6#code/GYVwdgxgLglg9mABABwE4FNgwB4Ao2Y4DKUqAXIgM6kxgDmAlIgN4CwAUIohlCKkqEiwEuKAENUddFAoAxcNHhgmbTl0TjJ0gHRo4UfQE9k6XRizZEAXhTnipANwcuAXyfsXzjgAECF3ADkALKGAQwcEAA2YpSUiACi2GIAtsiR6CzOiAD02YgAwtGxiDCp6cnoYOLCYByenBEI1IjoSWUZNmDoAO4JbWnouAzuEE1w6dqRcHS4rSkDZoTYwzl5APIgUMibFMGhHEA');

export const ts_11_2_2 =
"function logMethod(target: any, key: string, descriptor: PropertyDescriptor) { \n\
  const originalMethod = descriptor.value; \n\
  \n\
  descriptor.value = function (...args: any[]) { \n\
    console.log(`Calling ${key} with arguments: ${args.join(', ')}`); \n\
    const result = originalMethod.apply(this, args); \n\
    console.log(`Method ${key} returned: ${result}`); \n\
    return result; \n\
  }; \n\
  \n\
  return descriptor; \n\
} \n\
\n\
class Calculator { \n\
  @logMethod \n\
  add(a: number, b: number): number { \n\
    return a + b; \n\
  } \n\
} \n\
\n\
const calculator = new Calculator(); \n\
calculator.add(2, 3);";

export const ts_11_2_2_1 = getOutput('https://www.typescriptlang.org/play?experimentalDecorators=true&ts=5.1.6#code/GYVwdgxgLglg9mABAGzgcwLIFMoAs4AmAFFAIYBOaOAXIqWAJ4A0iA1lg7QM5TkxhoWBLFwh8ADlDjlaABXJxxWclAYAREWJiTpASkQBvRAFgAUIkQQEPRNJhp+pZNjyFEAXkTDREqeQB0AG5OIFgA3CbmkRbeWjoBwcihHoigkLAIiET+ORRoXLT0DADaALr6RmYWFlZgXHDIWP6oaEQABgDCTsj8aIgAJAbsDAC+iADuMHh0lCAAtlhgUAUDBnlc-gBWcPxEAOQse7ojbboRVdW1NuQiIMhQKXYOYE4u+AT+pOLiyAwkuDAuCx1mdopdrA0mi12m83INhmMblAQOQwFgCLRBjcuHcoCdQRcLEiUUhsbjzlERhSLBdiaivJpfNIKWMqmYIMhSFwuIgusgIHdSH5DGCAAItWEEMGkAjEUi0MDzABGyhYSoVyuUug1cxV5BFhMQdKQpEQAGpEErqYhWaZbZErg8IE4BZzhZ40eNeS7BX4iATTM7+b7pJ9ZUQAEwsADMZyAA');

export const ts_11_2_3 =
"function logProperty(target: any, key: string) { \n\
  let value = target[key]; \n\
  \n\
  const getter = () => { \n\
    console.log(`Getting value of property ${key}: ${value}`); \n\
    return value; \n\
  }; \n\
  \n\
  const setter = (newValue: any) => { \n\
    console.log(`Setting value of property ${key}: ${newValue}`); \n\
    value = newValue; \n\
  }; \n\
  \n\
  Object.defineProperty(target, key, { \n\
    get: getter, \n\
    set: setter, \n\
    enumerable: true, \n\
    configurable: true, \n\
  }); \n\
} \n\
\n\
class Person { \n\
  @logProperty \n\
  name: string = 'Alice'; \n\
} \n\
\n\
const person = new Person(); \n\
console.log(person.name); \n\
person.name = 'Bob';";

export const ts_11_2_3_1 = getOutput('https://www.typescriptlang.org/play?experimentalDecorators=true&ts=5.1.6#code/GYVwdgxgLglg9mABAGzgcwAoCc4AcCmWUAngBRQCGWa+UAXIhWMQDSIDW+xDAzlFjDBoAlIgDeiALAAoRClqIAbhWQh8iALyJK1WgG1OxALoBuKbPNyICPohpQohTYlKiNAPnGW5ia2B5wyPgAdKhopAAGAOK0sEJKKmqIcMCIuDgERMSIACRihgC+DHnKqvgFEcJmMj6IWLQgWEilatUWBW1yNb42UIg8sU5apGD4AO4Aaon4DEzEbp4S3VY2gSFhkQDKsYJoCWXJqel4hCS5+VxF56OT0xVV3nIt6lo3U2WdiB3e3QDyAEYAK3w0GCABN8MBBPhsCcsuQqPY2IY2EsLHJ7Ax7I4sGxlv1aLxBrjHoh8GAQABbQgUf5BBj8NR49E9MBQtCNWn07RYJneAoPGQFSwyCDICg8HiIDCEAJINFyAACYVhmTO3TAFGpvH4u2cAHIAILIGAQfD6trCmqi3ppWUIZw3aX2sCuNp+AJBULoUiZOXBTXUwXSP0IANal6IfUAITg-wtQA');

export const ts_11_2_4 =
"function parameterLogger(target: any, methodName: string, parameterIndex: number) { \n\
  console.log(`Parameter decorator called on ${methodName} at index ${parameterIndex}`); \n\
} \n\
\n\
class ExampleClass { \n\
  greet(@parameterLogger message: string) { \n\
    console.log(`Hello, ${message}!`); \n\
  } \n\
} \n\
\n\
const exampleInstance = new ExampleClass(); \n\
exampleInstance.greet('World');";

export const ts_11_2_4_1 = getOutput('https://www.typescriptlang.org/play?experimentalDecorators=true&ts=5.1.6#code/GYVwdgxgLglg9mABABwIYCdUFsCmUfoAycA5iQQBRQblQBciqYAngDSK5QAWcAJgHLYcDAM5R0MMCXZpMnAgEkwvHAA8GYEFgBGBAJSIA3ogCwAKESIICEXAA2OAHR3SFAAYAFDEPzpEK60woOD8IVDsHXkQERAASQ04eASEAX0YoREkVVTjDWR9FZTUUtz0AblMzNPNKiDtUERFEAFFVbGQHAGF6xqNKyxJ0HDwKAAF8+SJScj9cRtRyUXFJEgNjGssrG3snFxJ3AAkcCLh2eLmRBZwUgEJSio3qqv7zazAxRDV2hyUxJggcIgALyIMA4ADuLTaWA6OG6DREFHKlS+MJ+72okCcg2GUAoAHIAOohOy8fHlIA');

export const ts_12_1_1 =
`// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}`;

export const ts_12_1_2 =
`// logger.ts
export default class Logger {
  log(message: string): void {
    console.log(message);
  }
}`;

export const ts_12_1_3 =
`// types.ts
export type Point = { x: number; y: number };`;

export const ts_12_1_4 =
`// operations.ts
export * from './math'; // Re-export all named exports from math.ts
export { default as MyLogger } from './logger'; // Re-export default export as MyLogger`;

export const ts_12_1_5 =
`// main.ts
import { add, subtract } from './math';

const result1 = add(10, 20);
const result2 = subtract(30, 5);`;

export const ts_12_1_6 =
`// app.ts
import MyLogger from './logger';

const logger = new MyLogger();
logger.log('Hello!');`;

export const ts_12_1_7 =
`// main.ts
import { add as addition, subtract as subtraction } from './math';

const result1 = addition(10, 20);
const result2 = subtraction(30, 5);`;

export const ts_12_1_8 =
`// geometry.ts
import type { Point } from './types';

function calculateDistance(pointA: Point, pointB: Point): number {
    // ...
}`;

export const ts_12_1_9 =
`// main.ts
import * as mathModule from './math';

const result1 = mathModule.add(10, 20);
const result2 = mathModule.subtract(30, 5);`;

export const ts_12_1_10 =
`// Using a library with named exports
import { someFunction } from 'library';

// Using a library with default export
import MyLibrary from 'my-library';`;

export const ts_12_2_1 =
`namespace Shapes {
  export class Circle {
    // ...
  }

  export class Rectangle {
    // ...
  }
}`;

export const ts_12_2_2 =
`/// <reference path="shapes.ts" />

const circle = new Shapes.Circle();
const rectangle = new Shapes.Rectangle();`;

export const ts_12_2_3 =
`namespace Geometry {
  export namespace Shapes {
    export class Circle {
    // ...
    }
  }
}`;

export const ts_13_1_1 =
`node --inspect-brk my-ts-app.js`;

export const ts_13_1_2 =
`{
  "compilerOptions": {
    "sourceMap": true
  }
}`;
