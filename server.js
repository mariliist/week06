const express = require('express');
const port = 3000;
const data = require('data/books.json');
//const data = require('/data/countries.json');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/books', (req, res) => {
    res.status(200).json(data);
});




app.listen(port, () => {
    console.log('server is running running this ${port}.');
});