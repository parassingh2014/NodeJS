const express = require('express')
const router = express.Router()
const data = require('../data')

router.get('/', (req, res) => {
    res.status().json({success : true, data : data.movies})
})
module.exports = router