// testMongoose.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Создание простой модели Model с методом smile
var schema = mongoose.Schema({ name: String });
schema.methods.smile = function() {
    console.log(this.name + " says smile");
};

const Model = mongoose.model('Model', schema);

// Создание и сохранение записи Monica Belucci
const modeling = new Model({ name: 'Monica Belucci' });
modeling.save()
    .then(() => modeling.smile())
    .catch(err => console.error("Error saving Monica Belucci:", err));

// Импорт модели Modell и добавление записи Bella Hadid
var Modell = require('./models/model.js').Modell;

var modell = new Modell({
    title: "Bella Hadid",
    nick: "bellahadid",
    avatar: "",
    desc: ""
});

// Сохранение и вывод сообщений об успешном добавлении
modell.save().then(() => console.log("Bella Hadid saved successfully"))
   
