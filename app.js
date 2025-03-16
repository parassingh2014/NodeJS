//Built in modules
//OS, PATH, FS, HTTP

//Documentation:
// https://nodejs.org/api/all.html
// https://www.w3schools.com/nodejs/nodejs_modules.asp
// npmjs.com




//differnce between async - run all together one offloads and sync : wait for one and then next run approach
//HTTP modules : Creating own server and set up API's
const http = require('http')

const server = http.createServer((req, res) => {
res.write("API Page")
res.end()
})

server.listen(5000)

//npm

