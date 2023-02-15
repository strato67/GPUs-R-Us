const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        default: 0
    }

});


module.exports = mongoose.model('Product', productSchema);