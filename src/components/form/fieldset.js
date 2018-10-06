import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './fieldset.css';

const Fieldset = ({ center, children, className }) => {

	const c = cn(
		"fieldset",
		className,
		{
			"centered":center
		}
	);

	return (
		<div className={c}>
			{ children }
		</div>
	)};

Fieldset.propTypes = {
	children: PropTypes.any,
	center: PropTypes.bool,
	className: PropTypes.string
};

export default Fieldset;