const express = require('express')
const productData = require('./data')

const app = express()


app.get('/', (req, res) => {

res.send('<h2>All Products</h2> <a href="/api/AllProducts"> Prod </a> </br> <h2>Single Product</h2> <a href="/api/GetProductByID/1">Single Prod </a> ')

})

app.get('/api/AllProducts', (req, res) => {
    const data = res.json(productData)
    return data
})

app.get('/api/GetProductByID/1', (req, res) => {
    const singleProduct = res.json(productData.find(x=> x.id === 1))
    return singleProduct
})

app.get('/api/GetProductByID/:productID', (req, res) => {
    console.log(req.params)
    const id = req.params.productID
const singleProd =  productData.find(x=> x.id === Number(id))

if(singleProd){
    res.json(singleProd)
}
else{
    res.status(404).send('<h1>Not Found</h1>')
}
   //productsData.find(x=>x.ID === id)
})



app.listen(5000, () =>{
    console.log('Server has started')
})