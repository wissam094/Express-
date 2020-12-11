const express = require('express');
const app = express();
const port = 3000;
const a=require("./middleware")

app.set('view engine', 'pug');

app.use(a);

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/service', (req, res) => {
    res.render('service');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
/*
app.get('/service', (req, res) => {
    res.send('service')
})
app.get('/contact', (req, res) => {
    res.send('contact')
})*/




app.listen(port, (error) => {
    if (error) {
        throw ('error')
    }
    else {
        console.log('server runing')
    }
})