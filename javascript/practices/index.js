// Viết function đảo ngược một chuỗi cho trước
//input: abcde
//output: edcba
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var str = readlineSync.question('Input sone string;  ');

//reverse string function
function reverseString(str){
	const tmp = [];

	//option 1
	// for(let s = str.length - 1; s >= 0; s--){
	// 	tmp.push(str[s]);
	// }

	//option 2
	for(let s in str){
		tmp.unshift(str[s]); //insert into header off array
	}

	return tmp.join('');
}

var result = reverseString(str);
console.log("String after reverse: " + result);