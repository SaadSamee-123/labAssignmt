//  var is hoisted ,but only declaration not value

console.log(check);
var check = "saad";
//

// console.log(masd);
// let masd = "saad";
// Uncaught ReferenceError: Cannot access 'masd' before initialization

const addTwo = (a, b) => {
  console.log(a + b);
};

// block scope
let i = 2;
console.log("let i=2 is availble globally", i);
for (let i = 0; i < +10; i++) {
  console.log("i is available on for loop", i);
}

addTwo(1, 2);
const firstArray = [1, 2, 3, 4, 5, 5, 6];

const [first, second, third, fourth] = firstArray;
console.log(third);

// promises
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log(promise);

// async await
const testAsync = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(response);
};

testAsync();

// shallow and deep copy

const Obj = {
  name: "saad",
  age: 25,
  country: {
    province: "punjab",
    city: "Rawalpindi",
  },
};

// rest operator
const restArray = [2, 3, 4, 6, 5];
const restArrayFunction = (...args) => {
  console.log(args);
};
restArrayFunction(restArray);
// shallow copy
const shallowObject = { ...Obj };
console.log(shallowObject);
// deep copy
const deepCopyObj = JSON.parse(JSON.stringify(Obj));
console.log(deepCopyObj);
