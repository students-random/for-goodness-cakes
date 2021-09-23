const { Schema, model } = require ('mongoose');

const flavorSchema = new Schema({
  name: { type: String },
  flavor: { type: String, required: true }
},{
  timestamps: true
})

module.exports = model('Flavor', flavorSchema);
