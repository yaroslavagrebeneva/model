// model.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Определение схемы
var modellSchema = new Schema({
    title: String,
    nick: {
        type: String,
        unique: true,
        required: true
    },
    avatar: String,
    desc: String,
    created: {
        type: Date,
        default: Date.now
    }
});

// Создание и экспорт модели
module.exports.Modell = mongoose.model("Modell", modellSchema);
