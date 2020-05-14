var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(
            `CREATE TABLE animals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE, 
            length INTEGER,
            image TEXT, 
            extinct TEXT, 
            CONSTRAINT name_unique UNIQUE (name)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO animals (name, length, image, extinct) VALUES (?,?,?,?)'
                db.run(insert, ["Sauroposiden", 34, "./png/Sauroposiden.png", "yes"])
                db.run(insert, ["Blue whale", 30, "./png/Blue-whale.png", "no"])
            }
        });  
    }
});


module.exports = db
