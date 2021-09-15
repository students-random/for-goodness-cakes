import React, { useState } from 'react';

export default function Contact(props) {
	return (
		<div className="ContactPage">
			<h1>Contact Me</h1>
			<form>
				<div className="row name-email-div">
					<div className="form-group col name-label">
						<label>Name</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="FirstName LastName"
						/>
					</div>
					<div className="form-group col email-label">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="name@example.com"
						/>
					</div>
				</div>
				<div className="form-group col textarea-label">
					<label>Reason for contact</label>
					<textarea className="form-control" id="textarea"></textarea>
				</div>
				<button className="btn-main">Submit</button>
			</form>
		</div>
	);
}
