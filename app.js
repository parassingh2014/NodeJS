
//streams
// Read, write duplex, transform (Data sequencely like JSON)

var {createReadStream} = require('fs')
var http = require('http')

var serv = http.createServer((req, res)=>{
    var rs = createReadStream('./content/first.txt')
        rs.on('open', (result) => {
            res.end(result)
        })
    var rs = createReadStream('./content/first.txt')
        rs.on('error', (err) => {
            res.end(err)
        })
})

serv.listen(5000)