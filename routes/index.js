const router = require('express').Router();
const workoutApi = require('./api/workouts');

router.use('/api/workouts', workoutApi);


module.exports = router;