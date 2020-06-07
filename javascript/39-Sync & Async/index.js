//Sync & Async (Synchoronous & Asynchoronous)
var fs = require('fs');


//Sync
// console.log('Start');

// var song1 = fs.readFileSync('./song1.txt', {encoding: 'utf8'});
// console.log(song1);

// var song2 = fs.readFileSync('./song2.txt', {encoding: 'utf8'});
// console.log(song2);

// console.log('End');

//Async
//Use for: read/write to file system (fs), network,...
console.log('Start');
var song1 = fs.readFile('./song1.txt', {encoding: 'utf8'}, function(err, data) {
	if (err) throw err;
	console.log(data); //data: song1
});
console.log('End');
