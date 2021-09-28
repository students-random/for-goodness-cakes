import React from 'react';
import { PopupButton } from 'react-calendly';

const Calendly = () => {
	return (
		<div className="Calendly">
			<PopupButton
				url="https://calendly.com/seirhypatia"
				text="Click for Consultation"
				className="btn-submit"
				styles={{ marginBottom: '5px', height: '40px', maxWidth: '238px' }}
			/>
		</div>
	);
};

export default Calendly;
