var mongoose = require('mongoose');

var food = mongoose.Schema({
    dataId: Number,
    name: String,
    price: Number,
    expired_date: Date
});

var Food = mongoose.model('food', food)
module.exports = Food
