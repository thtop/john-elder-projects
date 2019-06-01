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

    // Insert data
    const name = 'Clarke Griffin'
    const email = 'clarke@gmail.com'

    const sql = `INSERT INTO customers (name, email) VALUES ('${name}', '${email}')`

    // Query
    con.query(sql, (err, result) => {
        if (err) throw err
        console.log('Data Insert Into Table...')
    })
})

