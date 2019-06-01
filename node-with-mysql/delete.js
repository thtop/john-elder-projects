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

    const sql = 'DELETE FROM customers WHERE id = 3'

    //const sql = 'SELECT * FROM customers'

    // Query
    con.query(sql, (err, result, fields) => {
        if (err) throw err
        console.log(result) 
    })
})

