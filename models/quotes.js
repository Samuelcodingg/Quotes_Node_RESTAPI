const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            require: true,
            maxlength: 50
        },
        content: {
            type: String,
            require: true,
            maxlength: 200
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('quote', quoteSchema);