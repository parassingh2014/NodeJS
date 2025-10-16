const express = require('express')
const productData = require('../data');
const router = express.Router()

// import cc from '../data'

router.get('/', (req, res) =>{

    return res.json({success : true, data : productData.people})
})

router.post('/post', (req, res) => {
const {name} = req.body

if(!name){
    return res.status(401).json({success: false, errorMessage : 'No Name'})
}
return res.status(200).json({result : name})
})

router.post('/AddPeople', (req, res) =>{
const {name} = req.body

if(!name){
return res.status(400).json({success: false, message : `Error`})
}
res.status(201).json({success: true, data : productData.people})
})
router.put('/PutPeople/:id', (req, res) =>{
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
router.delete('/DeletePeople/:id', (req, res) =>{
    const {name} = req.body
    const {id} = req.params
var prod = productData.people.find(x=>x.id === Number(id))
if(prod){
    var DeletedProdList = productData.people.filter(x=>x.id !== Number(id))
    return res.json({success : true, data: DeletedProdList})
}
res.json({success : false, message : `Error`})
})

 module.exports = router
// export default router