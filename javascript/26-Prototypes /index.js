//Prototypes
//Create a new object, object literal

// var mouse = {
// 	weigh: 2;
// 	getWeigh: function(){
// 		return this.weight;
// 	}
// }

//Constructor function
function Mouse(color, weight) {
	this.type = 'mouse';
	this.color = color;
	this.weight = weight;
}

var mickey = new Mouse('white', 10);
console.log(mickey);
console.log(mickey.color);
console.log('============================');
//Prototypes
console.log(Mouse.prototype.constructor === Mouse);


Mouse.prototype.sleep = function(){
	console.log(this.color + ' is sleeping...Zzzz');
}
var jerry = new Mouse('orange', 12);
console.log(jerry);
jerry.sleep();