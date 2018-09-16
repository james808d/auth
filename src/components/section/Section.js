import React from 'react'
import './section.css';

const Section = ({ children, className }) => {

	return (
		<section className={`${className} section-container`}>
			<div className="section-inner">
				{ children }
			</div>
		</section>
	);
};

export default Section