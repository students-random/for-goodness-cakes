import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

const Calendar = ({ props, selectedDate, setSelectedDate }) => {
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
				const updatedData = new Date(data[0].year, data[0].month, data[0].day);

				setDisabledDay([...disabledDay, updatedData]);

				console.log('71', data[0].date);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<DayPicker
				onDayClick={handleDayClick}
				selectedDays={selectedDate}
				disabledDays={disabledDay}
			/>
		</div>
	);
};

export default Calendar;
