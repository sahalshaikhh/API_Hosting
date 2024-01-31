const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: {
        type: String, required: [true, "No image Found"]
    },
    desc: { type: String, required: true },
    category: { type: String, required: true }
})

module.exports = mongoose.model('Product', productSchema)