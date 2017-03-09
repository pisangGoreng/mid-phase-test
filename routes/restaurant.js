var express = require('express');
var router = express.Router();

// req mongoose component
var mongoose = require('mongoose');
const restaurant = require('../helper/restaurant')

// http://localhost:3000/restaurant/all  || GET
router.get('/all', restaurant.showAllData);

// http://localhost:3000/restaurant/all/1 || GET
router.get('/all/:dataId', restaurant.showOneData);

// http://localhost:3000/restaurant/create  || POST
router.post('/create', restaurant.createRestaurant);

// http://localhost:3000/restaurant/update/:id
router.put('/update/:dataId', restaurant.updateRestaurant);

// http://localhost:3000/restaurant/remove/:id
router.delete('/remove/:dataId', restaurant.deleteRestaurant);

module.exports = router;
