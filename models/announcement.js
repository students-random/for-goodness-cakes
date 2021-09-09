const { Schema, model } = require ('mongoose');

const announcementSchema = new Schema({
name: { type: String, required: true, unique: true },
body: { type: String, required: true, unique: true }
},{
  timestamps: true
}) 

module.exports = model('Announcement', announcementSchema);
