var express = require('express');
var router = express.Router();
var usuario = require("../controllers/UsuarioController.js"); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res){
  usuario.create(req, res); 
});

router.post('/save', function(req, res){
  
  usuario.save(req, res); 
})

module.exports = router;
