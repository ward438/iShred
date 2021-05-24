const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        min: 1,
        max: 60,
        required: true
    },
    duration: {
        type: Number,
        min: 1,
        max: 600,
        required: true
    }

});

module.exports = mongoose.model('CardioSchema', CardioSchema);