import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Icon = ({ children, className, color, fontSize, icon, lineHeight, opacity, style:_style, theme }) => {

	const style = {
		fontSize,
		lineHeight,
		opacity,
		verticalAlign:'middle',
		color: color,
		..._style
	};


	const c = cn(
		"material-icons",
		theme,
		className
	);

	return (
		<span className={c} style={style}>
			{ icon || children }
		</span>
	);
};

Icon.propTypes = {
	children: PropTypes.string,
	className: PropTypes.string,
	icon: PropTypes.string,
	style: PropTypes.object,
	color: PropTypes.string,
	opacity: PropTypes.number,
	fontSize: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	lineHeight: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	theme: PropTypes.string
};

Icon.defaultProps = {
	opacity: 1,
	fontSize: '100%',
	lineHeight: '95%'
};

export default Icon;