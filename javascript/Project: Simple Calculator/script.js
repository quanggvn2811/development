function getHistory(){
	return document.getElementById('history-value').innerText;
}
function printHistory(num){
	document.getElementById('history-value').innerText = num;
}
function getOutput(){
	return document.getElementById('output-value').innerText;
}
function printOutput(num){
	document.getElementById('output-value').innerText = getFormattedNumber(num);
}
function getFormattedNumber(num){
	// if(num == "-"){
	// 	return "";
	// }
	var n = Nunber(num);
	var value = n.toLocaleString("en");
	return value;
}
printOutput('886872648');
// function reverseNumberFormat(num){
// 	return Number(num.replace(/, /g, ''));
// }
// var operator = document.getElementByClassName('operator');

// for(var i = 0; i < operator.length; i++){
// 	operator[i] = 

// }