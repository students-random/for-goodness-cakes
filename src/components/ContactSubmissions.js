import React, { useState, useEffect } from 'react';

const ContactSubmissions = props => {
	const [submissions, setSubmissions] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/contactsubmissions');
				const data = await response.json();
				setSubmissions(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async id => {
		try {
			const response = await fetch(`/api/contactsubmissions/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			setSubmissions(submissions.filter(entry => entry._id !== id));
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/admin');
		}
	};

	return (
		<div className="ContactSubmissions">
			<h1>'Contact Me' Submissions</h1>

			<div className="table-responsive">
				<table className="table table-hover">
					<>
						<thead>
							<tr>
								<th scope="col" className="font-weight-bold">
									Name
								</th>
								<th scope="col" className="font-weight-bold">
									Email
								</th>
								<th scope="col" className="font-weight-bold">
									Reason for Contact
								</th>
								<th scope="col"></th>
							</tr>
						</thead>

						{submissions.map(submission => {
							return (
								<>
									<tbody>
										<tr>
											<th scope="row" key={submission._id}>
												{submission.name}
											</th>
											<td>{submission.email}</td>
											<td>{submission.reason}</td>
											<td>
												<button onClick={() => handleDelete(submission._id)}>
													Delete
												</button>
											</td>
										</tr>
									</tbody>
								</>
							);
						})}
					</>
				</table>
			</div>
		</div>
	);
};

export default ContactSubmissions;
