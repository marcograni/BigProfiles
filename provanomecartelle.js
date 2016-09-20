var fs = require('fs'),
  JSONStream = require('JSONStream'),
  es = require('event-stream');
  var jsonfile = require('jsonfile');
    var async = require('async');


var i=1;

var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

         results.push(file);

    });

    return results;

};

var a=_getAllFilesFromFolder("/home/marco/ProgettoAgiw");
console.log(a);
