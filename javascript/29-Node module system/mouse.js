//Constructor function
function Mouse(color) {
	this.color = color;
	this.dead = false;
};

//prototype die
Mouse.prototype.die = function(){
	this.dead = true;
};
module.exports = Mouse;