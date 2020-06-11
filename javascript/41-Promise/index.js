// //Promise object
// var promise = require('promise-fs');


// function onDone(song){
// 	console.log(song);
// }
// function onError(err){
// 	console.log(err);
// }
// function readFilePromise(path){
// 	return promise.readFile(path, {encoding: 'utf8'});
// }
// readFilePromise('song1.txt')
// 	.then(onDone)
// 	.then(function(){
// 		return readFilePromise('song2.txt');
// 	})
// 	.then(onError)
// 	.catch(onError);

//create new module
var fs = require('fs'); //fs node module 
function readFilePromise(path){
	return new Promise(function(resolve, reject){
		fs.readFile(path, {encoding: 'utf8'}, function(err, data){
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		})
	}); 
}
readFilePromise('song1.txt')
	.then(function(song1){
		console.log(song1);
	})
	.then(function(){
		return readFilePromise('song2.txt')
	})
	.then(function(song2){
		console.log(song2);
	})
	.catch(function(err){
		console.log(err);
	});