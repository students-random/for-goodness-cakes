import React from 'react';
import { PopupButton } from 'react-calendly';

const Calendly = () => {
	return (
		<div className="Calendly">
			<PopupButton
				url="https://calendly.com/seirhypatia"
				text="Click to Schedule a Consultation"
				className="btn-submit"
			/>
		</div>
	);
};

export default Calendly;
