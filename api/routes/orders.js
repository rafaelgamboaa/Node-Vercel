const express = require('express')
const Orders = require('../models/Orders')
const router = express.Router()

router.get('/', (req, res) => {
    Orders
        .find()
        .exec()
        .then(orders => res.status(200).send(orders))
})

router.get('/:id', (req, res) => {
    Orders
        .findById(req.params.id)
        .exec()
        .then(order => res.status(200).send(order))
})

router.post('/', (req, res) => {
    Orders
        .create(req.body)
        .then(order => res.status(201).send(order))
})

router.put('/:id', (req, res) => {
    Orders
        .findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(200))
})

router.delete('/:id', (req, res) => {
    Orders
        .findOneAndDelete(req.params.id)
        .exec().then(() => res.sendStatus(204))
})

module.exports = router