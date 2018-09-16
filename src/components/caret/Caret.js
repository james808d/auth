import React from 'react';
import PropTypes from 'prop-types';

const Caret = props => {

	let direction;

	switch(props.direction) {
		case 'right':
			direction = 0;
			break;
		case 'down':
			direction = 90;
			break;
		case 'left':
			direction = 180;
			break;
		case 'up':
			direction = 270;
			break;
	}

	const style = {
		display: 'inline-block',
		verticalAlign:'middle',
		marginRight: props.marginRight ? '0.5em' : 0,
		marginLeft: props.marginLeft ? '0.5em' : 0,
		marginBottom: 2,
		...props.style
	};

	return(
		<svg style={style} width={props.width} height={props.height} viewBox="0 0 42 70">
			<path fill={props.color} transform={`rotate(${direction} 21 35)`} d="M8.9 66.6l.1-.1 31.8-31.8c.2-.2.3-.4.3-.6 0-.2-.1-.5-.3-.6C36.2 28.9 9 1.6 9 1.6l-.2-.1C7.9.5 6.6 0 5.2 0 2.3 0 0 2.3 0 5.2c0 1.4.5 2.7 1.5 3.6l.1.2L26 33.4c.4.4.4.9 0 1.3-3.9 3.9-24.4 24.5-24.4 24.5l-.1.1c-.9 1-1.5 2.2-1.5 3.6 0 2.9 2.3 5.2 5.2 5.2 1.4 0 2.7-.5 3.7-1.5"/>
		</svg>
	);
};

Caret.propTypes = {
	direction: PropTypes.oneOf(['up','right','down','left']),
	style: PropTypes.object,
	color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	marginRight: PropTypes.bool,
	marginLeft: PropTypes.bool,
	scaling: PropTypes.bool
};

Caret.defaultProps = {
	direction: 'right',
	color: 'currentColor', //svg inherit equivalent
	width: 10,
	height: 10
};

export default Caret;