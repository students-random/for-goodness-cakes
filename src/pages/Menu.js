import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OccasionCakes from '../components/OccasionCakes';
import Cupcakes from '../components/Cupcakes';
import OtherSweets from '../components/OtherSweets';

export default function Menu(props) {
	const [viewOccasionCakes, setViewOccasionCakes] = useState(true);
	const [viewCupcakes, setViewCupcakes] = useState(false);
	const [viewOtherSweets, setViewOtherSweets] = useState(false);

	const toggle = setComponent => {
		setViewOccasionCakes(false);
		setViewCupcakes(false);
		setViewOtherSweets(false);
		setComponent(true);
	};

	const blur = component => {
		if (!component) {
			return {
				filter: 'blur(3px)'
			};
		}
	};

	return (
		<div className="MenuPage">
			<h1>Menu</h1>
			<section className="gallery-container">
				<button
					onClick={() => toggle(setViewOccasionCakes)}
					style={blur(viewOccasionCakes)}
				>
					<img className="cake" src="/img/Web-Occasion-Cakes.png" />
					<h2>Occasion Cakes</h2>
				</button>
				<button
					onClick={() => toggle(setViewCupcakes)}
					style={blur(viewCupcakes)}
				>
					<img className="cake" src="/img/Web-Cupcakes.png" />
					<h2>Cupcakes</h2>
				</button>
				<button
					onClick={() => toggle(setViewOtherSweets)}
					style={blur(viewOtherSweets)}
				>
					<img className="cake" src="/img/Web-Other Sweets.png" />
					<h2>Other Sweets</h2>
				</button>
			</section>
			{viewOccasionCakes && <OccasionCakes />}

			{viewCupcakes && <Cupcakes />}
			{viewOtherSweets && <OtherSweets />}

			<Link to={'/orderform'}>
				<button className="btn-main">Request an Invoice</button>
			</Link>
		</div>
	);
}
