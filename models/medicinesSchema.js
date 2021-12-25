const mongoose = require('mongoose')
const medicinesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    usedfor:{
        type:String
    },
    categories:{
        type:String,
        required: true,
        enum:['PAINKILLER', 'FEVER', 'COLD']
    },

})

// the module's schema is exported as the name Article
module.exports = mongoose.model('Medicine', medicinesSchema)