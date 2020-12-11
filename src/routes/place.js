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
router.get('/place/:id', getOnePlace);
router.post('/place', createPlace);
router.put('/place/:id', updatePlace);
router.delete('/place/:id', deletePlace);

//RESTful route handlers

function getPlace(req, res) {
    const allPlaces = model.get()
    .then(result => {
        res.status(200).json(result);
    })
}

function getOnePlace(req, res) {
    const id = req.params.id;
        model.get(id)
        .then(result => {
            res.status(200).json(result);
        })
}

function createPlace(req, res) {
    console.log(req.body.name);
    const obj = req.body;
        model.create(obj)
        .then(result => {
            res.status(200).json(result)
        })
}

function updatePlace(req, res) {
    const updateId = req.params.id;
        model.update(updateId, req.body)
        .then(result => {
            res.status(200).json(result)
        })
        //maybe see if we can do async await//
}

function deletePlace(req, res) {
    const deleteId = req.params.id;
        model.delete(deleteId)
        .then(result => {
            res.status(200).send('deleting place')
        })
 }

module.exports = router;