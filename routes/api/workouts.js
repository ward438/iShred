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
    // try {

    //     let workouts = []; // todo - get from mongo
    //     res.json(workouts)
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
});

router.get('/:id', async(req, res) => {
    // res.json({})
    console.log("tester")
    let workout = await Workout.findOne({ _id: req.params.id });
    workout.exercises.push(req.body);
    res.json(workout);
    // find one category by its `id` value
    // be sure to include its associated Products
    // try {
    //     const getAllCategories = await Category.findAll({
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    //     const categories = getAllCategories.map((product) =>
    //         product.get({ plain: true })
    //     );
    //     res.json({ "categories": categories });

    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
});


router.put('/:id', async(req, res) => {
    let workout = await Workout.findOne({ _id: req.params.id });
    workout.exercises.push(req.body);
    workout.totalDuration = workout.exercises.map(exercise => exercise.duration).reduce((a, b) => a + b, 0);
    workout.save();
    res.json(workout);
});

router.delete('/:id', (req, res) => {
    res.json({})
        // delete a category by its `id` value
});

module.exports = router;