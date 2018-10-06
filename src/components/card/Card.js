import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './card.css';

const widths = {
	sm: 400,
	md: 500,
	lg: 600,
	xl: 800
};

const Card = ({ border, children, className, flex, margin, maxWidth, onClick, padding, rounded, style:_style, theme, to, width }) => {

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

	const Component = to ? Link : "div";

	const style = {
		margin: margin,
		maxWidth: maxWidth ? widths[width] : 'none',
		..._style
	};

	return (
		<Component className={c} style={style} onClick={onClick} to={to}>
			{ children }
		</Component>
	);
};

Card.propTypes = {
	border: PropTypes.bool,
	children: PropTypes.any,
	className: PropTypes.string,
	flex: PropTypes.bool,
	maxWidth: PropTypes.bool,
	margin: PropTypes.string,
	onClick: PropTypes.func,
	padding: PropTypes.bool,
	rounded: PropTypes.bool,
	shadow: PropTypes.bool,
	style: PropTypes.object,
	theme: PropTypes.string,
	to: PropTypes.string,
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