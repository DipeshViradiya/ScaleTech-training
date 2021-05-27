var express = require('express');
const app = express();
var hbs = require('hbs');
var path = require('path');
var db = require('./db');
var viewPath = path.join(__dirname, './templates/view');
app.set('view engine', 'hbs');
app.set('views',viewPath);


app.get('/', (req, res) => {
    var query = "select * from tasks";
    db.query(query, (err, rows, fields) => {
        if (err) {
            throw err;
        }
        res.render('index', { tasks : rows });
    })
})



app.listen(7000, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Server : 7000");
    }
})