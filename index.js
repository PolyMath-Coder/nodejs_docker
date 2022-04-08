const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoString = process.env.MONGO_URI;
const port = process.env.PORT_NUMBER;
mongoose.connect(mongoString).then(() => {
  console.log('Now connected');
});
//Set up express app

const app = express();

app.use(bodyParser.json());

app.use(cors());

const routes = require('./routes/api');

app.get('/', (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: 'Book Review: Jewel in the Savannah',
    },
    {
      id: 2,
      title: 'A walk in the park.',
    },
    {
      id: 3,
      title: 'King of Boys',
    },
  ]);
});

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
});

//

// const port = 4000;

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
