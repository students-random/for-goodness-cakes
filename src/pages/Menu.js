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

	return (
		<div className="MenuPage">
			<section className="gallery-container">
				<button
					onClick={() => toggle(setViewOccasionCakes)}
					style={{ border: 'none', backgroundColor: '#F6F5F0' }}
				>
					<img className="cake" src="/img/Web-Occasion-Cakes.png" />
					<h2>Occasion Cakes</h2>
				</button>
				<button
					onClick={() => toggle(setViewCupcakes)}
					style={{ border: 'none', backgroundColor: '#F6F5F0' }}
				>
					<img className="cake" src="/img/Web-Cupcakes.png" />
					<h2>Cupcakes</h2>
				</button>
				<button
					onClick={() => toggle(setViewOtherSweets)}
					style={{ border: 'none', backgroundColor: '#F6F5F0' }}
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
