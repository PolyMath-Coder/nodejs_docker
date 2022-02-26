const express = require('express');

const router = express.Router();

// Get a list of Ninjas from the Database
router.get('/ninja', (req, res) => {
  res.send({ type: 'GET' });
});

//Add a new ninja to the db.
router.post('/ninja', (req, res) => {
  res.send({ type: 'POST' });
});

//Update a ninja in the Database
router.put('/ninja/:id', (req, res) => {
  res.send({ type: 'UPDATE' });
});

//Delete a ninja from the Database
router.get('/ninja/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;
