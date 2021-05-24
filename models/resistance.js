const mongoose = require('mongoose');
const { Schema } = mongoose;

const resistanceSchema = new mongoose.Schema({
    exerciseName: {
        type: String,

        required: true

    },
    weight: {
        type: Number,
        min: 1,
        max: 500,
        required: true
    },
    sets: {
        type: Number,
        min: 1,
        max: 20,
        required: true
    },
    reps: {
        type: Number,
        min: 1,
        max: 200,
        required: true
    },
    duration: {
        type: Number,
        min: 1,
        max: 240,
        required: true
    }

});


module.exports = mongoose.model('Resistance', resistanceSchema);