const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    res.render('categories.ejs')
})

router.get('/first-aid', (req, res)=> {
    res.render('categories/firstaid.ejs')
})

module.exports = router