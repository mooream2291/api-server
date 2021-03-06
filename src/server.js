'use srtict';
//IF you can connect to work on local host, do that over mongo atlas because it's better (not sure why but it is lol)
// bring in dependencies
// npm i to install them
//lets us access our env variables
require('dotenv').config();
const express = require('express');
//to initialize
const app = express();
//mongoos is a library that wraps mongo and gives us built in methods that makes it easier for us to interact with mongo
const mongoose = require('mongoose');
//require middleware

//bringing in out model (our object constructor factory)
const collectionModel = require('./models/collection.js');
//this allows us to utilize out factory so that we can create a new instance
//now we creste out doStuff async function

const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const placeRoute = require('./routes/product');

const PORT = process.env.PORT;
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true};
//this is how we connect to the mongoos URI which is stored in our env file and allows to utilize all options
mongoose.connect(process.env.MONGOOSE_URI, mongoOptions);

//create an async funtion, this is where we want to start using our database, I will first need to make a scheema and create a name for my database
//schema creates the structure we want to look like in our collection (array of objects), and to say waht is required

  //save into collection

//express global middleware
app.use(express.json());
//our own global middleware
// app.use(logger);
app.use(placeRoute);

//error handlers
app.use('*', notFoundHandler);
app.use(serverError);

//export
module.exports = {
    server: app,
    start: port => {
        if (!port) { throw new Error("missing port"); }
        app.listen(port, () => console.log(`Listening on ${port}`));
    },
};

