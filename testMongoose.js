const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })
schema.methods.smile = function(){
    console.log(this.name + " say smile")
    }
    const Model = mongoose.model('Model', schema);
    const modeling = new Model({ name: 'Monica Belucci' });
    modeling.save().then(() => modeling.smile());