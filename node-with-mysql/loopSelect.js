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

    const sql = 'SELECT * FROM customers'

    // Query
    con.query(sql, (err, result, fields) => {
        if (err) throw err

        // for(let i = 0; i < result.length; i++) {
        //     console.log(`${result[i].name} | ${result[i].email}`)
        // }

        const data = result.map(({name, email}) => {
            return `Name: ${name} Email: ${email}`
        })
        
        console.log(data)
    })
})

