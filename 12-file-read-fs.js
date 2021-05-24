var fs = require('fs');


fs.readFile('demo.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("File data : " + data.toString());
});

var data = fs.readFileSync('demo.txt');
console.log("Sync data : " + data.toString());

/*

O/P :

PS D:\ScaleTech\Training JS> node .\12-file-read-fs.js
Sync data : This is demo file.
It will be read by node program.


- Dipesh Viradiya
:)
File data : This is demo file.
It will be read by node program.


- Dipesh Viradiya
:)
PS D:\ScaleTech\Training JS>

 */