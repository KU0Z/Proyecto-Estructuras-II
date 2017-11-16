var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    userName: String,
    password: String,
  });
  module.exports = mongoose.model('Usuario', UsuarioSchema);