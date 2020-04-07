// 'use strict'
// var mymodule = require('./solution_filter.js');
// var folder = process.argv[2];
// var extension = process.argv[3];

// mymodule(folder, extension, function(err, liste){
//     if(err){
//         return console.error('Il ya lerreur dans le code '+err);
//     }
//     liste.forEach(function(file){
//         console.log(file);
//     });
// });


	
var filterFn = require('./mymodule.js');
var dir = process.argv[2];
var filterStr = process.argv[3];
 
filterFn(dir, filterStr, function (err, list) {
    if (err) {
        return console.error('There was an error:', err);
    }
 
    list.forEach(function (file) {
        console.log(file)
    });
});
 