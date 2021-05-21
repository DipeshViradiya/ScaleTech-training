var fs = require('fs');


fs.readFile('demo.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("File data : " + data.toString());
});

var data = fs.readFileSync('demo.txt');
console.log("Sync data : " + data.toString());