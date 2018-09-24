import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './view.css';

const View = ({ children, className, theme, wrapperClass, wrapperStyle }) => {

	const w = cn(
		"view-wrapper",
		wrapperClass,
		theme
	);

	const c = cn(
		"view",
		className
	);

	return (
		<div className={w} style={wrapperStyle}>
			<div className={c}>
				{ children }
			</div>
		</div>
	);
};

View.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	theme: PropTypes.string,
	wrapperClass: PropTypes.string,
	wrapperStyle: PropTypes.object
};

export default View;