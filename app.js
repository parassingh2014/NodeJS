const express = require('express')
const people = require('./routes/people')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()
app.use(express.static('./content'))

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use('/api/people', people)

app.post('/doAction', (req, res)=>{
    const {name} = req.body;
    if(!name){
       return res.status(401).send('No Name Entered')
    }
    return res.status(200).send(`Welcome ${name}`)
// console.log(req.body)
// console.log(req.body.name)
//     res.send(req.body.name)
})

app.listen(5000, () =>{
    console.log('Server has started')
})