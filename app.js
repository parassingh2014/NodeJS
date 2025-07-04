const express = require('express')
const productData = require('./data')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()


app.use(logger)

app.get('/', (req, res) => {

    res.send('Home')
})

app.listen(5000, () =>{
    console.log('Server has started')
})