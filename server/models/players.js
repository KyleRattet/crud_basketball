var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Player = new Schema(
  {
    name: String,
    position: String,
  }
);


process.env.DB_HOST = 'mongodb://localhost/players';
//using the environment to connect the variable
mongoose.connect(process.env.DB_HOST);


//players is the collections, Player is the schema
module.exports = mongoose.model('players', Player);
