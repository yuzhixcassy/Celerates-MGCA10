// 1. Define Practice
function printHeart() {
  console.log("<3");
}

printHeart();




//2. Return Value Practice
const multiply = (x, y) => {
  return x * y;
}

multiply(2,3)
multiply(9,9)
multiply(5,4)
console.log(multiply(5,4))






// 3A. Scope Practice
let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe();




// 3B.
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);





// 4. Arrow Function Exercise
const sayHello = (name) => {
  return `Hello ${name}!`;
};

console.log(sayHello("Hagrid"));
console.log(sayHello("Luna")); 
