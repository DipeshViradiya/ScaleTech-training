var express = require('express');
const app = express();
var hbs = require('hbs');
var path = require('path');
var db = require('./db');
var viewPath = path.join(__dirname, './templates/view');

app.use(express.urlencoded({extended : false}));
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

app.get('/create-task', (req, res) => {
    res.render('create-task');
})

app.post('/create-task', function (req, res){
    var title = req.body.title;
    var desc = req.body.desc;

    var sql = `insert into tasks(title, detail, created, isactive) values ("${title}", "${desc}", now(), 0)`;
    db.query(sql, function(err, result){
        if(err) throw err;
        console.log("record inserted");
        res.redirect('/');
    })
})

app.get('/edit-task/:id', (req, res) => {
    var id = req.params.id;
    var sql = `select * from tasks where id= ${id}`;
    db.query(sql, function(err, rows, fields) {
        res.render('edit-task', {task : rows[0]});
    })
})

app.post('edit-task/:id', (req, res) => {
    var title = req.body.title;
    var detail = req.body.desc;
    var id = req.params.id;
    var sql = `update tasks set title = ${title} , detail = ${desc} where id = ${id}`;
    db.query(sql, function(err, result) {
        if(err) throw err;
        console.log("record updated...");
        res.redirect('/');
    })
    
})

app.get('/delete-task/:id', (req, res) => {
    var id = req.params.id;
    var sql = `delete from tasks where id = ${id}`
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log("record updated...");
        res.redirect('/');
    })

})

app.listen(7000, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Server : 7000");
    }
})