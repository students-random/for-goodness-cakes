import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OccasionCakes from '../components/OccasionCakes';
import Cupcakes from '../components/Cupcakes';
import OtherSweets from '../components/OtherSweets';

export default function Menu(props) {
	return (
		<div className="MenuPage">
			<section className="gallery-container">
				<img className="cake" src="/img/Web-Occasion-Cakes.png" />
				<h2>Occasion Cakes</h2>
				<img className="cake" src="/img/Web-Cupcakes.png" />
				<h2>Cupcakes</h2>
				<img className="cake" src="/img/Web-Other Sweets.png" />
				<h2>Other Sweets</h2>
			</section>
			<OccasionCakes />
			{/*
			<Cupcakes />
			<OtherSweets />
				*/}
			<Link to={'/orderform'}>
				<button className="btn-main">Request an Invoice</button>
			</Link>
		</div>
	);
}
