var express = require('express');
var fs = require('fs');//file system
var file = 'data.db';
var sqlli = require('sqlite3');
var app = express();
var db = new sqlli.Database(file);
app.use(express.static('public'));






app.get('/', function (req, res) {
console.log(req);
console.log(res);
});

app.get('/pages/:id', function (req, res) {
  db.serialize(function() {
    db.all('SELECT * FROM firstscript WHERE id = '+req.params.id, function(err, all) {
      res.json(all);
    });
  });
  //db.close();
});

app.get('/pages', function (req, res) {
  db.serialize(function() {
    db.all('SELECT * FROM firstscript', function(err, all) {
      res.json(all);
    });
  });
  //db.close();
});

app.listen(8080, function () {
  console.log('Turn on');

});
