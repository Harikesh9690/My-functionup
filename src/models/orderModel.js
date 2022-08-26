const mongoose = require('mongoose')

const orderschema = new mongoose.Schema({
	userId: String,
	productId: String,
	amount: {
		type: Number,
		default: 0
	},
	isFreeAppUser: Boolean,
	date: String
}, { timestamps: true })

module.exports = mongoose.model('order', orderschema)