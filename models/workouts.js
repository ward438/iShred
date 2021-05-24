const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        required: true,
    },
    exercises: {
        type: [mongoose.Schema.Types.Mixed]
    },
    totalDuration: {
        type: Number,
        required: false,
        defaultValue: 0
    },
    duration: {
        type: Number,
        defaultValue: 0
    }
});


// totalDuration: "Total Workout Duration",
//         numExercises: "Exercises Performed",
//         totalWeight: "Total Weight Lifted",
//         totalSets: "Total Sets Performed",
//         totalReps: "Total Reps Performed",
//         totalDistance: "Total Distance Covered"

module.exports = mongoose.model('Workout', workoutSchema);