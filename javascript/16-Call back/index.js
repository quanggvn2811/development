//call back: function như một biến, được truyền và gọi để thực hiện

var coffeeMachine = {
	makeCoffee: function (onFinish) {
		console.log('Making coffee...');
		onFinish();
	}
}
var beep = function() {
	console.log('Tít Tít...');
}
coffeeMachine.makeCoffee(beep);

console.log('==================================');
coffeeMachine.makeCoffee(function() {
	console.log('Bíp Bíp...');
});