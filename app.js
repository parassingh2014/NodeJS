
const http =  require('http')
//Events : Imp
var event = require('events')
var eventEmit = event.EventEmitter()

var funcHandler = () => {
    console.log('Event Fired')
}
eventEmit.on('eventt', funcHandler)
eventEmit.emit('eventt')

const server = http.createServer((req, res) => {
res.write()
}).listen(5000)

// or

const server2 = http.createServer()

server2.on('request', (req, res)=>{
    console.log('Request Received')
} )

//streams
