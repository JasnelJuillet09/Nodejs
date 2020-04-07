// 'use strcit'
// var fs = require('fs');
// var path = require('path');
// module.exports = function( folder, extension, callback);
// fs.readdir(folder, 'utf8', function(err, liste){
//     if(err){
//         return callback(err);
//     }
//     liste = liste.filter(function(file){
//         return path.extname(file) === '.'+extension;
//     });
//     callback(null, liste);
// });

var fs = require('fs');
var path = require('path');
 
module.exports = function (dir, filterStr, callback) {
 
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }
 
        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        });
 
        callback(null, list)
    })
}