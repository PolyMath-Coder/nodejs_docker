const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// Get a list of Ninjas from the Database
router.get('/ninja', (req, res) => {
  res.send({ type: 'GET' });
});

//Add a new ninja to the db.
router.post('/ninja', (req, res, next) => {
  Ninja.create(req.body)
    .then((ninja) => res.send(ninja))
    .catch(next);
});

//Update a ninja in the Database
router.put('/ninja/:id', (req, res) => {
  const options = { new: true };
  Ninja.findByIdAndUpdate({ _id: req.params.id }, options, req.body).then(
    (ninja) => {
      res.send(ninja);
      console.log(ninja);
    }
  );
  //   res.send({ type: 'UPDATE' });
});

//Delete a ninja from the Database
router.delete('/ninja/:id', (req, res) => {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then((ninja) => {
    console.log(ninja);
  });
  //   console.log(req);
  //   res.send({ type: 'DELETE' });
});

module.exports = router;
