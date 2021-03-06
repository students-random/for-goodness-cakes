import React, { useState, useEffect } from 'react';
import emailjs, { init } from 'emailjs-com';

export default function Contact(props) {
	const [submissions, setSubmissions] = useState({});
	const [newSubmission, setNewSubmission] = useState({
		name: '',
		email: '',
		reason: ''
	});
	const [thanks, setThanks] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		sendEmail(e);
		try {
			const response = await fetch('/api/contactsubmissions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newSubmission)
			});
			const data = await response.json();
			setThanks(!thanks);
			setNewSubmission({
				name: '',
				email: '',
				reason: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = e => {
		setNewSubmission({ ...newSubmission, [e.target.id]: e.target.value });
	};

	const templateParams = {
		user_name: newSubmission.name,
		user_email: newSubmission.email,
		message: newSubmission.reason
	};
	const sendEmail = async e => {
		e.preventDefault();
		emailjs
			.send(
				'service_uy4xefh',
				'template_04kre0g',
				templateParams,
				'user_HiF2ZhDSYEd3b5ieU6zN6'
			)
			.then(
				function(response) {
					console.log('SUCCESS!', response.status, response.text);
				},
				function(err) {
					console.log('FAILED...', err);
				}
			);
	};

	return (
		<div className="ContactPage">
			{!thanks && (
				<>
					<h1>Contact Me</h1>
					<form onSubmit={handleSubmit} id="contact-form">
						<div className="row name-email-div">
							<input type="hidden" name="contact_number" />
							<div className="form-group col name-label">
								<label>Name</label>
								<input
									type="text"
									name="user_name"
									className="form-control"
									id="name"
									placeholder="Full Name"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="form-group col email-label">
								<label>Email</label>
								<input
									type="email"
									name="user_email"
									className="form-control"
									id="email"
									placeholder="name@example.com"
									required
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-group col textarea-label">
							<label>Reason for contact</label>
							<textarea
								className="form-control"
								type="text"
								name="message"
								rows="8"
								id="reason"
								placeholder="Type your comment here..."
								required
								onChange={handleChange}
							></textarea>
						</div>
						<div className="text-right">
							<button className="btn-main" type="submit">
								Submit
							</button>
						</div>
					</form>
				</>
			)}
			{thanks && (
				<>
					<h1>Thank You</h1>
					<h1>Your email has been sent</h1>
				</>
			)}
		</div>
	);
}
