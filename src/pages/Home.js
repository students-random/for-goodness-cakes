import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import Calendly from './Calendly';
import HomeCarousel from '../components/Carousel';

export default function Home(props) {
	return (
		<div className="HomePage">
			<HomeCarousel />
			<section className="how-to-order">
				<h1>How to Order</h1>
				<div className="hto-item-container">
					<div className="how-to-order-item">
						<img src="/img/cake-home.png" />
						<p>
							Fill out our custom order form to request an invoice from Saira
							and customize your sweet.
						</p>
					</div>
					<div className="how-to-order-item">
						<img src="/img/layer-home.png" />
						<p>
							Once you have booked your consultation, disscuss your order with
							Saira and let her do her magic
						</p>
					</div>
					<div className="how-to-order-item">
						<img src="/img/truck-home.png" />
						<p>
							Once the cake is finished it can either be picked up or delivered
							to your desired desination!
						</p>
					</div>
				</div>
			</section>
			<div>
				<h1>Bulletin Board</h1>
				<div>
					<Calendly />
				</div>

				<div>Insert Announcements component</div>
			</div>
			<div>
				<h1>Reviews and Feedback</h1>
				<div>User</div>
				<div>User</div>
			</div>
		</div>
	);
}
