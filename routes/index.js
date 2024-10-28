var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Беллы Хадид*/
router.get('/bellahadid', function(req, res, next) {
  res.render('model', {
  title: "Bella Hadid",
  picture: "images/bella.jpg",
  desc: "Американская супермодель палестино-голландского происхождения. Является послом и постоянным лицом модных домов Dior и Bulgari. Одна из самых известных и высокооплачиваемых моделей мира.  "
  });
  });
  

  /* Страница Ирины Шейк*/
router.get('/irinashayk', function(req, res, next) {
  res.render('model', {
  title: "Irina Shayk",
  picture: "images/irina.jpg",
  desc: "Российская супермодель и актриса. Она является первой российской моделью, появившейся на обложке Sports Illustrated Swimsuit Issue. Сайт Models.com назвал её иконой модной индустрии.  "
  });
  });
  
  /* Страница Наоми Кэмпбелл*/
router.get('/naomicampbell', function(req, res, next) {
  res.render('model', {
  title: "Naomi Campbell",
  picture: "images/naomi.jpg",
  desc: "Британская супермодель, актриса и певица афроямайского и китайско-ямайского происхождения. Работает на подиумах с 15 лет. Стала первой темнокожей девушкой, появившейся на обложках французского и английского изданий журнала «Vogue» и журнала «Time». "
  });
  });



module.exports = router;
