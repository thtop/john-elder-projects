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

    const updateName = 'The 300'
    const sql = `UPDATE customers SET name = '${updateName}' WHERE id = 8`

    // Query
    con.query(sql, (err, result, fields) => {
        if (err) throw err
        console.log(result) 
    })
})

