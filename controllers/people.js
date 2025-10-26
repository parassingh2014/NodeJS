const productData = require('../data')
const getPeople = (req, res) =>{
     return res.json({success : true, data : productData.people})
}

module.exports = {getPeople}