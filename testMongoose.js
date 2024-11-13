const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Model = mongoose.model('Model', { name: String });
const modeling = new Model({ name: 'Monica Belucci' });
modeling.save().then(() => console.log('Smile!'));