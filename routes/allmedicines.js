const express = require('express')
const router = express.Router()


router.get('/', (req, res)=> {
    res.render('allmedicines.ejs')
})

module.exports = router