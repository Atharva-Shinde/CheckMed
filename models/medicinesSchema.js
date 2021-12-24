const mongoose = require('mongoose')
const medicinesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    usedfor:{
        type:String
    },
    // category:{
    //     type:String,
    //     required:true
    // },

})

// the module's schema is exported as the name Article
module.exports = mongoose.model('Medicine', medicinesSchema)