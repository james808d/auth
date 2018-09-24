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

const Card = ({ border, children, className, flex, margin, maxWidth, padding, rounded, style:_style, theme, width }) => {

	const c = cn(
		'card',
		theme,
		{
			'border':border,
			'card-flex':flex,
			'card-padding':padding,
			'rounded':rounded
		},
		className
	);

	const style = {
		margin: margin,
		maxWidth: maxWidth ? widths[width] : 'none',
		..._style
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
	margin: PropTypes.string,
	padding: PropTypes.bool,
	rounded: PropTypes.bool,
	shadow: PropTypes.bool,
	style: PropTypes.object,
	theme: PropTypes.string,
	width: PropTypes.string
};

Card.defaultProps = {
	margin: 0,
	maxWidth: false,
	padding: true,
	rounded: true,
	theme: 'white',
	width: 'sm'
};

export default Card;