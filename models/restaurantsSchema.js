var mongoose = require('mongoose');

var restaurant = mongoose.Schema({
    dataId: Number,
    name: String,
    owner: String,
    address: String,
    open_status: Boolean
});

var Restaurant = mongoose.model('restaurant', restaurant)
module.exports = Restaurant
