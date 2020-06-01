//sort and map method
// mảng cần sắp xếp	
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
console.log('list: ', list);
console.log('==========================================');


// temporary array holds objects with position and sort-value
var mapped = list.map(function(value, index){
	return {index: index, value: value.toLowerCase()};
});
console.log('mapped:')
console.log(mapped);
console.log('==========================================');

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b){
	if(a.value < b.value){
		return -1;
	}
	else if (a.value > b.value) {
		return 1;
	}
	else{ 
		return 0;
	}
});

console.log('mapped sorted:');
console.log(mapped);
console.log('==========================================');

// container for the resulting order
var result = mapped.map(function(item){
	return list[item.index];
});

console.log('list mapped:')
console.log(result);