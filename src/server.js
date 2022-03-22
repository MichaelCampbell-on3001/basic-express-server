'use strict';

const express = require('express');

const app = express();

app.use(express.json());
app.use(logRoute); 

// const logger = reqire('./middleware/logger.js');
// const validator = require('./middleware/validator.js');
// const handler404 = require('.error-handlers/404.js');
// const handler500 = reqire('.error-handlers/500.js');

app.use(express.json());
// app.use(logger);

// app.get('/person', validator)

// app.get("/", (req, res, next) => )

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('App is running on PORT ' + PORT);
    });
  },
};
