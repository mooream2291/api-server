'use strict'

const express = require('express');
const Collection = require('../models/collection');
const schema = require('../models/place');

const model = new Collection(schema);

// const Place = require('../models/place');
// const place = new Place();

const router = express.Router();

// 1. create a schema
//RESTful routes

router.get('/place', getPlace);
router.get('/place/:_id', getOnePlace);
router.post('/place', createPlace);
router.put('/place/:_id', updatePlace);
router.delete('/place/:_id', deletePlace);

//RESTful route handlers

async function getPlace(req, res) {
    const allPlaces = await model.get()
    res.status(200).json(allPlaces);
}

async function getOnePlace(req, res) {
    const id = req.params.id;
    await model.get(id)
    res.status(200).json(id);
}

async function createPlace(req, res) {
    console.log(req.body.name);
    const newObj = await model.create(req.body)
    res.status(200).json(newObj)
}

async function updatePlace(req, res) {
    const updateId = req.params._id;
    const updatedId = await model.update(updateId, req.body)
            res.status(200).json(updatedId)
    //maybe see if we can do async await//
}

async function deletePlace(req, res) {
    const deleteId = req.params._id;
    await model.delete(deleteId)
            res.status(200).send('deleting place')
}

module.exports = router;