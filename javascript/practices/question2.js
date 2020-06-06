 // Viết một function filter number từ một mảng
//typeof '1' -> string
//typeof 1 -> number

var array = [1, '2', 'str', 4, 6, '8', 'object', NaN, false, ''];
//expect: array = [1, '2' 4, 6, '8']

function isBoolean(item){
	return typeof item === 'boolean';
}
function isEmptyString(item){
	return typeof item === 'string' && item.trim().length === 0;
}
function numberFilter(arr){
	var num = arr.filter(function(item){
		//return typeof item === typeof 1;
		return (!isNaN(item) && !isBoolean(item) && !(isEmptyString(item)));
	});
	return num;
}
console.log("Result: ", numberFilter(array));