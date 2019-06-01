const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {

    const q = url.parse(req.url, true)
    var filename = '.' + q.pathname

    if (filename == './') { filename = './index' }

    filename = filename + ".html"

    fs.readFile(filename, (err, data) => {

        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 Not Found')
        }

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()

    })
}).listen(8080)


console.log("Server Listeing on Port 8080..." )