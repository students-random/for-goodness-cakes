const { Schema, model } = require ('mongoose');

const contactSubmissionSchema = new Schema({
	name: { type: String, required: true},
	email: { type: String, required: true},
	reason: { type: String, required: true}
},{
  timestamps: true
})

module.exports = model('ContactSubmission', contactSubmissionSchema);
