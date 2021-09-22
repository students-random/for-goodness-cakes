const { Schema, model } = require ('mongoose');

const calendarSchema = new Schema({
  date: { type: String, required: true, unique: true },
  created_at: { type: Date, required: true, unique: true }
},{
  timestamps: true
})

module.exports = model('Calendar', calendarSchema);
