import React, { useState, useRef, useEffect } from 'react';
import emailjs, { init } from 'emailjs-com';
import moment from 'moment';
import Calendar from '../components/Calendar';

const OrderForm = props => {
	const [disabledDay, setDisabledDay] = useState([]);
	const [selectedDate, setSelectedDate] = useState({});
	const [orders, setOrders] = useState([]);
	const [thanks, setThanks] = useState(false);
	const [newOrder, setNewOrder] = useState({
		selectedDate: `${selectedDate}`,
		orderType: '',
		flavor: '',
		ideas: '',
		allergies: '',
		name: '',
		email: ''
	});

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
	const [orderTypeData] = useState([
		'Occasion Cake',
		'Cupcakes',
		'Cakepops',
		'Cakesicles'
	]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	//===================== function to fetch/set disabledDates (start) ===========
	const fetchDisabledDates = async () => {
		const response = await fetch('/api/disableddate');
		const data = await response.json();

		for (let i = 0; i < data.length; i++) {
			let updatedData = new Date(data[i].year, data[i].month, data[i].day);
			setDisabledDay(disabledDay => [...disabledDay, updatedData]);
		}
	};
	//=================== function to fetch/set disabledDates (end) ===============

	//================ handleSubmit function updates Orders database (start) ======
	const handleSubmit = async e => {
		e.preventDefault();
		fetchDisabledDates();

		newOrder.selectedDate = moment(selectedDate).format('MMMM DD, YYYY');

		let year = moment(selectedDate).format('YYYY');
		let month = moment(selectedDate).format('MM');
		let day = moment(selectedDate).format('DD');
		let updatedData = new Date(year, month - 1, day);
		const dayData = {
			year: year,
			month: month,
			day: day
		};

		sendEmail(e);
		//================ fetch to create new order ==========
		try {
			const orderResponse = await fetch('/api/orders', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newOrder)
			});
			const orderData = await orderResponse.json();

			setSelectedDate(selectedDate);
			setOrders([...orders, orderData]);
			setThanks(!thanks);
			window.scrollTo(0, 0);

			//============== fetch to create new diabled date =======
			const response = await fetch('/api/disableddate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dayData)
			});
			const data = await response.json();
			setDisabledDay(disabledDay => [...disabledDay, updatedData]);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = e => {
		setNewOrder({ ...newOrder, [e.target.id]: e.target.value });
	};
	//================ handleSubmit function updates Orders database (end) ========

	//================== Function to send email to baker (start)===================
	const templateParams = {
		user_name: newOrder.name,
		user_email: newOrder.email,
		delivery_pickup: moment(selectedDate).format('MMMM DD, YYYY'),
		orderType: newOrder.orderType,
		flavor: newOrder.flavor,
		ideas: newOrder.ideas,
		allergies: newOrder.allergies
	};

	const sendEmail = async e => {
		e.preventDefault();
		emailjs
			.send(
				'service_uy4xefh',
				'template_6lngxqs',
				templateParams,
				'user_HiF2ZhDSYEd3b5ieU6zN6'
			)
			.then(
				function(response) {
					console.log('SUCCESS!', response.status, response.text);
				},
				function(err) {
					console.log('FAILED...', err);
				}
			);
	};
	//==================== Function to send email to baker (end)===================

	return (
		<div className="OrderForm">
			{!thanks && (
				<>
					<h1>Make an Order</h1>

					<div className="form">
						<div className="question">
							<h4 className="label">
								1. Select the date you want your cake to be picked up or
								delivered
							</h4>
						</div>
						<div className="delivery-calendar-div">
							<div className="delivery-text">
								<h5>Forgoodness Cakes by Saira</h5>
								<h2>Delivery/Pick Up Date</h2>
								<p>
									{' '}
									Use this form to book your order. Select the date you want
									your cake to be picked up or delivered.
								</p>
								<p>
									Date selected:{' '}
									<b>{moment(selectedDate).format('MMMM DD, YYYY')}</b>
								</p>
							</div>
							<div className="calendar">
								<Calendar
									selectedDate={selectedDate}
									setSelectedDate={setSelectedDate}
									fromOrderForm={true}
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
								<select
									onChange={handleChange}
									id="orderType"
									name="orderType"
									required
								>
									<option value="" disabled={true} selected>
										Make A Selection
									</option>

									<option value={orderTypeData[0]}>{orderTypeData[0]}</option>
									<option value={orderTypeData[1]}>{orderTypeData[1]}</option>
									<option value={orderTypeData[2]}>{orderTypeData[2]}</option>
									<option value={orderTypeData[3]}>{orderTypeData[3]}</option>
								</select>
							</label>

							<label className="question">
								<h4 className="label">3. What flavors would you like? </h4>
							</label>
							<div className="form-check" required>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[0]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[0]}</label>
								</div>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[1]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[1]}</label>
								</div>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[2]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[2]}</label>
								</div>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[3]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[3]}</label>
								</div>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[4]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[4]}</label>
								</div>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[5]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[5]}</label>
								</div>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[6]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[6]}</label>
								</div>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[7]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[7]}</label>
								</div>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[8]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[8]}</label>
								</div>
								<div>
									<input
										className="form-check-input"
										type="checkbox"
										id="flavor"
										name="flavor"
										value={flavorData[9]}
										onChange={handleChange}
									/>
									<label className="form-check-label">{flavorData[9]}</label>
								</div>
							</div>

							<label className="question">
								<h4 className="label">
									4. Do you have any design ideas, a theme or images you would
									like to incorporate in your cake design?
								</h4>
								<textarea
									rows="7"
									cols="40"
									type="text"
									id="ideas"
									name="ideas"
									placeholder="Type your ideas here..."
									onChange={handleChange}
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
									name="allergies"
									placeholder="Type your comment here..."
									onChange={handleChange}
								/>
							</label>
							<label className="question">
								<h4 className="label">6. Name</h4>
								<input
									type="text"
									name="user_name"
									id="name"
									placeholder="Full Name"
									required
									onChange={handleChange}
								/>
							</label>

							<label className="question">
								<h4 className="label">7. Email</h4>
								<input
									type="email"
									name="user_email"
									id="email"
									placeholder="name@example.com"
									required
									onChange={handleChange}
								/>
							</label>

							<input
								className="btn-main"
								type="submit"
								value="Submit your Order"
							/>
						</form>
					</div>
				</>
			)}
			{thanks && (
				<>
					<h1>Thank You</h1>
					<h1>Your order has been submitted</h1>
				</>
			)}
		</div>
	);
};

export default OrderForm;
