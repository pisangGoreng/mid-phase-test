var express = require('express');
var router = express.Router();

// req mongoose component
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/simple-api-crud');
const food = require('../helper/food')

// http://localhost:3000/food/all || GET
router.get('/all', food.showAllData);

// http://localhost:3000/food/all/1 || GET
router.get('/all/:dataId', food.showOneData);

// http://localhost:3000/food/create  || POST
router.post('/create', food.createFood);

// http://localhost:3000/food/update/:id
router.put('/update/:dataId', food.updateFood);

// http://localhost:3000/food/remove/:id
router.delete('/remove/:dataId', food.deleteFood);

module.exports = router;
