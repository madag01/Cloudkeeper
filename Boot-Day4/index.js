/* ==========================================================
   ES6 Problem-Solving Assignment
   Author: [Your Name]
   ========================================================== */

/* ---------------------- 1. Convert to Arrow Function ---------------------- */
const add = (a, b) => a + b;
console.log("1. Add:", add(3, 4)); // Output: 7

/* ---------------------- 2. Default Parameters ---------------------- */
const greet = (name, message = "Welcome!") => `${message} ${name}`;
console.log("2. Greet:", greet("Alice"));          // Output: "Welcome! Alice"
console.log("2. Greet:", greet("Bob", "Hello,"));  // Output: "Hello, Bob"

/* ---------------------- 3. Template Literals ---------------------- */
const formatString = (name, age) => `Hello, my name is ${name} and I am ${age} years old.`;
console.log("3. Template Literals:", formatString("John", 30));

/* ---------------------- 4. Object Destructuring ---------------------- */
const person = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'New York',
    country: 'NY'
  }
};

const describePerson = ({ name, address: { city } }) => {
  console.log(`4. ${name} lives in ${city}.`);
  console.log("4. Address Object:", person.address);
};
describePerson(person);

/* ---------------------- 5. Rest Operator ---------------------- */
const sumAll = (...nums) => nums.reduce((sum, n) => sum + n, 0);
console.log("5. Sum All:", sumAll(1, 2, 3, 4)); // Output: 10

/* ---------------------- 6. Filter Even Numbers ---------------------- */
const filterEvens = arr => arr.filter(num => num % 2 === 0);
console.log("6. Filter Evens:", filterEvens([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

/* ---------------------- 7. Array Mapping ---------------------- */
const doubleValues = arr => arr.map(num => num * 2);
console.log("7. Double Values:", doubleValues([1, 2, 3])); // Output: [2, 4, 6]

/* ---------------------- 8. Find the Maximum ---------------------- */
const findMax = arr => Math.max(...arr);
console.log("8. Find Max:", findMax([3, 5, 7, 2, 8])); // Output: 8

/* ---------------------- 9. Object and Array Destructuring ---------------------- */
const data = [
  { name: "Bob", age: 24 },
  { name: "Alice", age: 21 }
];
const extractInfo = ([{ age: firstAge }, { name }]) => `${name}’s age is ${firstAge}.`;
console.log("9. Extract Info:", extractInfo(data)); // Output: "Alice’s age is 24."

/* ---------------------- 10. Data Manipulation using Array functions ---------------------- */
const products = [{
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 }
}];

const simplifyData = data =>
  data.map(({ id, title, rating: { rate, count } }) => ({ id, title, rate, count }));

console.log("10. Simplified Data:", simplifyData(products));

/* ---------------------- 11. Default Parameter Behavior ---------------------- */
const fun = (name = "abc") => {
  if (name) {
    console.log("11. if", name);
  } else {
    console.log("11. else", name);
  }
};
fun(""); // Output: if ""

/* ---------------------- 12. Deep Clone Objects ---------------------- */
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
clonedObj.b.c = 42;
console.log("12. Original Object:", obj);       // Output: { a: 1, b: { c: 2 } }
console.log("12. Cloned Object:", clonedObj);   // Output: { a: 1, b: { c: 42 } }

/* ---------------------- 13. Flatten Nested Arrays ---------------------- */
const flattenArray = arr =>
  arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
console.log("13. Flatten Array:", flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]
