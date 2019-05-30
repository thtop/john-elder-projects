const mysql = require('mysql')

// Create a connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedb'
})

// Connect to MySQL
con.connect( err => {
    if (err) throw err;
    console.log('Connected to the Database')

    con.query("CREATE DATABESE nodeDB", (err, result) => {
        if (err) throw err
        console.log('Database Created!')
    })
})