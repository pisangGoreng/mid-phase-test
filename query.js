// file untuk seed data ke dalam database

// req mongoose component
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/simple-api-crud');

let Food = require("./models/foodsSchema");
let Restaurant = require("./models/restaurantsSchema");

function insertFood() {
    let food1 = new Food({
        dataId: 1,
        name: "nasi goreng",
        price: 12000,
        expired_date: "2016-03-19"
    });

    let food2 = new Food({
        dataId: 2,
        name: "nasi padang",
        price: 15000,
        expired_date: "2016-03-15"
    });

    food1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`makanan 1 berhasil dimasukkan`);
    });

    food2.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`makanan 2 sberhasil dimasukkan`);
    });
}
// insertFood()

function insertRestaurant() {
    let restaurant1 = new Restaurant({
        dataId: 1,
        name: "warung kita",
        owner: 'irwin',
        address: 'jalan selamat sentosa',
        open_status: 1
    });

    let restaurant2 = new Restaurant({
        dataId: 2,
        name: "LaPO",
        owner: 'daniel',
        address: 'jalan naik turun bukit',
        open_status: 1
    });

    restaurant1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`restaurant 1 berhasil dimasukkan`);
    });

    restaurant2.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`restaurant 2 sberhasil dimasukkan`);
    });
}

insertRestaurant()
