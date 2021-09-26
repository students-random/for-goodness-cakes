import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

const Calendar = ({ props, selectedDate, setSelectedDate, fromOrderForm }) => {
	const [disabledDay, setDisabledDay] = useState([]);

	const handleDayClick = (day, { selected, disabled }) => {
		if (disabled) {
			return;
		}
		if (selected) {
			setSelectedDate({ selectedDate: undefined });
			return;
		}
		setSelectedDate(day);
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/disableddate');
				const data = await response.json();

				for (let i = 0; i < data.length; i++) {
					let updatedData = new Date(
						data[i].year,
						data[i].month - 1,
						data[i].day
					);
					setDisabledDay(disabledDay => [...disabledDay, updatedData]);
				}
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// ======================== hard code disabled dates start =========
	// const disable = [
	// 	new Date(2021, 8, 22),
	// 	new Date(2021, 8, 24),
	// 	{ daysOfWeek: [1, 2] }
	// ];
	// ======================== hard code disabled dates end ==========
	return (
		<>
			{fromOrderForm ? (
				<div>
					<DayPicker
						onDayClick={handleDayClick}
						selectedDays={selectedDate}
						disabledDays={disabledDay}
					/>
				</div>
			) : (
				<div>
					<DayPicker disabledDays={disabledDay} />
				</div>
			)}
		</>
	);
};

export default Calendar;
