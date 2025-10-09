app.get('/', (req, res) => {

    res.send('Home <a href="/api/products">Prod</a>')
})
app.get('/api/products/:productId', (req, res) => {

const {productId} = req.params 
console.log(req.params)
const singleProd = productData.find(x=>x.id == Number(productId))

if(!singleProd){
    return res.status(400).send('No Product Found')
}
// if(productData.length < 1){
//     return res.json({success : true, data : []})
// }
return res.json(singleProd)

})

app.listen(5000, () =>{
    console.log('Server has started')
})