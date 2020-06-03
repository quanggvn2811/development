//JSON object
//1. Stringify - convert an object to a JSON string

var pet = {name: "Moon", age: 3, dead: false};
console.log(typeof pet);
console.log(pet); 

//convert
var petString = JSON.stringify(pet);
console.log(typeof petString);
console.log(petString);

console.log('==================================================');

//2. parse - convert a string to an object
var catString = '{"name": "Mr Tom", "weight": "weight"}';
console.log(typeof catString);
console.log(catString);

//convert
var cat = JSON.parse(catString);
console.log(typeof cat);
console.log(cat);