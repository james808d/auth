import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/index';

const InputControlButton = ({
	children,
	fontSize,
	width,
	...rest
}) => {
	return (
		<div className="input-control-button" style={{ basis: width }}>
			<Button
				{ ...rest }
				size={ fontSize }
				type={'button'}
			>
				{ children }
			</Button>
		</div>
	);
};

InputControlButton.propTypes = {
	children: PropTypes.any,
	fontSize: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

InputControlButton.defaultProps = {
	theme: 'lightOutline'
};

export default InputControlButton;