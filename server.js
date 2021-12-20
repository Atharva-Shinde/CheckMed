const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')


mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    res.render('main.ejs')
})

app.listen(3000)