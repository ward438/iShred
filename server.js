const path = require('path');
const connect = require('connect');
// const SessionStore = require("session-mongoose")(connect);

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
// const db = require("./models")
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();
// const session = require("express-session")
// const FileStore = require('session-file-store')(session);


// app.use(express.session({
//     store: store,
//     cookie: { maxAge: 900000 } // expire session in 15 min or 900 seconds
// }));

// app.use(compression());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);




mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connection Successfull'))
    .then(() => {
        // const Workout = require('./models/workouts');
        // Workout.find({}, function(err, workouts) {
        //     console.log(workouts.length)
        //     console.log(workouts)
        //     console.log(workouts[0])


        // })
    })

.catch((err) => {
    console.error(err);


});
// mongoose.connection.on('error', err => {
//     console.log('DB Connection Error; ${err.message}')
// })

// app.use(session({
//     store: new FileStore({ path: path.join(__dirname, 'sessions') })
// }))

app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`);
});