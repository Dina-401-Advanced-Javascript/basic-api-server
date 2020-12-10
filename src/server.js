'use strict'

const express = require('express');
const app = express();
const notFoundError = require('./error-handlers/404');
const internalServerError = require('./error-handlers/500');
const logger = require('./middleware/logger');

app.use(logger);
app.get('/demo', (req,res) => {
    res.status(200).send('OK');
})

app.use('*',notFoundError);
app.use(internalServerError);

module.exports = {
    server: app,
    start: (port) => {
        if (!port) {
            throw new Error('No port provided');
        }
        app.listen(port, () => {
            console.log('Server up on port ' + port)
        });
    }
}