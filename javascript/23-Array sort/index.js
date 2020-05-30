var numbers = [1, 2, 5, 8, 9, 14, 7, 2, 10];
var sortedNumbers = numbers.sort(function(item1, item2){
	return item1 - item2;
});
console.log('Sorted: ' + sortedNumbers);
console.log('==========================');
var sortedNumbers = numbers.sort(function(item1, item2){
	return item2 - item1;
});
console.log('Sorted: ' + sortedNumbers);