var express = require('express');
var router = express.Router();
let Restaurant = require("../models/restaurantsSchema");
const methods = {}

methods.showAllData = function (req, res) {
    Restaurant.find()
        .then(function (result) {
            res.send(result)
        });
};

methods.showOneData = function (req, res) {
    Restaurant.find({
            dataId: req.params.dataId
        })
        .then(function (result) {
            res.send(result)
        });
};

methods.createRestaurant = function (req, res) {
    Restaurant.find()
        .then(function (result) {
            let restaurant = new Restaurant({
                dataId: result.length + 1,
                name: req.body.name,
                owner: req.body.owner,
                address: req.body.address,
                open_status: req.body.open_status
            });

            restaurant.save(function (err, respond) {
                if (err) return console.error(err);
                res.send(restaurant)
            });
        });
};

methods.updateRestaurant = function (req, res) {
    Restaurant.findOneAndUpdate({
        dataId: req.params.dataId
    }, {
        $set: {
            name: req.body.name,
            owner: req.body.owner,
            address: req.body.address,
            open_status: req.body.open_status
        }
    }, {
        new: true
    }, function (err, tank) {
        if (err) return res.send(err.message);
        res.send(tank);
    });
};

methods.deleteRestaurant = function (req, res) {
    Restaurant.findOneAndRemove({
        dataId: req.params.dataId
    }, function (err, Restaurant) {
        var response = {
            message: `Restaurant with dataId ${req.params.dataId} successfully deleted`,
            id: Restaurant._id
        };
        res.send(response);
    });
};

module.exports = methods
