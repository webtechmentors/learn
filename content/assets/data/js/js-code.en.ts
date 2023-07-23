export const js_2_4_1 =
`if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}`;

export const js_2_4_1_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Conditional Statement Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let number = 10;

    if (number > 0) {
      console.log("The number is positive.");
    } else {
      console.log("The number is zero or negative.");
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_2 =
`if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition2 is true
} else {
  // code to be executed if all conditions are false
}`;

export const js_2_4_2_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Conditional Statement Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let num = -10;

    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_3 =
`switch (expression) {
  case value1:
    // code to be executed if expression matches value1
    break;
  case value2:
    // code to be executed if expression matches value2
    break;
  default:
    // code to be executed if no case matches the expression
}`;

export const js_2_4_3_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Conditional Statement Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let day = "Thursday";

    switch (day) {
      case "Monday":
        console.log("It's Monday!");
        break;
      case "Tuesday":
        console.log("It's Tuesday!");
        break;
      case "Wednesday":
        console.log("It's Wednesday!");
        break;
      case "Thursday":
        console.log("It's Thursday!");
        break;
      case "Friday":
        console.log("It's Friday!");
        break;
      default:
        console.log("It's the weekend!");
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_4 =
`for (initialization; condition; increment/decrement) {
  // code to be executed in each iteration
}`;

export const js_2_4_4_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loop Structure Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    for (let i = 1; i <= 5; i++) {
      console.log("Iteration " + i);
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_5 =
`while (condition) {
  // code to be executed as long as the condition is true
}`;

export const js_2_4_5_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loop Structure Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let count = 1;

    while (count <= 5) {
      console.log("Iteration " + count);
      count++;
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_6 =
`do {
  // code to be executed at least once
} while (condition);`;

export const js_2_4_6_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loop Structure Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let count = 1;

    do {
      console.log("Iteration " + count);
      count++;
    } while (count <= 5);
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_7 =
`for (variable in object) {
  // code to be executed for each property
}`;

export const js_2_4_7_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loop Structure Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    const person = {
      name: "John",
      age: 30,
      city: "New York"
    };
    
    for (let key in person) {
      console.log(key + ": " + person[key]);
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_8 =
`for (variable of iterable) {
  // code to be executed for each element
}`;

export const js_2_4_8_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loop Structure Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    const fruits = ["apple", "banana", "orange"];

    for (let fruit of fruits) {
      console.log(fruit);
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_9 =
`for (initialization; condition; increment/decrement) {
  // code to be executed in each iteration
  break;
  // code to be executed in each iteration
}`;

export const js_2_4_9_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loop Control Statement Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        break; // exit the loop when i is 5
      }
      console.log(i);
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_10 =
`for (initialization; condition; increment/decrement) {
  // code to be executed in each iteration
  continue;
  // code to be executed in each iteration
}`;

export const js_2_4_10_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loop Control Statement Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        continue; // skip the iteration when i is 5
      }
      console.log(i);
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_11 =
`for (variable of iterable) {
  // code to be executed for each element
  return;
  // code to be executed for each element
}`;

export const js_2_4_11_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loop Control Statement Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    function findNumber(array, target) {
      for (let num of array) {
        if (num === target) {
          return true; // exit the function and return true if target is found
        }
      }
      return false; // return false if target is not found
    }

    console.log(findNumber([1, 2, 3, 4, 5], 3));
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_1_1 =
`function functionName(parameter1, parameter2, ...) {
  // code to be executed
  return result; // optional
}`;

export const js_3_1_1_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Function Definition Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    function greet(name) {
      const message = "Hello, " + name + "!";
    
      return message;
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_1_2 =
`functionName(argument1, argument2, ...);`;

export const js_3_1_2_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Function Call Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    function greet(name) {
      const message = "Hello, " + name + "!";
    
      return message;
    }

    // Calling the function
    const result = greet("John");
    console.log(result); // Output: Hello, John!
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_1_3 =
`// Global variable
let globalVariable = "I'm a global variable";

function exampleFunction() {
  // Local variable
  let localVariable = "I'm a local variable";
}`;

export const js_3_1_3_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Function Scope Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    // Global variable
    let globalVariable = "I'm a global variable";
    
    function exampleFunction() {
      // Local variable
      let localVariable = "I'm a local variable";
    
      console.log(globalVariable); // Accessing the global variable
      console.log(localVariable); // Accessing the local variable
    }
    
    exampleFunction(); // Calling the function
    
    console.log(globalVariable); // Accessing the global variable outside the function
    // console.log(localVariable); // This will result in an error since localVariable is not accessible outside the function
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_1_4 =
`let anonymousFunction = function(parameter1, parameter2) {
  // code to be executed
};`;

export const js_3_1_4_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Anonymous Function Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let anonymousFunction = function(parameter1, parameter2) {
      // code to be executed
      console.log("Parameters:", parameter1, parameter2);
      console.log("Executing the anonymous function");
    };
    
    // Calling the anonymous function
    anonymousFunction("Hello", "World");
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_1_5 =
`function outerFunction() {
  let outerVariable = "I'm an outer variable";

  function innerFunction() {
    console.log(outerVariable); // Accessing the outer variable from the inner function
  }

  return innerFunction;
}

// Creating a closure by calling the outer function and assigning the returned inner function to a variable
let closure = outerFunction();

// Calling the inner function, which still has access to the outer variable
closure(); // Output: I'm an outer variable`;

export const js_3_1_5_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Function Closure Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    function outerFunction() {
      let outerVariable = "I'm an outer variable";
    
      function innerFunction() {
        console.log(outerVariable); // Accessing the outer variable from the inner function
      }
    
      return innerFunction;
    }
    
    // Creating a closure by calling the outer function and assigning the returned inner function to a variable
    let closure = outerFunction();
    
    // Calling the inner function, which still has access to the outer variable
    closure(); // Output: I'm an outer variable
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_1_6 =
`const functionName = (parameter1, parameter2) => {
  // code to be executed
  return result; // optional
};`;

export const js_3_1_6_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Arrow Function Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    const sum = (num1, num2) => {
      return num1 + num2;
    };
    
    console.log(sum(2, 3)); // Output: 5
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_1_7 =
`(function() {
  // code to be executed immediately
})();`;

export const js_3_1_7_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>IIFE Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    (function(name) {
      console.log("Hello, " + name + "!");
    })("John");
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_2_1 =
`const firstName = "John";
const lastName = "Doe";

const fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"`;

export const js_3_2_1_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>String Concatenation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    const firstName = "John";
    const lastName = "Doe";
    
    const fullName = firstName + " " + lastName;
    console.log(fullName); // Output: "John Doe"
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_2_2 =
`const message = "Hello, World!";
console.log(message.length); // Output: 13`;

export const js_3_2_2_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>String Length Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    const message = "Hello, World!";
    console.log(message.length); // Output: 13
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_2_3 =
`const greeting = "Hello";
console.log(greeting[0]); // Output: "H"
console.log(greeting.charAt(1)); // Output: "e"`;

export const js_3_2_3_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Accessing Characters in a String Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    const greeting = "Hello";
    console.log(greeting[0]); // Output: "H"
    console.log(greeting.charAt(1)); // Output: "e"
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_2_4 =
`// The toLowerCase() method converts the string to all lowercase characters
const str1 = "Hello, World!";
const lowerCaseStr = str1.toLowerCase();
console.log(lowerCaseStr); // Output: "hello, world!"

// The toUpperCase() method converts the string to all uppercase characters
const str2 = "hello, world!";
const upperCaseStr = str2.toUpperCase();
console.log(upperCaseStr); // Output: "HELLO, WORLD!"

// The slice() method extracts a portion of the string from index 7 to 11 (12-1)
const str3 = "Hello, World!";
const slicedStr = str3.slice(7, 12);
console.log(slicedStr); // Output: "World"

// The indexOf() method finds the index of the substring "World" in the string.
const str4 = "Hello, World!";
const index = str4.indexOf("World");
console.log(index); // Output: 7

// The replace() method replaces the substring "Hello" with "Hi" in the string
const str5 = "Hello, World!";
const replacedStr = str5.replace("Hello", "Hi");
console.log(replacedStr); // Output: "Hi, World!"

// The split() method splits the string into an array of substrings based on ',' as a separator
const str6 = "apple,banana,orange";
const fruitArray = str6.split(',');
console.log(fruitArray); // Output: ["apple", "banana", "orange"]

// The join() method joins the elements of the array into a single string with ' | ' as a separator
const fruitArray2 = ["apple", "banana", "orange"];
const joinedFruits = fruitArray2.join(' | ');
console.log(joinedFruits); // Output: "apple | banana | orange"

// The match() method searches the string using a regular expression and returns an array of matches
const str7 = "The quick brown fox jumps over the lazy dog.";
const pattern = /quick|lazy/g;
const matches = str7.match(pattern);
console.log(matches); // Output: ["quick", "lazy"]`;

export const js_3_2_4_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>String Method Examples</title>
  <script src="assets/js/utils.js"></script>
  <script>
    // The toLowerCase() method converts the string to all lowercase characters
    const str1 = "Hello, World!";
    const lowerCaseStr = str1.toLowerCase();
    console.log(lowerCaseStr); // Output: "hello, world!"
    
    // The toUpperCase() method converts the string to all uppercase characters
    const str2 = "hello, world!";
    const upperCaseStr = str2.toUpperCase();
    console.log(upperCaseStr); // Output: "HELLO, WORLD!"
    
    // The slice() method extracts a portion of the string from index 7 to 11 (12-1)
    const str3 = "Hello, World!";
    const slicedStr = str3.slice(7, 12);
    console.log(slicedStr); // Output: "World"
    
    // The indexOf() method finds the index of the substring "World" in the string.
    const str4 = "Hello, World!";
    const index = str4.indexOf("World");
    console.log(index); // Output: 7
    
    // The replace() method replaces the substring "Hello" with "Hi" in the string
    const str5 = "Hello, World!";
    const replacedStr = str5.replace("Hello", "Hi");
    console.log(replacedStr); // Output: "Hi, World!"
    
    // The split() method splits the string into an array of substrings based on ',' as a separator
    const str6 = "apple,banana,orange";
    const fruitArray = str6.split(',');
    console.log(fruitArray); // Output: ["apple", "banana", "orange"]
    
    // The join() method joins the elements of the array into a single string with ' | ' as a separator
    const fruitArray2 = ["apple", "banana", "orange"];
    const joinedFruits = fruitArray2.join(' | ');
    console.log(joinedFruits); // Output: "apple | banana | orange"
    
    // The match() method searches the string using a regular expression and returns an array of matches
    const str7 = "The quick brown fox jumps over the lazy dog.";
    const pattern = /quick|lazy/g;
    const matches = str7.match(pattern);
    console.log(matches); // Output: ["quick", "lazy"]
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_2_5 =
'const name = "John"; \n\
const age = 30; \n\
\n\
const message = `My name is ${name} and I am ${age} years old.`; \n\
console.log(message); // Output: "My name is John and I am 30 years old."'

export const js_3_2_5a =
'const name = "John"; \n    \
const age = 30; \n    \
\n    \
const message = `My name is ${name} and I am ${age} years old.`; \n    \
console.log(message); // Output: "My name is John and I am 30 years old."'

export const js_3_2_5_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>String Template Literal Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    ${js_3_2_5a}
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_2_6 =
`const heart = "\\u2665";
console.log(heart); // Output: "♥"

const smiley = "\\u{1F604}";
console.log(smiley); // Output: "😄"`;

export const js_3_2_6_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Unicode Character Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    const heart = "\u2665";
    console.log(heart); // Output: "♥"
    
    const smiley = "\u{1F604}";
    console.log(smiley); // Output: "😄"
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_3_1 =
`// Using array literal syntax
let myArray = [1, 2, 3, 4, 5];`;

export const js_3_3_2 =
`// Using Array constructor
let myArray = new Array(1, 2, 3, 4, 5);`;

export const js_3_3_3 =
`let myArray = [1, 2, 3, 4, 5];

console.log(myArray[0]); // Output: 1
console.log(myArray[2]); // Output: 3`;

export const js_3_3_3_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Array Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let myArray = [1, 2, 3, 4, 5];

    console.log(myArray[0]); // Output: 1
    console.log(myArray[2]); // Output: 3
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_3_4 =
`let myArray = [1, 2, 3, 4, 5];

myArray[2] = 10;
console.log(myArray); // Output: [1, 2, 10, 4, 5]`;

export const js_3_3_4_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Array Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let myArray = [1, 2, 3, 4, 5];

    myArray[2] = 10;
    console.log(myArray); // Output: [1, 2, 10, 4, 5]
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_3_5 =
`let myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); // Output: 5

myArray.length = 3;
console.log(myArray); // Output: [1, 2, 3]`;

export const js_3_3_5_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Array Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let myArray = [1, 2, 3, 4, 5];
    console.log(myArray.length); // Output: 5
    
    myArray.length = 3;
    console.log(myArray); // Output: [1, 2, 3]
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_3_6 =
`let myArray = [1, 2, 3];

myArray.push(4); // Adds 4 at the end
console.log(myArray); // Output: [1, 2, 3, 4]

let removedElement = myArray.pop(); // Removes the last element and returns it
console.log(myArray); // Output: [1, 2, 3]
console.log(removedElement); // Output: 4

myArray.unshift(0); // Adds 0 at the beginning
console.log(myArray); // Output: [0, 1, 2, 3]

let shiftedElement = myArray.shift(); // Removes the first element and returns it
console.log(myArray); // Output: [1, 2, 3]
console.log(shiftedElement); // Output: 0`;

export const js_3_3_6_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Array Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let myArray = [1, 2, 3];

    myArray.push(4); // Adds 4 at the end
    console.log(myArray); // Output: [1, 2, 3, 4]
    
    let removedElement = myArray.pop(); // Removes the last element and returns it
    console.log(myArray); // Output: [1, 2, 3]
    console.log(removedElement); // Output: 4
    
    myArray.unshift(0); // Adds 0 at the beginning
    console.log(myArray); // Output: [0, 1, 2, 3]
    
    let shiftedElement = myArray.shift(); // Removes the first element and returns it
    console.log(myArray); // Output: [1, 2, 3]
    console.log(shiftedElement); // Output: 0
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_3_7 =
`let myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

myArray.forEach(function(element) {
  console.log(element);
});`;

export const js_3_3_7_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Array Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let myArray = [1, 2, 3, 4, 5];

    for (let i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
    }

    myArray.forEach(function(element) {
      console.log(element);
    });
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_4_1 =
`// Using object literal syntax
let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};`;

export const js_3_4_2 =
`// Using Object constructor
let person = new Object();
person.name = "John";
person.age = 30;
person.profession = "Developer";`;

export const js_3_4_3 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

console.log(person.name); // Output: John
console.log(person['age']); // Output: 30`;

export const js_3_4_3_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Object Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let person = {
      name: "John",
      age: 30,
      profession: "Developer"
    };
    
    console.log(person.name); // Output: John
    console.log(person['age']); // Output: 30
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_4_4 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

person.age = 35;
person['profession'] = "Engineer";`;

export const js_3_4_4_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Object Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let person = {
      name: "John",
      age: 30,
      profession: "Developer"
    };
    
    person.age = 35;
    person['profession'] = "Engineer";
    
    console.log(person.age); // Output: 35
    console.log(person['profession']); // Output: Engineer
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_4_5 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

person.city = "New York";`;

export const js_3_4_5_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Object Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let person = {
      name: "John",
      age: 30,
      profession: "Developer"
    };
    
    person.city = "New York";
      
    console.log(person.name); // Output: John
    console.log(person.city); // Output: New York
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_4_6 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

delete person.profession;`;

export const js_3_4_6_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Object Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let person = {
      name: "John",
      age: 30,
      profession: "Developer"
    };
    
    delete person.profession;
    
    console.log(person.name); // Output: John
    console.log(person.profession); // Output: undefined
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_4_7 =
`let person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log("Hello!");
  }
};

person.sayHello(); // Output: Hello!`

export const js_3_4_7_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Object Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let person = {
      name: "John",
      age: 30,
      sayHello: function() {
        console.log("Hello!");
      }
    };
    
    person.sayHello(); // Output: Hello!
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_4_8 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + ": " + person[key]);
}`;

export const js_3_4_8_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Object Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    let person = {
      name: "John",
      age: 30,
      profession: "Developer"
    };
    
    for (let key in person) {
      console.log(key + ": " + person[key]);
    }
    
    let keys = Object.keys(person);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      console.log(key + ": " + person[key]);
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_3_4_9 =
`function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };
}

let john = new Person("John", 30);
john.sayHello(); // Output: Hello, my name is John`;

export const js_3_4_9_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Object Operation Example</title>
  <script src="assets/js/utils.js"></script>
  <script>
    function Person(name, age) {
      this.name = name;
      this.age = age;
      this.sayHello = function() {
        console.log("Hello, my name is " + this.name);
      };
    }
    
    let john = new Person("John", 30);
    john.sayHello(); // Output: Hello, my name is John
  </script>
</head>
<body>
</body>
</html>`;

export const js_4_2_1 =
`let element = document.getElementById('elementId');`;

export const js_4_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Get Elements by ID Example</title>
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

export const js_4_2_2 =
`let elements = document.getElementsByClassName('className');`;

export const js_4_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Get Elements by Class Name Example</title>
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

export const js_4_2_3 =
`let elements = document.getElementsByTagName('tagName');`;

export const js_4_2_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Get Elements by Tag Name Example</title>
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

export const js_4_2_4 =
`let element = document.querySelector('selector');
let elements = document.querySelectorAll('selector');`;

export const js_4_2_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Query Selector Examples</title>
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

export const js_4_2_5 =
`element.innerHTML = 'New HTML content';
element.textContent = 'New text content';`;

export const js_4_2_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Modify Element Content Example</title>
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

export const js_4_2_6 =
`let value = element.getAttribute('attributeName');
element.setAttribute('attributeName', 'attributeValue');`;

export const js_4_2_6_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Get and Set Attribute Example</title>
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

export const js_4_2_7 =
`element.style.property = 'value';`;

export const js_4_2_7_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Set CSS Property Example</title>
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

export const js_4_2_8 =
`element.classList.add('className');
element.classList.remove('className');`;

export const js_4_2_8_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Class Manipulation on Hover Example</title>
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

export const js_4_2_9 =
`let newElement = document.createElement('tagName');
let newText = document.createTextNode('Text content');`;

export const js_4_2_9_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Create Element and Create Text Node Example</title>
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

export const js_4_2_10 =
`parentElement.appendChild(newElement);
parentElement.removeChild(childElement);`;

export const js_4_2_10_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Append and Remove Child Example</title>
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

export const js_4_3_1 =
`element.addEventListener('eventName', eventHandler);`;

export const js_4_3_2 =
`function eventHandler(event) {
  // Event handling code
}`;

export const js_4_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Event Handler Example</title>
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

export const js_4_3_3 =
`// Event bubbling
element1.addEventListener('click', eventHandler);

// Event capturing
element2.addEventListener('click', eventHandler, true);`;

export const js_4_3_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling and Capturing Example</title>
  <style>
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

export const js_4_3_4 =
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

export const js_4_3_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Event Delegation Example</title>
  <style>
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

export const js_4_3_5 =
`element.removeEventListener('eventName', eventHandler);`;

export const js_4_3_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Remove Event Listener Example</title>
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

export const js_4_3_6 =
`<button onclick="eventHandler(event)">Click me</button>`;

export const js_4_3_6_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Inline Event Handling Example</title>
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

export const js_4_4_1 =
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

export const js_4_4_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Fetch API Example</title>
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

export const js_5_2_1 =
`function callbackFunction(result) {
  // Code to be executed when the callback is invoked
}

// Passing callbackFunction as a callback to another function
someFunction(callbackFunction);`;

export const js_5_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Javascript Callback Function Example</title>
</head>
<body>
  <button id="myButton">Click me</button>

  <script>
    function greet(name, callback) {
      const message = 'Hello, ' + name + '!';
      callback(message);
    }

    function displayMessage(message) {
      alert(message);
    }

    const button = document.getElementById('myButton');

    button.addEventListener('click', () => {
      greet('John', displayMessage);
    });
  </script>
</body>
</html>`;

export const js_5_2_2 =
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
  console.log('Data received:', data);
}`;

export const js_5_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Asynchronous Callback Example</title>
</head>
<body>
  <button onclick="fetchDataFromAPI(handleData)">Fetch Data</button>

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
      alert('Data received:');
    }
  </script>
</body>
</html>`;

export const js_5_2_3 =
`function callbackFunction(err, result) {
  if (err) {
    // Handle error
  } else {
    // Process the result
  }
}`;

export const js_5_3_1 =
`function fetchData() {
  return new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation with setTimeout
    setTimeout(function() {
      // Simulating a successful response
      const data = { message: "Data successfully fetched!" };

      // Resolve the promise with the data
      resolve(data);
      
      // Simulating an error scenario
      // reject(new Error("Failed to fetch data!"));
    }, 2000); // Wait for 2 seconds
  });
}`;

export const js_5_3_2 =
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

export const js_5_4_1 =
`async function fetchData() {
  const response = await fetch('assets/json/list');
  const data = response.json();
  return data;
}`;

export const js_5_4_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Async/Await Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    async function fetchData() {
      const response = await fetch('assets/data/json/list.json');
      const data = response.json();
      return data;
    }

    fetchData().then(data => {
      console.log(data.length);
    });
  </script>
</body>
</html>`;

export const js_5_4_2 =
`async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = response.json();
  return data;
}

fetchData()
  .then(data => {
    console.log(data.length);
  })
  .catch(error => {
    console.error(error);
  });`;

export const js_5_4_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Async/Await Error Handling Example</title>
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
        console.log(data.length);
      })
      .catch(error => {
        console.error(error);
      });
  </script>
</body>
</html>`;

// export const js_7_1_1 =
// `function outerFunction() {
//   let outerVariable = 'I am outside!';

//   if (true) {
//     let innerVariable = 'I am inside!';
//     console.log(innerVariable); // Output: I am inside!
//     console.log(outerVariable); // Output: I am outside!
//   }

//   console.log(innerVariable); // Error: innerVariable is not defined
// }

// outerFunction();`;

// export const js_7_1_2 =
// `function outerFunction() {
//   var outerVariable = 'I am in the outer function!';

//   function innerFunction() {
//     var innerVariable = 'I am in the inner function!';
//     console.log(innerVariable); // Output: I am in the inner function!
//     console.log(outerVariable); // Output: I am in the outer function!
//   }

//   return innerFunction;
// }

// var closure = outerFunction();
// closure();`;

// export const js_7_1_3 =
// `function createCounter() {
//   var count = 0; // Private variable

//   function increment() {
//     count++;
//     console.log('Count:', count);
//   }

//   function decrement() {
//     count--;
//     console.log('Count:', count);
//   }

//   return {
//     increment: increment, // Public interface
//     decrement: decrement // Public interface
//   };
// }

// var counter = createCounter();
// counter.increment(); // Output: Count: 1
// counter.increment(); // Output: Count: 2
// counter.decrement(); // Output: Count: 1`;

export const js_7_1_1 =
`// Creating a prototype object
var animalPrototype = {
  sound: 'Unknown',
  makeSound: function() {
    console.log(this.sound);
  }
};

// Creating a new object using the prototype
var dog = Object.create(animalPrototype);
dog.sound = 'Woof';

// Accessing property and method via prototype chain
dog.makeSound(); // Output: Woof

// Creating another object using the same prototype
var cat = Object.create(animalPrototype);
cat.sound = 'Meow';

cat.makeSound(); // Output: Meow`;

export const js_7_1_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Prototype and Inheritance Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Creating a prototype object
    var animalPrototype = {
      sound: 'Unknown',
      makeSound: function() {
        console.log(this.sound);
      }
    };
    
    // Creating a new object using the prototype
    var dog = Object.create(animalPrototype);
    dog.sound = 'Woof';
    
    // Accessing property and method via prototype chain
    dog.makeSound(); // Output: Woof
    
    // Creating another object using the same prototype
    var cat = Object.create(animalPrototype);
    cat.sound = 'Meow';
    
    cat.makeSound(); // Output: Meow
  </script>
</body>
</html>`;

export const js_7_1_2 =
'// Constructor function \n \
function Person(name, age) { \n \
  this.name = name; \n \
  this.age = age; \n \
} \n \
\n \
// Adding a method to the prototype \n \
Person.prototype.introduce = function() { \n \
  console.log(\`Hi, my name is ${this.name}, and I am ${this.age} years old.\`); \n \
}; \n \
\n \
// Creating objects using the constructor function \n \
var person1 = new Person(\'Alice\', 25); \n \
var person2 = new Person(\'Bob\', 30); \n \
\n \
// Accessing properties and calling the inherited method \n \
console.log(person1.name); // Output: Alice \n \
console.log(person2.age); // Output: 30 \n \
\n \
person1.introduce(); // Output: Hi, my name is Alice, and I am 25 years old. \n \
person2.introduce(); // Output: Hi, my name is Bob, and I am 30 years old.';

const js_7_1_2a =
'// Constructor function \n \
   function Person(name, age) { \n \
     this.name = name; \n \
     this.age = age; \n \
   } \n \
   \n \
   // Adding a method to the prototype \n \
   Person.prototype.introduce = function() { \n \
     console.log(\`Hi, my name is ${this.name}, and I am ${this.age} years old.\`); \n \
   }; \n \
   \n \
   // Creating objects using the constructor function \n \
   var person1 = new Person(\'Alice\', 25); \n \
   var person2 = new Person(\'Bob\', 30); \n \
   \n \
   // Accessing properties and calling the inherited method \n \
   console.log(person1.name); // Output: Alice \n \
   console.log(person2.age); // Output: 30 \n \
   \n \
   person1.introduce(); // Output: Hi, my name is Alice, and I am 25 years old. \n \
   person2.introduce(); // Output: Hi, my name is Bob, and I am 30 years old.';

export const js_7_1_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Prototype and Inheritance Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    ${js_7_1_2a}
  </script>
</body>
</html>`;

export const js_7_1_3 =
'// ES6 class syntax \n \
class Person { \n \
  constructor(name, age) { \n \
    this.name = name; \n \
    this.age = age; \n \
  } \n \
  \n \
  introduce() { \n \
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`); \n \
  } \n \
} \n \
\n \
// Creating objects using the class \n \
var person1 = new Person(\'Alice\', 25); \n \
var person2 = new Person(\'Bob\', 30); \n \
\n \
// Accessing properties and calling the method \n \
console.log(person1.name); // Output: Alice \n \
console.log(person2.age); // Output: 30 \n \
\n \
person1.introduce(); // Output: Hi, my name is Alice, and I am 25 years old. \n \
person2.introduce(); // Output: Hi, my name is Bob, and I am 30 years old.';

export const js_7_1_3a =
'// ES6 class syntax \n \
  class Person { \n \
    constructor(name, age) { \n \
      this.name = name; \n \
      this.age = age; \n \
    } \n \
    \n \
    introduce() { \n \
      console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`); \n \
    } \n \
  } \n \
  \n \
  // Creating objects using the class \n \
  var person1 = new Person(\'Alice\', 25); \n \
  var person2 = new Person(\'Bob\', 30); \n \
  \n \
  // Accessing properties and calling the method \n \
  console.log(person1.name); // Output: Alice \n \
  console.log(person2.age); // Output: 30 \n \
  \n \
  person1.introduce(); // Output: Hi, my name is Alice, and I am 25 years old. \n \
  person2.introduce(); // Output: Hi, my name is Bob, and I am 30 years old.';

export const js_7_1_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Prototype and Inheritance Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    ${js_7_1_2a}
  </script>
</body>
</html>`;

export const js_7_2_1 =
`// Pure function
function addNumbers(a, b) {
  return a + b;
}

// Calling the pure function
var result = addNumbers(3, 5);
console.log(result); // Output: 8`;

export const js_7_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Pure Function Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Pure function
    function addNumbers(a, b) {
      return a + b;
    }
    
    // Calling the pure function
    var result = addNumbers(3, 5);
    console.log(result); // Output: 8
  </script>
</body>
</html>`;

export const js_7_2_2 =
`// Immutable data
const originalArray = [1, 2, 3, 4, 5];

// Creating a new array with an updated value
const updatedArray = [...originalArray, 6];

// Output the original and updated arrays
console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(updatedArray); // Output: [1, 2, 3, 4, 5, 6]`;

export const js_7_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Immutable Data Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Immutable data
    const originalArray = [1, 2, 3, 4, 5];
    
    // Creating a new array with an updated value
    const updatedArray = [...originalArray, 6];
    
    // Output the original and updated arrays
    console.log(originalArray); // Output: [1, 2, 3, 4, 5]
    console.log(updatedArray); // Output: [1, 2, 3, 4, 5, 6]
  </script>
</body>
</html>`;

export const js_7_2_3 =
`// Higher-order function example: map
function map(array, transform) {
  var transformedArray = [];
  
  for (var i = 0; i < array.length; i++) {
    transformedArray.push(transform(array[i]));
  }
  
  return transformedArray;
}

// Example usage of the higher-order function
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = map(numbers, function(num) {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]`;

export const js_7_2_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Higher-order Function Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Higher-order function example: map
    function map(array, transform) {
      var transformedArray = [];
      
      for (var i = 0; i < array.length; i++) {
        transformedArray.push(transform(array[i]));
      }
      
      return transformedArray;
    }
    
    // Example usage of the higher-order function
    var numbers = [1, 2, 3, 4, 5];
    var doubledNumbers = map(numbers, function(num) {
      return num * 2;
    });
    
    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  </script>
</body>
</html>`;

export const js_7_2_4 =
`// Functions to be composed
const add = (x) => x + 5;
const multiplyByTwo = (x) => x * 2;
const subtractTen = (x) => x - 10;

// Function composition
const composedFunction = (x) => subtractTen(multiplyByTwo(add(x)));

// Example usage
const result = composedFunction(10);
console.log(result); // Output: 20`;

export const js_7_2_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Function Composition Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Functions to be composed
    const add = (x) => x + 5;
    const multiplyByTwo = (x) => x * 2;
    const subtractTen = (x) => x - 10;
    
    // Function composition
    const composedFunction = (x) => subtractTen(multiplyByTwo(add(x)));
    
    // Example usage
    const result = composedFunction(10);
    console.log(result); // Output: 20
  </script>
</body>
</html>`;

export const js_7_2_5 =
'// Recursive function to calculate the factorial of a number \n\
function factorial(n) { \n\
  if (n === 0 || n === 1) { \n\
    return 1; \n\
  } else { \n\
    return n * factorial(n - 1); \n\
  } \n\
} \n\
\n\
// Example usage \n\
const number = 5; \n\
const result = factorial(number); \n\
console.log(`Factorial of ${number} is: ${result}`);'

export const js_7_2_5a =
'// Recursive function to calculate the factorial of a number \n    \
function factorial(n) { \n    \
  if (n === 0 || n === 1) { \n    \
    return 1; \n    \
  } else { \n    \
    return n * factorial(n - 1); \n    \
  } \n    \
} \n    \
\n    \
// Example usage \n    \
const number = 5; \n    \
const result = factorial(number); \n    \
console.log(`Factorial of ${number} is: ${result}`);'

export const js_7_2_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Recursion Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    ${js_7_2_5a}
  </script>
</body>
</html>`;

export const js_7_2_6 =
`// Declarative approach using map to square each number
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]`;

export const js_7_2_6_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Declarative Programming Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Declarative approach using map to square each number
    const numbers = [1, 2, 3, 4, 5];
    
    const squaredNumbers = numbers.map((num) => num * num);
    
    console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  </script>
</body>
</html>`;

export const js_7_2_7 =
`// Generator function for generating an infinite sequence of numbers
function* generateNumbers() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

// Lazy evaluation function that takes a generator and returns the next value
function getNextValue(generator) {
  return generator.next().value;
}

// Create a generator for an infinite sequence of numbers
const numbersGenerator = generateNumbers();

// Lazy evaluation example
console.log(getNextValue(numbersGenerator)); // Output: 1
console.log(getNextValue(numbersGenerator)); // Output: 2
console.log(getNextValue(numbersGenerator)); // Output: 3`;

export const js_7_2_7_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Lazy Evaluation Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    // Generator function for generating an infinite sequence of numbers
    function* generateNumbers() {
      let num = 1;
      while (true) {
        yield num++;
      }
    }
    
    // Lazy evaluation function that takes a generator and returns the next value
    function getNextValue(generator) {
      return generator.next().value;
    }
    
    // Create a generator for an infinite sequence of numbers
    const numbersGenerator = generateNumbers();
    
    // Lazy evaluation example
    console.log(getNextValue(numbersGenerator)); // Output: 1
    console.log(getNextValue(numbersGenerator)); // Output: 2
    console.log(getNextValue(numbersGenerator)); // Output: 3
  </script>
</body>
</html>`;

export const js_7_2_8 =
`const text = "The quick brown fox jumps over the lazy dog.";

// Regular expression pattern to search for all words starting with 't' or 'T'
const pattern = /[tT]\\w+/g;

// Finding all matches using the 'exec' method in a loop
let match;
const matches = [];

while ((match = pattern.exec(text)) !== null) {
  matches.push(match[0]);
}

console.log(matches); // Output: ['The', 'the']`;

export const js_7_2_8_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Pattern Matching Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    const text = "The quick brown fox jumps over the lazy dog.";

    // Regular expression pattern to search for all words starting with 't' or 'T'
    const pattern = /[tT]\\w+/g;
    
    // Finding all matches using the 'exec' method in a loop
    let match;
    const matches = [];
    
    for (const word of text.split(' ')) {
      if ((match = pattern.exec(word)) !== null) {
        matches.push(match[0]);
      }
    }
    
    console.log(matches); // Output: ['The', 'the']
  </script>
</body>
</html>`;

export const js_8_2_1 =
`try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
  console.error('Error:', error);
}`;

export const js_8_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Try-Catch Example</title>
  <script src="assets/js/utils.js"></script>
</head>
<body>
  <script>
    function handleError() {
      try {
        // Simulating code that might throw an error
        throw new Error("Custom error message");
      } catch (error) {
        // Handle the error
        console.error('Error: ' + error.message);
      }
    }

    handleError();
  </script>
</body>
</html>`;
