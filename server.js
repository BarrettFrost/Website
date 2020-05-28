const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
var db = require("./database.js")


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.get("/api/animals", (req, res, next) => {
    var sql = "select * from animals ORDER BY length DESC"
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "data":rows
        })
      });
});

app.get("/api/animals/:class", (req, res, next) => {
  const classToFind = req.params.class;
  var sql = 'select * from animals where class = $class ORDER BY length DESC'
  var params = {$class: classToFind}
  var letters = /^[a-zA-Z]+$/;
  if(!classToFind.match(letters)){
    res.status(500).send('Not a valid URL');
  }
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "data":rows
      })
    });
});

app.all('/api/animals//', function(req, res) {
  
  throw new Error("Invalid URL")
});

app.all('/api//', function(req, res) {
  throw new Error("Invalid URL")
});

app.all('//', function(req, res) {
  throw new Error("Invalid URL")
});

/*app.all('/api//', function(req, res) {
  throw new Error("Invalid URL")
});

app.all('/api/animals/*', function(req, res) {
  throw new Error("Invalid URL")
});

app.all('*', function(req, res) {
  throw new Error("Invalid URL")
});*/