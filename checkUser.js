var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/model2024")
var User = require("./models/user.js").User
var first_user = new User({
username: "Bella",
password: "qwerty"
})
first_user.save();
