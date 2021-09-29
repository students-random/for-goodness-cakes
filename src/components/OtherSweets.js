import React from 'react';

const OtherSweets = () => {
	return (
		<div className="Menu-Dropdown">
			<section className="flavors">
				<h2>Flavors</h2>
				<article className="flavor-saver">
					<p className="first-column">
						<p>Classic Ube</p>
						<p>Chocolate Fudge 💗</p>
						<p>Chocolate with Salted Caramel</p>
						<p>Cookies & Cream</p>
						<p>Funfetti 💗</p>
					</p>
					<p className="second-column">
						<p>Matcha</p>
						<p>Red Velvet 💗</p>
						<p>Vanilla 💗</p>
					</p>
				</article>
				<h5>Best Sellers 💗</h5>
			</section>

			<section className="text">
				<h2>Pricing</h2>
				<p>
					There is a minimum of 14 days notice for all custom work, based on
					availability. Deposits must be paid 10 days in advance. We are small
					shop and do book up quickly on weekends/holidays. Please plan advance
					notice for all custom orders!
				</p>
				<p>We require a 50% deposit to hold and confirm custom cake orders.</p>
				<p>
					{' '}
					Completely Custom Designs in our signature buttercream frosting.
					Unlimited flavor combinations. Fillings can cost extra.
				</p>
				<p>
					{' '}
					Because our pricing is linked to our time, if you let us know what
					your budget and serving requirements are, we can work with you to
					design a cake to meet your needs.
				</p>
				<div className="pricing">
					<p className="price-box">Cakesicles Box of 12__________ $36</p>
					<p>Cakepops Box of 12 __________ $30</p>
				</div>
				<p className="end-text">
					All prices are a starting cost and includes a personalized topper in
					the color and theme of your choice The exact cake pricing is dependent
					on designs, size, and detail. The pricing here is a general guideline!{' '}
				</p>
			</section>
		</div>
	);
};

export default OtherSweets;
