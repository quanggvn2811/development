var numbers = [1, 2, 3, 5, 7, 8, 11, 13, 14, 15];
var sum = numbers.reduce(function(item1, item2){
	console.log(item1, item2);
	return item1 + item2;
	
}, 0);
console.log('=============================');

//dùng reduce để tính tổng đơn hàng
//giỏ hàng
var orders = [
	{name: 'A', quantity: 2, unitPrice: 400},
	{name: 'B', quantity: 4, unitPrice: 100},
	{name: 'C', quantity: 1, unitPrice: 500}
];
var total = orders.reduce(function(currentTotal, product){
	return currentTotal + product.quantity*product.unitPrice;
	
}, 0);
console.log(total);

console.log('=============================');
 var items = ['Giap', 'Van', 'Ngoc', 'Quang', 'Love', 'Ha', 'Mai', 'Anh'];
 //use reduce to make this result
 //'<Tom><Bill><Kim>'

 var result = items.reduce(function(curentResult, item){
 	return curentResult + '<' + item + '>'
 },'');
console.log(result);

//use map and join
var currentMap = '';
var resultMap = items.map(function(item){
	//currentMap += '<' + item + '>';
	return '<' + item + '>';
});
//console.log(currentMap);
console.log(resultMap.join(''));