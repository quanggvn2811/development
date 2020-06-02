//Node module system

//require Mouse
var Mouse = require('./mouse.js');

//require Cat
var Cat = require('./cat.js');

var mickey = new Mouse('Back');
var jerry = new Mouse('Orange');
 
console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);

console.log(tom);
console.log(jerry);