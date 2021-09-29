const mongoose = require('mongoose');
const config = require('../config/default');

const pool = mongoose
	.connect(config.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.info('CONECTED TO DB SUCCESSFULLY.');
	})
	.catch((err) => {
		console.error('DB CONNECTION ERROR', err);
	});

module.exports = pool;
