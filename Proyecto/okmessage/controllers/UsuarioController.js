var mongoose = require("mongoose");
var Usuario = require("../models/Usuario");
var edge = require('edge');
var Variable = edge.func({
    assemblyFile: "Dll/Cifrado.dll",
    typeName: "Cifrado.SDES",
    methodName: "cifrado"
  });

//var localstorage = require('localstorage');
//var moment = require('moment');
//var jwt = require('jwt-simple');
//var jwtDecode = require('jwt-decode');
var usuarioController = {};

/*function createToken(){

  var something = {
    userName: req.body.userName,
    password: req.body.password,
    Init: moment.Init(),
    Time: moment().unix().add(10, 'm'),
  }
  var token = jwt.encode(something, 'HEYSOULSISTER');
  console.log(token);
  return token;
}

function ValidateToken(token)
{
  var timeToken = jwtDecode(token, 'HEYSOULSISTER').Time;
  var actualDate = moment.unix();

  if(actualDate > timeToken)
  {
    return false;
  }else{
    return true; 
  }

}*/


usuarioController.create = function(req, res){
    res.render("../views/usuarios/create");

};

usuarioController.save = function(req, res) {
    //var usuario = new Usuario(req.body);
    var _result = "";
    var exist= Usuario.find({userName: req.body.userName});
   // if(exist){
        Variable(req.body.password, function (error, result) {
            if(error) throw error;
             console.log(result);
             _result = result; 
         });
        var pass = new Usuario({userName: req.body.userName,
        password: _result,});
        pass.save(function(err) {
          if(err) {
            console.log(err);
            res.render("../views/usuarios/create", { status: 'Usuario ya existe' });
          } else {
            console.log("Successfully created an user.");
            res.redirect("../");
          }
        });     
    //}
    //else{
      //  res.redirect('back');  
    //}  
  };


module.exports = usuarioController;