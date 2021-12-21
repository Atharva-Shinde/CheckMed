const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const indexRouter = require('./routes/index.js')
const searchRouter = require('./routes/search.js')
const categoriesRouter = require('./routes/categories.js')


mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))
app.use('/', indexRouter)
app.use('/search', searchRouter)
app.use('/categories', categoriesRouter)

app.listen(3000)