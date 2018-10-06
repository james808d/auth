import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import cn from 'classnames';
import Caret from '../caret/Caret';

import './button.css';
import Button from './Button';


const LinkButton = (props) => {
	const {
		active,
		disabled,
		children,
		className,
		history,
		location,
		match,
		name,
		rounded,
		staticContext,
		to,
		onClick,
		size,
		style,
		theme,
		type,
		transparent,
		value
	} = props;

	const c = cn(
		'button',
		'plex',
		theme,
		`button-${theme}`,
		`button-${size}`,
		{
			'active': active,
			'disabled': disabled,
			'rounded': rounded,
			'transparent': transparent
		},
		className
	);

	return (
		<button
			children={children}
			className={c}
			name={name}
			onClick={(event) => {
				onClick && onClick(event);
				history.push(to)
			}}
			type={type}
			value={value}
			style={style}
			disabled={disabled}
		/>
	)
};

LinkButton.propTypes = {
	active: PropTypes.bool,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	theme: PropTypes.string,
	rounded: PropTypes.bool,
	transparent: PropTypes.bool,
	size: PropTypes.oneOf(['sm','md','lg','xl']),
};

LinkButton.defaultProps = {
	caretDirection: 'left',
	padding: true,
	passEvent: false,
	rounded: true,
	roundLeft: true,
	roundRight: true,
	size: 'md',
	type: 'button'
};

export default withRouter(LinkButton)