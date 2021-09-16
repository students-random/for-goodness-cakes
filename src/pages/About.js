import React, { useState } from 'react';

export default function About(props) {
	return (
		<div className="AboutPage">
			<h1>About</h1>
			<div className="about-container">
				<div className="about-left">
					<div className="polaroid">
						<img src="/img/about.png" />
						<div className="caption">
							<h3>Saira Escobar-Merlas</h3>
							<p>Head Baker and Owner of For Goodness Cakes</p>
						</div>
					</div>
				</div>
				<div className="about-right">
					<h1>Meet our Baker</h1>
					<p className="p-fgcbsl">For Goodness Cakes by Saira, LLC </p>
					<p className="p-bhtab">Baking hobby to a Business 👩🏻‍💕</p>
					<p>
						I would like to introduce my home based business. When I first
						dabbled in baking, I never anticipated that this hobby will turn
						into a business. Working full-time In a busy office can be mentally
						draining. Baking has definitely become my stress reliever. As a
						filipina growing up in NYC, I have always held filipino flavors
						close to my heart. My favorite flavors Ube and Chocobutternut are
						famous in the philippines, but not so common here in America. I
						wanted to make sweets for my friends and family with the filipino
						flavors we know. So I started experimenting with ube donuts and
						chocobutternut flavors. From then on, I started to take orders first
						from friends, then friends of friends, and then from a wider market.
					</p>
				</div>
			</div>
		</div>
	);
}
