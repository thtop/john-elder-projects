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
    console.log('Connected to the Database!')

    // const name = 'la'
    // const sql = `SELECT * FROM customers WHERE name LIKE '%${name}%' OR id = 1`

    const name = 'xa'
    const sql = `SELECT * FROM customers WHERE name LIKE '%${name}%' and id = 1`


    // Query
    con.query(sql, (err, result, fields) => {
        if (err) throw err
        console.log(result) 
    })
})

