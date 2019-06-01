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

    // Alter Table
    const sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY'

    // Query
    con.query(sql, (err, result) => {
        if (err) throw err
        console.log('Our table Has Been Altered...')
    })
})

