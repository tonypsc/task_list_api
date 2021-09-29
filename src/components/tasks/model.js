const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
	description: {
		type: String,
		trim: true,
		required: [true, 'Description is required.'],
	},
});

module.exports = mongoose.model('task', taskSchema);
