'use strict'

const express = require('express');
const Collection = require('../models/collection');
const schema = require('../models/product');

const model = new Collection(schema);

// const Place = require('../models/place');
// const place = new Place();

const router = express.Router();

// 1. create a schema
//RESTful routes

router.get('/place', getProduct);
router.get('/place/:_id', getOneProduct);
router.post('/place', createProduct);
router.put('/place/:_id', updateProduct);
router.delete('/place/:_id', deleteProduct);

//RESTful route handlers

async function getProduct(req, res) {
    const allPlaces = await model.get()
    res.status(200).json(allPlaces);
}

async function getOneProduct(req, res) {
    const id = req.params.id;
    await model.get(id)
    res.status(200).json(id);
}

async function createProduct(req, res) {
    console.log(req.body.name);
    const newObj = await model.create(req.body)
    res.status(200).json(newObj)
}

async function updateProduct(req, res) {
    const updateId = req.params._id;
    const updatedId = await model.update(updateId, req.body)
            res.status(200).json(updatedId)
    //maybe see if we can do async await//
}

async function deleteProduct(req, res) {
    const deleteId = req.params._id;
    await model.delete(deleteId)
            res.status(200).send('deleting product')
}

module.exports = router;