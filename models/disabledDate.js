const { Schema, model } = require('mongoose');

const disabledDateSchema = new Schema ({
  year: { type: Number},
  month: { type: Number},
  day: { type: Number}
}, {
  timestamps: true
})

module.exports = model('DisabledDate', disabledDateSchema);
