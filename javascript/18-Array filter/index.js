var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var eventNumbers = numbers.filter(function(item){
	return item%2 ===1;
});
console.log(eventNumbers);
