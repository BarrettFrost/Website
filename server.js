const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
var db = require("./database.js")
var https = require('https')
var fs = require('fs')


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'))

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
},app).listen(port, () => console.log(`Example app listening on port ${port}!  goto https://localhost:8080`));


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

app.get("/api/update/:name/:length", (req, res, next) => {
  console.log("hello")
  const nameToFind = req.params.name;
  const lengthToSet = req.params.length;
  var sql = 'UPDATE  animals SET length = $length WHERE name = $name'
  var params = {$name: nameToFind, $length: lengthToSet};
  var letters = /^[a-zA-Z]+$/;
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }    
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
