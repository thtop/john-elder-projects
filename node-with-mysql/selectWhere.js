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

    //const sql = 'SELECT * FROM customers WHERE id = 1'
    //const sql = 'SELECT * FROM customers WHERE id > 2'
    //const sql = 'SELECT * FROM customers WHERE id <= 4'

    // const name = 'Commander Lexa'
    // const sql = `SELECT * FROM customers WHERE name = '${name}'`

    const name2 = 'la'
    const sql = `SELECT * FROM customers WHERE name LIKE '%${name2}%'`

    // Query
    con.query(sql, (err, result, fields) => {
        if (err) throw err
        console.log(result) 
    })
})

