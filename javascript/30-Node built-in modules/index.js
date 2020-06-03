// Node built-in modules

//require module fs
var fs = require('fs');
var text = fs.readFileSync('./song.txt', {encoding: 'utf8'});
console.log(text);

var str = 'iubuc';
fs.writeFileSync('./iubuc.txt', str);