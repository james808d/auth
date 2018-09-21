import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './card.css';

const widths = {
	sm: 400,
	md: 500,
	lg: 600,
	xl: 800
};

const Card = ({ border, children, className, flex, margin, maxWidth, rounded, theme, width }) => {

	const c = cn(
		'card',
		theme,
		{
			'border':border,
			'card-flex':flex,
			'rounded':rounded
		},
		className
	);

	const style = {
		margin,
		maxWidth: maxWidth ? widths[width] : 'none'
	};

	return (
		<div className={c} style={style}>
			{ children }
		</div>
	);
};

Card.propTypes = {
	border: PropTypes.bool,
	children: PropTypes.any,
	className: PropTypes.string,
	flex: PropTypes.bool,
	maxWidth: PropTypes.bool,
	margin: PropTypes.number,
	rounded: PropTypes.bool,
	shadow: PropTypes.bool,
	theme: PropTypes.string,
	width: PropTypes.string
};

Card.defaultProps = {
	margin: 0,
	maxWidth: false,
	rounded: true,
	theme: 'white',
	width: 'sm'
};

export default Card;