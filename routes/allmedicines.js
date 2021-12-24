const express = require('express')
const router = express.Router()
const Medicine = require('./../models/medicinesSchema.js')

router.get('/', async(req, res)=> {
    let medicines = await Medicine.find()
    res.render('allmedicines', {medicines: medicines})
})

router.post('/', async(req,res)=>{
    let medicine = new Medicine({
        name: req.body.name,
        usedfor: req.body.usedfor,
        category: req.body.category,
    })
    try{
        medicine = await medicine.save()
        res.redirect('/all-medicines')
    }
    catch(e){
        console.log(e)
        res.render('/newmedicine')
    }
})

module.exports = router