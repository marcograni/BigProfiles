var fs = require('fs'),
  JSONStream = require('JSONStream'),
  es = require('event-stream');
  var jsonfile = require('jsonfile');


var i=1;
var getStream = function () {
    var jsonData = '/home/marco/ProgettoAgiw/my_backup/*.json',
        stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
        parser = JSONStream.parse('*');
        return stream.pipe(parser);
};

 getStream()
  .pipe(es.mapSync(function (data) {

    if (data.url!=undefined) {
      var dir = '/home/marco/ProgettoAgiw/Progetto3/pages/'+data.Name_Surname.toLowerCase().split(' ').join('_')+'';

      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);

      }
      console.log(data.Name_Surname)
      console.log(data.url)
      //console.log(data.html)

      var file = dir+'/'+data.Name_Surname.toLowerCase().split(' ').join('_')+[i]+'.json';
      var newpage={
        url:data.url,
        html:data.html
      }
          jsonfile.writeFile(file, newpage, function (err) {

              console.log(i);
         }) // Show the HTML for the Google homepage.

      i++;
    }
    ;

  }));
