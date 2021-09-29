const model = require('./model');
const CustomError = require('../../error/CustomError');

module.exports = {
	async get() {
		return model.find().lean();
	},

	async insert(description) {
		const newItem = new model({ description });
		return newItem.save();
	},
};
