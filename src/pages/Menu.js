import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {
	return (
		<div className="MenuPage">
			<div>Main Menu Page</div>

			<div className="gallery-container">
				<a target="blank" href="https://www.instagram.com/p/CSn1fdYsKCw">
					{' '}
					<img
						className="cake"
						src="/img/Web-Occasion-Cakes.png"
						onClick={() => imageClick()}
					/>
				</a>
				<a target="blank" href="https://www.instagram.com/p/CPeb5FknLRf/">
					<img className="cake" src="/img/Web-Cupcakes.png" />
				</a>
				<a target="blank" href="https://www.instagram.com/p/CRVnRRonMf9/">
					<img className="cake" src="/img/Web-Other Sweets.png" />
				</a>
			</div>

			<Link to={'/orderform'}>
				<button className="btn-main">Request an Invoice</button>
			</Link>
		</div>
	);
}
