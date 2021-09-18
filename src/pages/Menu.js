import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderForm from '../components/OrderForm';

export default function Menu(props) {
	return (
		<div className="MenuPage">
			<OrderForm />
		</div>
	);
}
