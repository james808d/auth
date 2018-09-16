import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ color, fontSize, icon, lineHeight, opacity, style:_style }) => {

	const style = {
		fontSize,
		lineHeight,
		opacity,
		verticalAlign:'middle',
		color: color,
		..._style
	};

	return (
		<span className="material-icons" style={style}>
			{ icon }
		</span>
	);
};

Icon.propTypes = {
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
	])
};

Icon.defaultProps = {
	opacity: 1,
	fontSize: '100%',
	lineHeight: '95%'
};

export default Icon;