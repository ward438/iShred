const path = require('path');
const connect = require('connect');
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connection Successful'))
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`);
});

//