import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const ClearInputControl = props => {

	const style = {
		opacity: props.hasValue ? 1 : 0
	};

	return (
		<div style={style} className="clear-input-ctrl">
			<Button
				onClick={props.clearFunction}
				icon={'clear'}
				iconPadding={false}
				padding={false}
				transparent
				theme={props.theme}
				size={'sm'}
			/>
		</div>
	);
};

ClearInputControl.propTypes = {
	hasValue: PropTypes.bool,
	clearFunction: PropTypes.func,
	theme: PropTypes.string
};

export default ClearInputControl;