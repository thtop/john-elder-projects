const mysql = require('mysql')

// Create a connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

// Connect to MySQL
con.connect( err => {
    if (err) throw err;
    console.log('Connected to the Database!')

    // SQL
    const sql = 'CREATE DATABASE nodeDB2'

    con.query(sql, (err, result) => {
        if (err) throw err
        console.log('Database Created!')
    })
})