var students = [
	{name: 'Quang', age: 23},
    {name: 'Linh', age: 20},
    {name: 'Trung', age: 22},
    {name: 'Nam', age: 21},
    {name: 'Hiếu', age: 15}
];
var content = '';
for(var student of students){
	content += '<li>' + student.name + '</li>' ;
}
document.getElementById('contact-list').innerHTML = content;

console.log('==========================');

var myDog = {
	name: 'moon',
	age: 5,
	wieght: 12
}
var dogContent = '';
for(var key in myDog){
	dogContent += '<li>' + key + ' : ' + myDog[key] + '</li>';
}
document.getElementById('myDog').innerHTML = dogContent;