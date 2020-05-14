const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
var db = require("./database.js")

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.get("/api/animals", (req, res, next) => {
    var sql = "select * from animals"
    var params = []
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