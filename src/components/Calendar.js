import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

const Calendar = ({ props, selectedDate, setSelectedDate }) => {
	const [disabledDay, setDisabledDay] = useState([
		// new Date(2021, 8, 7),
		// new Date(2021, 8, 22),
		// new Date(2021, 8, 24)
	]);
	const handleDayClick = (day, { selected, disabled }) => {
		if (disabled) {
			return;
		}
		if (selected) {
			setSelectedDate({ selectedDate: undefined });
			return;
		}
		setSelectedDate(day);

		setDisabledDay(day);
		console.log('day:', day);
		console.log('disabledDay:', disabledDay);
		// fetchData();
	};

	// const fetchData = async () => {
	// 	const response = await fetch('/api/disableddate');
	// 	const data = await response.json();
	// 	setDisabledDay(data);
	// 	console.log('58', data);
	// };

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/disableddate');
				const data = await response.json();
				setDisabledDay(data);
				console.log('71', data[0].date);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const disable = [
		disabledDay
		// new Date(2021, 8, 4),
		// new Date(2021, 8, 7),
		// new Date(2021, 8, 22),
		// new Date(2021, 8, 24)
		// { daysOfWeek: [1, 2] }
	];

	return (
		<div>
			<DayPicker
				onDayClick={handleDayClick}
				selectedDays={selectedDate}
				disabledDays={disable}
			/>
		</div>
	);
};

export default Calendar;
