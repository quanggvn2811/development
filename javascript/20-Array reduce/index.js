//array reduce: hàm giảm
var numbers = [1, 2, 4, 7, 5, 12, 23];
var numReduce = numbers.reduce(function(red1, red2){
	return red1 + red2;
});
console.log(numReduce);
//->54
console.log('====================');
//dùng reduce để tính tổng đơn hàng
//giỏ hàng
var orders = [
	{name: 'A', quantity: 2, unitPrice: 400},
	{name: 'B', quantity: 4, unitPrice: 100},
	{name: 'C', quantity: 1, unitPrice: 500}
];
var ordersReduce = orders.reduce(function(red1, red2){
	// console.log(red1.quantity);
	// console.log(red1.unitPrice);
	return red1.quantity * red1.unitPrice + red2.quantity * red2.unitPrice;
	
}, 0);
console.log(ordersReduce);