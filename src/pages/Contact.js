import React, { useState, useEffect } from 'react';

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

		try {
			const response = await fetch('/api/contactsubmissions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newSubmission)
			});
			const data = await response.json();
			handleClick();
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

	const handleClick = e => {
		// e.preventDefault();
		setThanks(!thanks);
	};

	return (
		<div className="ContactPage">
			{!thanks && (
				<>
					<h1>Contact Me</h1>
					<form onSubmit={handleSubmit}>
						<div className="row name-email-div">
							<div className="form-group col name-label">
								<label>Name</label>
								<input
									type="text"
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
								rows="8"
								id="reason"
								placeholder="Type your comment here..."
								required
								onChange={handleChange}
							></textarea>
						</div>
						<button className="btn-main" type="submit">
							Submit
						</button>
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
