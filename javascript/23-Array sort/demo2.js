var items = [
	{name: 'Edward', value: 21},
	{name: 'Sharpe', value: 37},
	{name: 'And', value: 45},
	{name: 'The', value: -12},
	{name: 'Mangnetic', value: 13},
	{name: 'Zeros', value: 37}

];
console.log(items);
console.log('===================================');

//sort for value
items.sort(function(a, b){
	return a.value - b.value;
});
console.log(items);
console.log('===================================');


//sort for name
items.sort(function(per1, per2){
	var namePer1 = per1.name.toUpperCase();
	var namePer2 = per2.name.toUpperCase();
	//console.log(namePer2, namePer2);
	if(namePer1 < namePer2){
		return -1;
	}
	else if (namePer1 > namePer2) {
		return 1;
	}
	else{
		return 0;
	}
});
console.log(items);