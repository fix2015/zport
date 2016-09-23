var fs = require('fs'),
    request = require('request'),
    gm = require('gm').subClass({imageMagick: true});

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){

        if(res.headers['content-length']>0){
            console.log(uri);
            console.log('content-type:', res.headers['content-type']);
            console.log('content-length:', res.headers['content-length']);
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        }else{
            callback()
        }

    });
};
var checkFolder = function(file, years, mounth, obj, callback){
    request.head(file, function(err, res, body){
        if(res.headers['content-length']>0){
            callback({years: years,mounth: mounth,obj: obj})
        }
    });
    };

var mkdirp = require('mkdirp');
var async = require('async')
var jsdom = require("jsdom");

gm('http://gport-map.tk/images/zport/762/ico.jpg')
    .append('https://pp.vk.me/c636019/v636019349/d413/uZilv97vZDM.jpg')
    .resize(320, 420)
    .font("Verdana.ttf", 12)
    .drawText(190, 410, 'http:vk.com/gport')
    .write("to/drawing.png", function (err) {
        console.log(err)
        if (!err) console.log('done');
    });
