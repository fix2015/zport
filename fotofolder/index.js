/**
 * Created by semianchuk on 02.05.16.
 */

var fs = require('fs');

module.exports = function(firstFolderName, subFolderName, callback) {
    var readdir = require('fs-readdir-promise');
    readdir('../first-webapp-react/image/'+firstFolderName+'/' + subFolderName)
        .then(function(files) {
            for(var i=0; i<files.length; i++){
                console.log(files[i].match(/(?:jp(?:e?g|e|2)|gif|png|tiff?|ico\+xml)$/i))
                if (!files[i].match(/(?:jp(?:e?g|e|2)|gif|png|tiff?|ico\+xml)$/i)) {
                    files.splice(i, 1);
                }
            }
            callback(null, files);
        })
        .catch(function(err) {
            console.log(err.message);
        });
}


/*
 var readdir = require('fs-readdir-promise');
 readdir('../first-webapp-react/image/'+ folderName+'/')
 .then(function(files) {
 var nameArr =0;
 for (var i=0; i<files.length; i++) {
 readdir('../first-webapp-react/image/'+folderName+'/' + files[i])
 .then(function(files) {
 nameArr++;
 var im = {};
 im[nameArr] = files;
 callback(null, im);
 })
 .catch(function(err) {
 console.log(err.message);
 });
 }
 })
 .catch(function(err) {
 console.log(err.message);
 });
 */