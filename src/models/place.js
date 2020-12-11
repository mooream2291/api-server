'use strict';

const mongoose = require('mongoose');

//1. make a schema
const placeSchema = mongoose.Schema({
    name: { type: String, required: true},
    type: { type: String, uppercase: true, enum: ['FOREST', 'LAKES', 'OCEAN', 'DESERT']}
}
);

// made a new entry in the database
// const ocean = new Beach({ name: 'Santa Cruz' });

// takes time to hit the database!
// // async code!
// ocean.save().then(() => console.log('water'));
//2. export this schema as a model
const placeModel = mongoose.model('place', placeSchema);

module.exports = placeModel;