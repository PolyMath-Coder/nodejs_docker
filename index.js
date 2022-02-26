const express = require('express');

const routes = require('./routes/api');

//Set up express app

const app = express();

app.use('/api', routes);

//

const port = 4000;

app.listen(process.env.port || port, () => {
  console.log(`Serving is up at port ${port}`);
});
