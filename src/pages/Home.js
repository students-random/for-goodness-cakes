import React, { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import Calendly from '../components/Calendly';
import HomeCarousel from '../components/Carousel';
import Calendar from '../components/Calendar';

export default function Home(props) {
	const openInNewTab = () => {
		const newWindow = window.open(
			'https://m.facebook.com/forgoodnesscakesbysaira/reviews',
			'_blank',
			'noopener,noreferrer'
		);
		if (newWindow) newWindow.opener = null;
	};

	const [annoucements, setAnnoucements] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/announcement');
				const data = await response.json();
				setAnnoucements(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

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
					<h6 className="annoucement-title">Announcements</h6>
					<section className="announcements-text">
						{annoucements.map(annoucement => {
							return (
								<>
									<p> {annoucement.paragraph1}</p>
									<p> {annoucement.paragraph2}</p>
									<p> {annoucement.paragraph3}</p>
								</>
							);
						})}
					</section>
				</section>
			</section>

			<h1>Reviews and Feedback</h1>

			<section className="reviews">
				<section onClick={() => openInNewTab()} className="review review-left">
					<img
						className="user1"
						src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-1/cp0/e15/q65/c0.0.480.480a/p480x480/218270078_10219373544436046_3537120067805372537_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=dbb9e7&efg=eyJpIjoidCJ9&_nc_ohc=yIO4M5cbCkcAX8MFhcQ&_nc_ht=scontent-lga3-2.xx&oh=8dfe05ede29d5fea1dfeb0d5aa126492&oe=617A4C26"
					/>
					<p>
						"Best donut in NYC! Everything is good! You will eat 1 donut and get
						another one! Lol. We ordered here multiple times and I just love
						everything they have! Will order my cake birthday cake here!"
					</p>
				</section>
				<section onClick={() => openInNewTab()} className="review review-right">
					<img
						className="user2"
						src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-1/cp0/p80x80/212638241_10223352506753803_6764250528053322986_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=JYqTRNPohkgAX_XNTPI&_nc_ht=scontent-lga3-2.xx&oh=2f4f834dc6332c41131e7266d755926e&oe=61586EDA"
					/>
					<p>
						"Omg these donuts are divine! Can’t stop eating them. I highly
						recommend these plus the customer service is superb. 🍩👍💜"
					</p>
				</section>
			</section>
		</div>
	);
}
