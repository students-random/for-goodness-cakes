const { Schema, model } = require ('mongoose');

const announcementSchema = new Schema({
  name: { type: String },
  paragraph1: { type: String, required: true },
  paragraph2: { type: String},
  paragraph3: { type: String}
},{
  timestamps: true
})

module.exports = model('Announcement', announcementSchema);
