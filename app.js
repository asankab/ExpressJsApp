var express = require('express');
var app = express();

function logger(req, res, next){
    console.log(new Date(), req.method, req.url);
    next();
}

app.use(logger);

app.get('/', function (req, res) {
    res.send('Hello World')
});d

function hello(req, res, next){
    res.write('Hello \n');
    next();
    res.end();
}

app.get('/hello', hello);

app.listen(3000);
//Node js Zero to Hero
//Building Apps with Node JS
//Node JS : from Biginner to advanced level