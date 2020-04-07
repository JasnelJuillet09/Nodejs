
const http = require('http');
const bl = require('bl');
const folder = process.argv[2];
http.get(folder, function(list){
    list.pipe(bl(function(err, data){
        if (err) return console.error(err);        
       var dataString = data.toString();
       var dataLength = dataString.length;
        console.log(dataLength);
        console.log(dataString);
    }));
});

