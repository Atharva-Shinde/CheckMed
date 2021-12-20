const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    res.render('main.ejs')
})