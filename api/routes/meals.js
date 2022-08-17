const express = require('express')
const Meals = require('../models/Meals')
const router = express.Router()

router.get('/', (req, res) => {
    Meals
        .find()
        .exec()
        .then(orders => res.status(200).send(orders))
})

router.get('/:id', (req, res) => {
    Meals
        .findById(req.params.id)
        .exec()
        .then(order => res.status(200).send(order))
})

router.post('/', (req, res) => {
    Meals
        .create(req.body)
        .then(order => res.status(201).send(order))
})

router.put('/:id', (req, res) => {
    Meals
        .findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(200))
})

router.delete('/:id', (req, res) => {
    Meals
        .findOneAndDelete(req.params.id)
        .exec().then(() => res.sendStatus(204))
})

module.exports = router