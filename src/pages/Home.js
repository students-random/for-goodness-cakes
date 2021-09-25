import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import Calendly from './Calendly';
import HomeCarousel from '../components/Carousel';
import Calendar from '../components/Calendar';

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

			<h1>Bulletin Board</h1>

			<section className="bulletin-board">
				<section className="calendly board-item">
					<Calendly />
					<p className="calendar-placeholder">
						<Calendar fromOrderForm={false} />
					</p>
				</section>

				<div className="horizontal-line">
					{/* This div is the seperating line ☢ */}
				</div>

				<section className="annoucements board-item">
					<h6>Announcements</h6>
					<section className="announcements-text">
						<p>
							I will be taking a baking break until October 1st. No orders will
							be accepted between now and September 30th. However, you may place
							your orders in advance for the last quarter of the year.
						</p>
						<p>
							Thank you all from the bottom of my heart for your overflowing
							support!
						</p>
						<p>
							But for now, I would like to take the time to refresh and
							recharge. Stay safe and God bless us all! 🙏🏼😇🧘🏻‍♀️
						</p>
					</section>
				</section>
			</section>

			<h1>Reviews and Feedback</h1>

			<section className="reviews">
				<section className="review review-left">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
						impedit, praesentium tenetur? Ducimus quam accusantium pariatur
						necessitatibus neque. Dolorum itaque a tempora repellendus neque
						eligendi non dolorem tenetur impedit, maxime.
					</p>
				</section>
				<section className="review review-right">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
						impedit, praesentium tenetur? Ducimus quam accusantium pariatur
						necessitatibus neque. Dolorum itaque a tempora repellendus neque
						eligendi non dolorem tenetur impedit, maxime.
					</p>
				</section>
			</section>
		</div>
	);
}
