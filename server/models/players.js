var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Player = new Schema(
  {
    name: String,
    position: String,
  }
);


// process.env.DB_HOST = 'mongodb://localhost/players';
// //using the environment to connect the variable
// mongoose.connect(process.env.DB_HOST);


// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://heroku_7qnkbcfj:mpqsvvh652adap0bmmqnv4okkn@ds047612.mongolab.com:47612/heroku_7qnkbcfj')


///for heroku
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/players")
//players is the collections, Player is the schema
module.exports = mongoose.model('players', Player);
