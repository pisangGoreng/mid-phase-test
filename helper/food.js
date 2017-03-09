var express = require('express');
var router = express.Router();
const Food = require('../models/foodsSchema');
const methods = {}

methods.showAllData = function (req, res) {
    Food.find()
        .then(function (result) {
            res.send(result)
        });
};

methods.showOneData = function (req, res) {
    Food.find({
            dataId: req.params.dataId
        })
        .then(function (result) {
            res.send(result)
        });
};

methods.createFood = function (req, res) {
    Food.find()
        .then(function (result) {
            let food = new Food({
                dataId: result.length + 1,
                name: req.body.name,
                price: req.body.price,
                expired_date: req.body.expired_date
            });

            food.save(function (err, respond) {
                if (err) return console.error(err);
                res.send(food)
            });
        });
};

methods.updateFood = function (req, res) {
    Food.findOneAndUpdate({
        dataId: req.params.dataId
    }, {
        $set: {
            name: req.body.name,
            price: req.body.price,
            expired_date: req.body.expired_date
        }
    }, {
        new: true
    }, function (err, tank) {
        if (err) return res.send(err.message);
        res.send(tank);
    });
};

methods.deleteFood = function (req, res) {
    Food.findOneAndRemove({
        dataId: req.params.dataId
    }, function (err, Food) {
        var response = {
            message: `Food with dataId ${req.params.dataId} successfully deleted`,
            id: Food._id
        };
        res.send(response);
    });
};

module.exports = methods
