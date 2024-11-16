const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Model = require('./models/model').Model;

var model = new Model({
    title: "Bella Hadid",
    nick: "bellahadid",
})


model.save();