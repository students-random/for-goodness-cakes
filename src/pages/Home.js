import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import Calendly from './Calendly';

export default function Home(props) {
	return (
		<div className="HomePage">
			<div>
				<img src="/img/order-now.png" />
			</div>
			<div>
				<img src="/img/cake-truck-icons.png" />
			</div>
			<div>
				<h2>Bulletin Board</h2>
				<div>
					<Calendly />
				</div>

				<div>Insert Announcements component</div>
			</div>
			<div>
				<h2>Reviews and Feedback</h2>
				<div>User</div>
				<div>User</div>
			</div>
		</div>
	);
}
