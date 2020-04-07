'use strict'
const fs = require('fs');
const fichier = process.argv[2];
fs.readFile(fichier, 'utf8', function(err, donnee){
    var line = donnee.toString().split('\n').length - 1;
    console.log(line);
});


