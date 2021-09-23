const { Schema, model } = require ('mongoose');

const orderSchema = new Schema({
	selectedDate: { type: String},
	orderType: { type: String, required: true},
	flavor: { type: String},
	ideas: { type: String},
	allergies: { type: String},
	name: {type: String, required: true},
	email: {type: String, required: true}
},{
  timestamps: true
})

module.exports = model('Order', orderSchema);
