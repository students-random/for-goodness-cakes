import React, { useRef, useState } from 'react';

const UpdateAnnoucement = ({
	props,
	annoucement,
	setAnnoucements,
	form,
	showUpdateForm
}) => {
	const [updatedAnnoucement, setUpdatedAnnoucement] = useState([]);
	const paragraph1Input = useRef(null);
	const paragraph2Input = useRef(null);
	const paragraph3Input = useRef(null);

	const fetchData = async () => {
		try {
			const response = await fetch('/api/announcement');
			const data = await response.json();
			setAnnoucements(data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleUpdate = async e => {
		e.preventDefault();

		try {
			const response = await fetch(
				`/api/announcement/${e.target.dataset.annoucement}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						paragraph1: paragraph1Input.current.value,
						paragraph2: paragraph2Input.current.value,
						paragraph3: paragraph3Input.current.value
					})
				}
			);
			const data = await response.json();
			fetchData();
			setUpdatedAnnoucement(data);
			form(!showUpdateForm);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDelete = async id => {
		try {
			const response = await fetch(`/api/announcement/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			setAnnoucements(annouce.filter(annoucement => annouce._id !== id));
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/admin');
		}
	};

	return (
		<div className="UpdateAnnoucement">
			<div className="table-responsive">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Paragraph 1</th>
							<th scope="col">Paragraph 2</th>
							<th scope="col">Paragraph 3</th>
							<th scope="col"></th>
							<th scope="col"></th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row">{annoucement.paragraph1}</th>
							<td>{annoucement.paragraph2}</td>
							<td>{annoucement.paragraph3}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<form onSubmit={handleUpdate} data-annoucement={annoucement._id}>
				<tbody>
					<tr>
						<th scope="row"></th>
						<div className="update">
							<td>
								<textarea
									type="text"
									rows="6"
									cols="30"
									id="paragraph1"
									ref={paragraph1Input}
									defaultValue={annoucement.paragraph1}
								/>
							</td>
							<td>
								<textarea
									type="text"
									rows="6"
									cols="30"
									id="paragraph2"
									ref={paragraph2Input}
									defaultValue={annoucement.paragraph2}
								/>
							</td>
							<td>
								<textarea
									type="text"
									rows="6"
									cols="30"
									id="paragraph3"
									ref={paragraph3Input}
									defaultValue={annoucement.paragraph3}
								/>
							</td>
							<div className="update-btns">
								<td>
									<button type="submit">update</button>
								</td>
								<td>
									<button onClick={() => handleDelete(annoucement._id)}>
										delete
									</button>
								</td>
							</div>
						</div>
					</tr>
				</tbody>
			</form>
		</div>
	);
};

export default UpdateAnnoucement;
