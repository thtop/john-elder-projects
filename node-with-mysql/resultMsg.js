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

    // Insert 
    const sql = "INSERT INTO customers (name, email)VALUES ('The 200','the200@gmail.com')"

    // Query
    con.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
    })
})

