const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const indexRouter = require('./routes/index.js')
const allmedicinesRouter = require('./routes/allmedicines.js')
const categoriesRouter = require('./routes/categories.js')
const newmedicineRouter = require('./routes/newmedicine.js')


mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))
app.use('/', indexRouter)
app.use('/all-medicines', allmedicinesRouter)
app.use('/categories', categoriesRouter)
app.use('/new-medicine', newmedicineRouter)

app.listen(3000)