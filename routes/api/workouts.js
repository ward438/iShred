const router = require('express').Router();
// const { Resistance } = require('../../models/resistance');
// const { CardioSchema } = require('../../models/cardio');
const Workout = require('../../models/workouts');
const mongoose = require('mongoose');
const { request } = require("express");

router.post('', async(req, res) => {
    let workout = new Workout({ day: new Date(), exercises: [] });
    workout.save(function(err) {
        if (err) return handleError(err);
        res.json(workout)
    });
});

router.get('/range', async(req, res) => {
    let workout = await Workout.find({});
    res.json(workout);


});

router.get('/', async(req, res) => {
    Workout.find({}, function(err, items) {
        res.json(items);
    });

});





router.put('/:id', async(req, res) => {
    let workout = await Workout.findOne({ _id: req.params.id });
    workout.exercises.push(req.body);
    workout.totalDuration = workout.exercises.map(exercise => exercise.duration).reduce((a, b) => a + b, 0);
    workout.save();
    res.json(workout);
});



module.exports = router;