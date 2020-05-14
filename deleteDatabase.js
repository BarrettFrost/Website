const sqlite = require('sqlite3').verbose();

let db = new sqlite.Database('db.sqlite');

db.run('DROP TABLE animals', (err) =>{
    if(err){
        console.log(err.message)
    }
    console.log('Table deleted');
})

db.close();