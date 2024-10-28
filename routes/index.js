var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Беллы Хадид*/
router.get('/bellahadid', function(req, res, next) {
  res.send("<h1>Страница Беллы Хадид</h1>")
  });

  /* Страница Ирины Шейк*/
router.get('/irinashayk', function(req, res, next) {
  res.send("<h1>Страница Ирины Шейк</h1>")
  });

 /* Страница Наоми Кэмпбелл*/
router.get('/naomicampbell', function(req, res, next) {
  res.send("<h1>Страница Наоми Кэмпбелл</h1>")
  });


module.exports = router;
