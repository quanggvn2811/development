//Math object in javascript

//1. Math.PI
//S = r*r*PI
function discArea(r) {
	return r*r*Math.PI;
}
var s = discArea(8);
console.log('PI:',Math.PI);
console.log('S: ',s);


//2. Math.ceil(number) //ceiling
var c = 9.2; //expect: 10
console.log('Ceiling 9.2:', Math.ceil(c));

//3. Math.floor(number) //floor;
var f = 9.7; //expect: 9
console.log('Floor 9.7:', Math.floor(f));

//4. Math.max(x1, x2, x3,...)
console.log('Max:',Math.max(10, 8, 20, 6, -2)); //expect: 20
console.log('Min:',Math.min(10, 8, 20, 6, -2)); //expect: -2

//5. Math.random (0->1)
console.log('Random:', 10*Math.random());
function tossACoin() {
	var random = Math.random();
	return random > 0.5;
}
console.log('Mặt sấp:', tossACoin());


//function roll a die return 1-6
function rollADie() {
	//1, 2, 3, 4, 5, 6
	do{
		var rand = 10* Math.random();
	}while(rand >= 7 || rand < 1);

	return Math.floor(rand);
}
console.log('Result:', rollADie()); //expect; 1-6