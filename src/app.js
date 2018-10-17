const fs = require ('fs');
const express = require ('express');
const path = require ('path');
const app = express();
const moment = require ('moment');
const users = {};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.render('index', {users:users},
//     date: moment().format("MMM Do YYYY"));
// });



app.listen(3000, ()=> {
    console.log('Listening on 3000');
});
