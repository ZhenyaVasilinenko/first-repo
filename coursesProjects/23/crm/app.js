const express = require('express');
const mysql = require('mysql');
const connection = require('express-myconnection');
const routes = require('./routes/index');
const customers = require('./routes/customers');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set(express.urlencoded({extended: true}));
app.set(express.static(__dirname + '/public'));
app.set(express.static(__dirname + '/node_modules/bootsrap/dist'));

app.use(connection (mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'imt_48_crm'
}, 'pool'));

app.get('/', routes.index);
app.get('/customers', customers.all);
// app.get('/customers/add', customers.add);
// app.post('/customers/add', customers.save);
// app.get('/customers/edit/:id', customers.edit);
// app.post('/customers/edit/:id', customers.edit_save);
// app.get('/customers/delete/:id', customers.delete);

app.listen(3000, function(){
    console.log('Server at http://localhost:3000');
});