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

    const nameSearch = 'la%'
    const idSearch = 1
    const sql = `SELECT * FROM customers WHERE name LIKE ? OR id = ?`

    // Query
    con.query(sql, [nameSearch, idSearch], (err, result, fields) => {
        if (err) throw err
        console.log(result) 
    })
})

