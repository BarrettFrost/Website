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
            weight TEXT,
            desc TEXT,
            class VARCHAR(20), 
            CONSTRAINT name_unique UNIQUE (name)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO animals (name, length, image, extinct, weight, desc, class) VALUES (?,?,?,?,?,?,?)'
                db.run(insert, ["Sauroposiden", 34, "./png/Sauroposiden.png", "100.5 million years ago", "60 tonnes", "Tallest animal ever", "reptile"])
                db.run(insert, ["Blue whale", 30, "./png/Blue-whale.png", "present", "200 tonnes", "Largest animal ever", "mammal" ])
                db.run(insert, ["Spinosaurus", 18, "./png/Spinosaurus.png", "72.1 million years ago", "7.5 tonnes", "Largest land carnivore ever", "reptile" ])
                db.run(insert, ["Megalodon", 18, "./png/megalodon.png", "3.6 million years ago", "60 tonnes", "Largest shark ever", "fish" ])
                db.run(insert, ["Leedsichthys", 22, "./png/Leedsichthys.png", "3.6 million years ago", "45 tonnes", "Largest fish ever", "fish" ])
                db.run(insert, ["Argentinosaurus", 40, "./png/argentinosaurus.png", "89.6 million years ago", "100 tonnes", "Largest land animal ever", "reptile" ])
                db.run(insert, ["Indricotherium", 7.4, "./png/Indricotherium.png", "23 million years ago", "11 tonnes", "Largest land mammal ever", "mammal" ])
                db.run(insert, ["Andrewsarchus", 5, "./png/Andrewsarchus.png", "36 million years ago", "1 tonnes", "Largest land carnivorous mammal ever", "mammal" ])
                db.run(insert, ["Shastasaurus", 22, "./png/shastasaurus.png", "201.3 million years ago", "68 tonnes", "Largest carnivorous ever", "reptile" ])
                db.run(insert, ["Quetzalcoatlus", 10, "./png/quetzalcoatlus.png", "66 million years ago", "250 kg", "Largest flying animal ever", "reptile" ])
                db.run(insert, ["elephant bird", 3, "./png/elephant bird.png", "1000 CE", "860 kg", "Largest bird ever", "bird" ])
                db.run(insert, ["Colossal squid", 14, "./png/Colossalsquid.png", "present", "500 kg", "Largest invertabrate ever", "Cephalopoda" ])
            }
        });  
    }
});


module.exports = db
