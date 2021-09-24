import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

const DisableDay = ({ props, selectedDate, setSelectedDate }) => {
	const [day, setDay] = useState([]);
	const [newDay, setNewDay] = useState({
		year: null,
		month: null,
		day: ''
	});

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await fetch('/api/disableddate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newDay)
			});
			const data = await response.json();
			setDay([...day, data]);
			setNewDay({
				year: '',
				month: '',
				day: ''
			});
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/admin');
		}
	};

	const handleChange = e => {
		setNewDay({ ...newDay, [e.target.id]: e.target.value });
	};

	return (
		<div className="DisableDay">
			<h1>Disable Date</h1>
			<form
				className=""
				onSubmit={handleSubmit}
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				<label>
					<h4 className="">Year (4 digit format) </h4>
					<input
						type="number"
						id="year"
						required
						min="4"
						placeholder="2021"
						required
						onChange={handleChange}
					/>
				</label>
				<label>
					<h4 className="">Month: </h4>
					<input
						type="number"
						id="month"
						placeholder="03"
						required
						onChange={handleChange}
					/>
				</label>
				<label>
					<h4 className="">Day:</h4>
					<input
						type="number"
						id="day"
						placeholder="21"
						required
						onChange={handleChange}
					/>
				</label>

				<input className="btn-main" type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default DisableDay;
