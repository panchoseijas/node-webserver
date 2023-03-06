require('dotenv').config();
const express = require('express');
var hbs = require('hbs');


const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use( express.static( 'public' ));


app.get('/',  (req, res) => {
    res.render('home',{
        nombre: 'Pancho',
        titulo: 'Curso node'
    });
})

app.get('/generic',  (req, res) => {
    res.render('generic',{
        nombre: 'Pancho',
        titulo: 'Curso node'
    });
})

app.get('/elements',  (req, res) => {
    res.render('generic',{
        nombre: 'Pancho',
        titulo: 'Curso node'
    });
})

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })