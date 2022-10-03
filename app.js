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

addTwo(1, 2);
const firstArray = [1, 2, 3, 4, 5, 5, 6];

const [first, second, third, fourth] = firstArray;
console.log(third);

// promises
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log(promise);

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

const shallowObject = { ...Obj };
console.log(shallowObject);

const deepCopyObj = JSON.parse(JSON.stringify(Obj));
console.log(deepCopyObj);
