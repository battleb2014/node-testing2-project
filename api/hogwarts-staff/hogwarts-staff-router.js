const express = require('express');
const router = express.Router();
const HogwartsStaff = require('./hogwarts-staff-model');

router.get('/', (req, res, next) => {
    res.status(200).json
})

router.get('/:id', (req, res, next) => {

})

router.post('/', (req, res, next) => {

})

module.exports = router;