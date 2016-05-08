/**
 * Created by semianchuk on 04.04.16.
 */
var path = require('path');
var express = require('express');
var fotofolder = require('./fotofolder');
var async = require('async');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var staticSiteOptions = {
    portnum: 8080, // слушать порт 80
    maxAge: 1000 * 60 * 15 // хранить страницы в кэше пятнадцать минут
};

var app = express().use(express.static(
    path.join(__dirname, ''),
    staticSiteOptions
))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/foto/:firstFolder/:subFolder', function(req, res){
    var img;
    console.log(req.params)
    fotofolder(req.params.firstFolder, req.params.subFolder, function(err, data) {
        if (err) {
            console.log('Error!')
        } else {
            console.log(data);
            img = data;
            for(var i=0; i<img.length; i++){
                img[i] = 'image/' + req.params.firstFolder + '/' + req.params.subFolder + '/' + img[i];
            }
        }
    })
    setTimeout(function(){
        res.json(img);
        //res.send(img);
    },1000)
});

app.listen(8081);
