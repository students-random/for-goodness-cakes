import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import DayPicker from 'react-day-picker';
import OtherCalenderDontUse from '../components/OtherCalenderDontUse';
// import 'react-day-picker/lib/style.css';
import moment from 'moment';

const OrderForm = props => {
	const [selectedDate, setSelectedDate] = useState({});
	const [orderType, setOrderType] = useInput('');
	const [flavor, setFlavor] = useInput('');
	const [ideas, setIdeas] = useInput('');
	const [allergies, setAllergies] = useInput('');
	const [flavorData] = useState([
		'Classic Ube',
		'Chocolate Fudge',
		'Chocolate w/ Salted Caramel',
		'Cookies & Cream',
		'Funfetti',
		'Lemon Blueberry',
		'Marble(Chocolate & Vanilla)',
		'Matcha',
		'Red Velvet',
		'Vanilla'
	]);

	function useInput(initialValue) {
		const [value, setValue] = useState(initialValue);

		function handleChange(e) {
			setValue(e.target.value);
		}

		return [value, handleChange];
	}

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
		new Date(2021, 8, 24),
		{ daysOfWeek: [1, 2] }
	];

	const handleSubmit = e => {
		e.preventDefault();
		console.log('order type: ', orderType);
		console.log('flavor: ', flavor);
		console.log('date: ', selectedDate);
		console.log('ideas: ', ideas);
		console.log('allergies: ', allergies);
		// input.current.value=""
	};

	return (
		<div className="OrderForm">
			{/*<OtherCalenderDontUse />*/}
			<h1>Make an Order</h1>

			<div className="form">
				<div className="question">
					<h4 className="label">
						1. Select the date you want your cake to be picked up or delivered
					</h4>
				</div>
				<div className="order-form-calendar">
					<div className="order-form-calendar-text">
						<h2>Delivery/Pick Up</h2>
						<p>
							{' '}
							Date Use this form to schedule a consultation. Select the date you
							want your cake to be picked up or delivered.
						</p>
						<p>
							Date selected:{' '}
							<b>{moment(selectedDate).format('MMMM DD, YYYY')}</b>
						</p>
					</div>
					<div className="order-form-calendar-dispaly">
						<DayPicker
							onDayClick={handleDayClick}
							selectedDays={selectedDate}
							disabledDays={disable}
						/>
					</div>
				</div>
				<form
					className="actual-form"
					onSubmit={handleSubmit}
					style={{ display: 'flex', flexDirection: 'column' }}
				>
					<label className="question">
						{' '}
						<h4 className="label">2. What would you like to order?</h4>
						<select onChange={setOrderType} value={orderType}>
							<option value="occasion-cakes">Occasion Cake</option>
							<option value="cupcakes">Cupcakes</option>
							<option value="cakepops">Cakepops</option>
							<option value="cakesicles">Cakesicles</option>
						</select>
					</label>

					<label className="question">
						<h4 className="label">3. What flavors would you like? </h4>
					</label>
					<div className="form-check">
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[0]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[0]}</label>
						</div>
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[1]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[1]}</label>
						</div>
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[2]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[2]}</label>
						</div>
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[3]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[3]}</label>
						</div>
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[4]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[4]}</label>
						</div>
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[5]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[5]}</label>
						</div>
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[6]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[6]}</label>
						</div>
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[7]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[7]}</label>
						</div>
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[8]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[8]}</label>
						</div>
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								value={flavorData[9]}
								onChange={setFlavor}
							/>
							<label className="form-check-label">{flavorData[9]}</label>
						</div>
					</div>

					<label className="question">
						<h4 className="label">
							4. Do you have any design ideas, a theme or images you would like
							to incorporate in your cake design?
						</h4>
						<textarea
							rows="7"
							cols="40"
							type="text"
							id="ideas"
							placeholder="Type your ideas here..."
							value={ideas}
							onChange={setIdeas}
						/>
					</label>
					<label className="question">
						<h4 className="label">
							5. Do you have any allergies our baker should known about
							(peanuts, eggs, dairy, etc.)?
						</h4>
						<textarea
							rows="7"
							cols="40"
							type="text"
							id="allergies"
							placeholder="Type your comment here..."
							value={allergies}
							onChange={setAllergies}
						/>
					</label>

					<input className="" type="submit" value="Submit your Order" />
				</form>
			</div>
		</div>
	);
};

export default OrderForm;
