
'use strict'
const http = require('http');
const folder = process.argv[2];

http.get(folder, function(list){
    list.setEncoding('utf8');
    list.on('data', function(a){console.log(a);} );
    list.on('error', console.error);
});

