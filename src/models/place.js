'use strict';

const mongoose = require('mongoose');
//1. make a schema
const placeSchema = mongoose.Schema({
    name: { type: String, required: true},
    type: { type: String, uppercase: true, enum: ['FOREST', 'LAKES', 'OCEAN', 'DESERT']}
}
);

// made a new entry in the database

// takes time to hit the database!
// // async code!
// ocean.save().then(() => console.log('water'));


//2. export this schema as a model
//I cna call the key whatever I way (here is is 'place')
//mongoose.model is a built in method, it says "once you have your schema you want to make a model of your schame"
//takes in two parameters, a key as a string, and my schema
//the model is then going into the collections
const placeModel = mongoose.model('place', placeSchema);

module.exports = placeModel;