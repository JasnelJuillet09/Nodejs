// const fs = require('fs');
// let file = fs.readFileSync('C:\\Users\\Jasnel JUILLET\\Desktop\\pers.txt');
// const buf = new Buffer.from(file);
// console.log(buf.toString());

// const str = 'The quick brown fox jumps over the lazy dog.';
// const words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]

'use strict';
(function(){
    var fs = require('fs'); 
    var contents = fs.readFileSync(process.argv[2],'utf8');
    var lines = contents.toString().split('\n').length - 1; 
    console.log(lines);
})();
