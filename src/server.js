'use strict';

const express = require('express');
const app = express();
require('cors');
const notFoundError = require('./error-handlers/404');
const internalServerError = require('./error-handlers/500');
const logger = require('./middleware/logger');
const artistRoutes = require('./routes/artist-routes');
const artworkRoutes = require('./routes/artwork-routes');

const mongoose = require('mongoose');
const MONGOOSE_URI = process.env.MONGOOSE_URI;//'mongodb://localhost:27017/art';
const options = {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false};
mongoose.connect(MONGOOSE_URI, options);

app.use(express.json()); //body parser
app.use(logger); //log the method and route of every request
app.use(artistRoutes); //all of the /artists routes
app.use(artworkRoutes); //all of the /artworks routes
app.use('*',notFoundError);
app.use(internalServerError);

module.exports = {
  server: app,
  start: (port) => {
    if (!port) {
      throw new Error('No port provided');
    }
    app.listen(port, () => {
      console.log('Server up on port ' + port);
    });
  }};