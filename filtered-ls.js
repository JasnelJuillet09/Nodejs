 'use strict'
 const fs = require('fs');
 const path = require('path');
 const chemin = process.argv[2];
 const extension = '.'+process.argv[3];
 fs.readdir(chemin, function(err, liste){
     liste.forEach(function(file) {
         if(path.extname(file) === extension){
             console.log(file);
         }
     });
 });

