var strArray = ['Blue', 'Humpback', 'Beluga'];
console.log('strArray: ', strArray.join());
console.log('Sorted: ', strArray.sort());
console.log('=============================================');

function compareFunction(a, b){
	return a -b;
}
var numericStringArray = ['80', '9', '700'];
console.log('numericStringArray: ', numericStringArray.join());
console.log('Sorted without a compareFunction: ', numericStringArray.sort());
console.log('Sorted with compareFunction: ', numericStringArray.sort(compareFunction));
console.log('=============================================');

var numberArray = [40, 1, 5, 200];
console.log('numberArray: ', numberArray.join());
console.log('Sorted without a compareFunction: ', numberArray.sort());
console.log('Sorted with compareFunction: ', numberArray.sort(compareFunction));
console.log('=============================================');

var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];
console.log('mixedNumericArray: ', mixedNumericArray.join());
console.log('Sorted without a compareFunction: ', mixedNumericArray.sort());
console.log('Sorted with compareFunction: ', mixedNumericArray.sort(compareFunction));
console.log('=============================================');