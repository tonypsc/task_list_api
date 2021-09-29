const express = require('express');
const taskRoutes = require('../components/tasks/routes');

const router = express.Router();

router.use('/tasks', taskRoutes);

router.all('*', (req, res) => {
	res.sendStatus(404);
});

module.exports = router;
