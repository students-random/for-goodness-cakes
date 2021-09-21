import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {
	return (
		<div className="MenuPage">
			<div>Main Menu Page</div>
			<Link to={'/orderform'}>
				<button className="btn-main">Request an Invoice</button>
			</Link>
		</div>
	);
}
