import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Caret from '../caret/Caret';

import './button.css';

const Button = ({
	active,
	caretDirection,
	children,
	className,
	dataKey,
	disabled,
	name,
	onBlur,
	onClick,
	onFocus,
	onMouseEnter,
	onMouseLeave,
	onMouseUp,
	onMouseDown,
	passEvent,
	rounded,
	showCaret,
	theme,
	type,
	value
}) => {

	const handleClick = e => {
		onClick && (passEvent || type === 'submit') && (onClick(e, dataKey));
		onClick && !passEvent && (onClick(dataKey));
	};

	const c = cn(
		'button',
		theme,
		`button-${theme}`,
		{
			'active': active,
			'disabled': disabled,
			'rounded': rounded
		},
		className
	);

	return (
		<button
			className={c}
			name={name}
			onClick={handleClick}
			onFocus={onFocus}
			onBlur={onBlur}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			type={type}
			value={value}
			disabled={disabled}>

			{ showCaret && caretDirection === 'left' &&
			<Caret
				direction={caretDirection}
				marginRight={ !!children }
			/>
			}
			{ children }
			{ showCaret && caretDirection !== 'left' &&
			<Caret
				direction={caretDirection}
				marginLeft={ !!children }
			/>
			}

		</button>
	);
};

Button.propTypes = {
	active: PropTypes.bool,
	activeTheme: PropTypes.string,
	animate: PropTypes.bool,
	block: PropTypes.bool,
	caretDirection: PropTypes.oneOf(['up','right','down','left']),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	className: PropTypes.string,
	containerRef: PropTypes.func,
	dataKey: PropTypes.any,
	disabled: PropTypes.bool,
	flex: PropTypes.oneOfType([PropTypes.bool,PropTypes.number]),
	focused: PropTypes.bool,
	hovered: PropTypes.bool,
	keepFocus: PropTypes.bool,
	marginBottom: PropTypes.bool,
	marginLeft: PropTypes.bool,
	marginRight: PropTypes.bool,
	name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onBlur: PropTypes.func,
	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	padding: PropTypes.bool,
	passEvent: PropTypes.bool,
	rounded: PropTypes.bool,
	roundLeft: PropTypes.bool,
	roundRight: PropTypes.bool,
	shadow: PropTypes.bool,
	shadowOnActive: PropTypes.bool,
	shadowStatesDisabled: PropTypes.bool,
	shadowTheme: PropTypes.string,
	showCaret: PropTypes.bool,
	size: PropTypes.oneOf(['sm','md','lg','xl']),
	tab: PropTypes.bool,
	textTheme: PropTypes.string,
	theme: PropTypes.string,
	toggle: PropTypes.bool,
	transparent: PropTypes.bool,
	type: PropTypes.oneOf(['button','submit']),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};

Button.defaultProps = {
	animate: true,
	caretDirection: 'left',
	padding: true,
	passEvent: false,
	rounded: true,
	roundLeft: true,
	roundRight: true,
	size: 'md',
	type: 'button'
};

export default Button;