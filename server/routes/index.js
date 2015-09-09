var express = require('express');
var router = express.Router();
var Player = require('../models/players')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//(ROUTE ONE)GET request ALL PLAYERS
router.get('/players', function(req, res, next) {
  Player.find(function (err, data) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//(ROUTE TWO) GET ONE PLAYER
router.get('/player/:id', function(req, res, next) {
  Player.findById(req.params.id, function (err, data){
     if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});


//(ROUTE THREE) POST REQUEST POST ALL PLAYERS
router.post('/players', function(req, res, next) {
  newPlayer = new Player ({
    name:req.body.name,
    position: req.body.position
  })
  newPlayer.save(function (err, data) {
      if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//(ROUTE FOUR) PUT REQUEST
router.put('/player/:id', function(req, res, next) {
  var update = {
    name:req.body.name,
    position: req.body.position
  };
  Player.findByIdAndUpdate(req.params.id, update, function (err, data){
        if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//(ROUTE FIVE) DELETE REQUEST TO DELETE SINGLE PLAYER
router.delete('/player/:id', function (req, res, next) {
  Player.findByIdAndRemove(req.params.id, function (err, data) {
    if (err) {
      res.json ({'message': err});
    } else {
      res.json(data);
    }
  });
});


module.exports = router;
