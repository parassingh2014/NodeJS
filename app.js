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
})
app.all('*', (req, res) => {
    res.status(404).send('Not found')
})
//app.get and many more

//API vs SSR:
//API: Application Programming Interface, SSR: Server side rendering
//Json
