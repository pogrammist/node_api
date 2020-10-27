const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
}, { versionKey: false });

mongoose.model('Product', ProductSchema);