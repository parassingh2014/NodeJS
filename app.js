const express = require('express')
const productData = require('./data')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()
app.use(express.static('./content'))

app.use(express.urlencoded({extended: false}))


app.get('/api/people', (req, res) =>{

    res.json({success : true, data : productData.people})


})
app.post('/doAction', (req, res)=>{
console.log(req.body)
console.log(req.body.name)
    res.send(req.body.name)
})

app.listen(5000, () =>{
    console.log('Server has started')
})