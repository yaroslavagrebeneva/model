var express = require('express');
var router = express.Router();
var Model = require('../models/model').Model;

/* GET models listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с models');
});

/* Страница модели */
router.get("/:nick", async function(req, res, next) {
    try {
        var models = await Model.find({ nick: req.params.nick });
        console.log(models);
        if (!models.length) {
            var err = new Error("Нет такой модели.");
            err.status = 404;
            return next(err);
        }
        var model = models[0];
        res.render('model', {
            title: model.title,
            picture: model.avatar,
            desc: model.desc
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
