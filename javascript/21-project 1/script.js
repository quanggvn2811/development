var users = [
	{ name: 'Tom', gender: 'male'},
	{ name: 'Maria', gender: 'female'},
	{ name: 'Jason', gender: 'male'},
	{ name: 'Sora', gender: 'female'},
	{ name: 'Son', gender: 'male'},
	{ name: 'Ronaldo', gender: 'male'},
	{ name: 'Messi', gender: 'male'},
	{ name: 'Jelly', gender: 'female'},
	{ name: 'Jack', gender: 'male'},
	{ name: 'Alice', gender: 'female'},
	{ name: 'Bob', gender: 'male'}
];
var userList = $('#userList');
var genderFilter = $('#genderFilter');

render(userList, users);

genderFilter.on('change', function() {
	var selectedGender = this.value; //male or female
	if (selectedGender == 'null') {
		render(userList, users);
	}
	else{
		var filterUsers = users.filter(function(user) {
		return user.gender === selectedGender;
	});
	render(userList, filterUsers);
	}
});

function render(container, items) {
	var htmlItem = items.map(function(item) {
		return '<li class="list-group-item">' + item.name + "</li>";
	});
	var html = htmlItem.join('');
	container.html(html);
}