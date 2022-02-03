const fruit = "Apple";

function first() {
  const vegetable = "Broccoli";

  console.log("fruit:", fruit);
  console.log("vegetable:", vegetable);
  // console.log("legume:", legume);
}

function second() {
  const legume = "Peanut";

  console.log("fruit:", fruit);
  console.log("legume:", legume);
  // console.log("vegetable:", vegetable);
}

first(fruit)
second(fruit)

//Scope demo. Apple is global. vegetable and legume are isolated in their function/block scope