const express = require('express')
const productData = require('./data')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()
app.use(express.static('./content'))

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/api/people', (req, res) =>{

    return res.json({success : true, data : productData.people})


})

app.post('/api/AddPeople', (req, res) =>{
const {name} = req.body

if(!name){
return res.status(400).json({success: false, message : `Error`})
}
res.status(201).json({success: true, data : productData.people})
})
app.put('/api/PutPeople/:id', (req, res) =>{
    const {name} = req.body
    const {id} = req.params
var prod = productData.people.find(x=>x.id === Number(id))
if(prod){
      var UpdatedProd = productData.people.map(p => {
p.name = name
return p
    })
    return res.json({success : true, data: UpdatedProd})
}
res.json({success : false, message : `Error`})
  
})
app.delete('/api/DeletePeople/:id', (req, res) =>{
    const {name} = req.body
    const {id} = req.params
var prod = productData.people.find(x=>x.id === Number(id))
if(prod){
    var DeletedProdList = productData.people.filter(x=>x.id !== Number(id))
    return res.json({success : true, data: DeletedProdList})
}
res.json({success : false, message : `Error`})
})

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