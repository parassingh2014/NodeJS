//Built in modules
//OS, PATH, FS, HTTP

//Documentation:
// https://nodejs.org/api/all.html
// https://www.w3schools.com/nodejs/nodejs_modules.asp
// npmjs.com
//bootstap https://www.npmjs.com/package/bootstrap

//npm init for installing of npm package
//npm install lodash

//differnce between async - run all together one offloads and sync : wait for one and then next run approach
//HTTP modules : Creating own server and set up API's
// const http = require('http')

// const server = http.createServer((req, res) => {
// res.write("API Page")
// if(req.url === '/about'){
//     res.end('Other Page')
// }
// res.end()
// })

// server.listen(5000)

//npm run any script from package.json
//npm install any package   -D for dev       npm init -y for package.json file



// const { Console } = require('console')

// const _ = require('lodash')
// const items = [1,[2,3, 4]]
// const nwItems = _.flatMapDeep(items)

// //Package Json is important when w start sharing he project with other devs
// // for dev -D
// console.log("stor")

//express
const express = require('express')
const app = express() //invoking
const path = require('path')

// app.get('/', (req, res) =>{
//     res.send('Hello World')
// })
//static built in middleware
app.use(express.static('./public'))
app.listen(5000,()=>{
    console.log("server is running on port 5000")
}) //callback function
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, ''))
    //res.send('Home Page')
})
app.all('*', (req, res) => {
    res.status(404).send('Not found')
})
//app.get and many more

//API vs SSR:
//API: Application Programming Interface, SSR: Server side rendering
//Json
