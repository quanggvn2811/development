// array map
var numbers = [1, 2, 4, 5, 7, 9];
var squareNumbers = numbers.map(function(input){
	return input*input;
});
console.log(squareNumbers);
console.log('==========================');

var rectangles = [
	{weight: 5, height: 7},
	{weight: 10, height: 8},
	{weight: 6, height: 20},
	{weight: 12, height: 4},
	{weight: 12, height: 15}
];
var s = rectangles.map(function(rec){
	return rec.weight*rec.height;
});
console.log(s);