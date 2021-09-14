import React from 'react';

const Footer = props => {
	return (
		<nav className="Footer">
			<h5>Contact Us:</h5>
			<p className="phone">917-250-6203</p>
			<p>infor.forgoodnesscakesbysaira@gmail.com</p>
			<a
				href="https://www.instagram.com/forgoodnesscakesbysaira/?hl=en"
				target="_blank"
			>
				<img className="instagram-img" src="/img/instagram-icon.png" />
			</a>
			<a
				href="https://www.facebook.com/forgoodnesscakesbysaira/"
				target="_blank"
			>
				<img className="facebook-img" src="/img/facebook-icon.png" />
			</a>

			<img className="footer-img" src="/img/for-goodness-cakes-logo-dark.png" />
		</nav>
	);
};

export default Footer;
