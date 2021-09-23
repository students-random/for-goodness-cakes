const { Schema, model } = require ('mongoose');

const orderSchema = new Schema({
	selectedDate: { type: String, required: true},
	orderType: { type: String, required: true},
	flavor: { type: String, required: true},
	ideas: { type: String},
	allergies: { type: String}
},{
  timestamps: true
})

module.exports = model('Order', orderSchema);
