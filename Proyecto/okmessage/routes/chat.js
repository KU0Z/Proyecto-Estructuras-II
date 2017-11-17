module.exports = function(io){
    var express = require('express');
    var router = express.Router();
    var mongo=require('mongoose');

    
    var messages = [{
      id: 1,
      text: "Hola soy un mensaje",
      author: "Carlos Azaustre"
    }];
    router.get('/', function(req, res){
        io.on('connection', function(socket) {
            console.log('Alguien se ha conectado con Sockets');
            socket.emit('messages', messages);
          
            socket.on('new-message', function(data) {
              messages.push(data);
          
              io.sockets.emit('messages', messages);
            });
          });
    
      res.render('chat' );
    });
    
return router
} ;
