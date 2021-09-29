import React, { useState, useEffect } from 'react';
import UpdateAnnoucement from './UpdateAnnoucement';

const Annoucements = props => {
	const [annoucements, setAnnoucements] = useState([]);
	const [updatedAnnoucement, setUpdatedAnnoucement] = useState({});
	const [annoucementToUpdate, setAnnoucementToUpdate] = useState({});
	const [showUpdateForm, setShowUpdateForm] = useState(false);

	const toggleShowUpdateForm = id => {
		setShowUpdateForm(!showUpdateForm);
		setAnnoucementToUpdate(id);
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/announcement');
				const data = await response.json();
				setAnnoucements(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="Annoucements">
			<h1>Annoucements</h1>

			<div className="table-responsive">
				<table className="table table-hover">
					{!showUpdateForm && (
						<>
							<thead>
								<tr>
									<th scope="col" className="font-weight-bold">
										Paragraph 1
									</th>
									<th scope="col" className="font-weight-bold">
										Paragraph 2
									</th>
									<th scope="col" className="font-weight-bold">
										Paragraph 3
									</th>
								</tr>
							</thead>

							{annoucements.map(annoucement => {
								return (
									<>
										<tbody>
											<tr>
												<th scope="row" key={annoucement._id}>
													{annoucement.paragraph1}
												</th>

												<td>{annoucement.paragraph2}</td>
												<td>{annoucement.paragraph3}</td>
												<td>
													<button
														onClick={() => toggleShowUpdateForm(annoucement)}
													>
														Edit
													</button>
												</td>
											</tr>
										</tbody>
									</>
								);
							})}
						</>
					)}
				</table>
			</div>
			{showUpdateForm && (
				<>
					<UpdateAnnoucement
						props={props}
						annoucement={annoucementToUpdate}
						setAnnoucements={setAnnoucements}
						form={setShowUpdateForm}
						showUpdateForm={showUpdateForm}
					/>
				</>
			)}
		</div>
	);
};

export default Annoucements;
