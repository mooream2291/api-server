'use strict';

const mongoose = require('mongoose');
//1. make a schema
const productSchema = mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    category: { type: String, required: true},
    price: { type: Number, required: true},
    inStock: { type: Boolean, required: true}

}
);

const productModel = mongoose.model('prodcut', productSchema);

module.exports = productModel;