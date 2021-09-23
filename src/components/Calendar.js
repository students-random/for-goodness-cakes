import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

const Calendar = ({ props, selectedDate, setSelectedDate }) => {
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

	const disable = [
		new Date(2021, 8, 22),
		new Date(2021, 8, 24)
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
