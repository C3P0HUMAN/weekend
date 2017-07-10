var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res) {
  knex.raw(`select * from dogs_table`).then(function(dogs){
    console.log(dogs);
    res.send(dogs.rows);
  });
});

router.get('/:id', function(req, res) {
  knex.raw(`select * from dogs_table where id= ${req.params.id}`).then(function(dogs) {
    res.send(dogs.rows[0]);
  });
});

router.post('/', function(req, res) {
  knex.raw(`insert into dogs_table(dog_breed, dog_name, dog_weight) values('${req.body.dog_breed}', '${req.body.dog_name}','${req.body.dog_weight}')`).then(function(){
    knex.raw(`select * from dogs_table`).then(function(dogs){
        res.send(dogs.rows);
      });
    });
});

router.patch('/:id', function(req, res) {
  knex.raw(`update dogs_table
    set dog_breed= '${req.body.dog_breed}',
    dog_name='${req.body.dog_name}',
    dog_weight='${req.body.dog_weight}'
    where id= ${req.params.id}`)
    .then(function(){
      knex.raw(`select * from dogs_table`).then(function(dogs){
          res.send(dogs.rows);
        });
  });
});

router.delete('/:id', function(req, res, next){
  knex.raw(`delete from dogs_table where id= ${req.params.id}`).then(function(dogs){
    knex.raw(`select * from dogs_table`).then(function(dogs){
      res.send(dogs.rows);

    });
  });
});

module.exports = router;
