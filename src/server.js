'use srtict';

// bring in dependencies
// npm i to install them
require('dotenv').config();
const express = require('express');
//to initialize
const app = express();
const mongoose = require('mongoose');
//require middleware
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const placeRoute = require('./routes/place');

const PORT = process.env.PORT;
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(process.env.MONGOOSE_URI, mongoOptions);

//express global middleware
app.use(express.json());
//our own global middleware
// app.use(logger);
app.use(placeRoute);

//error handlers
app.use('*', notFoundHandler);
app.use(serverError);
//this is a listener provided by mongoose
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('I am connected');
});
//export
module.exports = {
    server: app,
    start: port => {
        if (!port) { throw new Error("missing port"); }
        app.listen(port, () => console.log(`Listening on ${port}`));
    },
};

