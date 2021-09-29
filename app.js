const express = require('express');
const logger = require('morgan');
const routes = require('./src/routes/routes');
const { error404Handler, errorHandler } = require('./src/middleware/errors');
const cors = require('cors');

// Initializations
const app = express();
const pool = require('./src/services/mongoose');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('combined'));

// Routes
app.use('/', routes);

// Error handlers
app.use(error404Handler);
app.use(errorHandler);

module.exports = app;
