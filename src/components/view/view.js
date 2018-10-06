import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './view.css';

const View = ({ children, className, theme, width, wrapperClass, wrapperStyle }) => {

	const w = cn(
		"view-wrapper",
		wrapperClass,
		theme
	);

	const c = cn(
		"view",
		className,
		`view-${width}`
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
	width: PropTypes.oneOf(['sm','md','lg']),
	wrapperClass: PropTypes.string,
	wrapperStyle: PropTypes.object
};

View.defaultProps = {
	width: 'lg'
};

export default View;