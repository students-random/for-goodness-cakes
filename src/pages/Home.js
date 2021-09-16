import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import App from './App';

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
					<App />
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
