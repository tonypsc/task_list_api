const service = require('./service');
const errorHandling = require('../../error/errorHandling');

const taskController = {
	async getTasks(req, res) {
		try {
			const data = await service.get();
			res.json({ status: 'success', data });
		} catch (error) {
			const errors = errorHandling.processError(error);
			res.status(400).json({ status: 'error', errors: errors });
		}
	},
	async addTask(req, res) {
		try {
			const data = await service.insert(req.body.task);
			res.json({ status: 'success', data });
		} catch (error) {
			const errors = errorHandling.processError(error);
			res.status(400).json({ status: 'error', errors: errors });
		}
	},
};

module.exports = taskController;
