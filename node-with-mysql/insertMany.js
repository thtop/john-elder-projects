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

    const sql = 'INSERT INTO customers (name, email) VALUES ?'

    // Insert many
    const values = [
        ['Tim', 'tim@hotmail.com'],
        ['Tina', 'tina@tina.com'],
        ['Laura', 'laura@laura.com']
    ]

    // Query
    con.query(sql, [values], (err, result) => {
        if (err) throw err
        console.log(`Records Inserted: ${result.affectedRows}`)
    })
})

