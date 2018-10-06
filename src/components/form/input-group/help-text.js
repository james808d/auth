import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const HelpText = ({ atTop, children }) => {

	const c = cn(
		"help-text",
		{
			'grid1': atTop
		}
	);

	return (
		<div className={ c }>
			{ children }
		</div>
	);
};

HelpText.propTypes = {
	atTop: PropTypes.bool,
	children: PropTypes.any
};

export default HelpText;