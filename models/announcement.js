const { Schema, model } = require ('mongoose');

const announcementSchema = new Schema({
name: { type: String, required: true },
body: { type: String, required: true }
},{
  timestamps: true
})

module.exports = model('Announcement', announcementSchema);
