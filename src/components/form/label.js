import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './label.css';

const Label = ({ atTop, boldLabels, children, readOnly, required, showRequiredLabel, showOptionalLabel }) => {

	const c = cn(
		"label",
		{
			'grid1': atTop,
			'bold': boldLabels
		}
	);

	return (
		<div className={ c }>
			<label>
				{ children }
				{ showRequiredLabel && required && <span className="asterisk">*</span> }
				{ showOptionalLabel && !required && !readOnly && <span className="optional"> &mdash;&nbsp;Optional</span> }
			</label>
		</div>
	);
};

Label.propTypes = {
	atTop: PropTypes.bool,
	boldLabels: PropTypes.bool,
	children: PropTypes.any,
	hasHelpText: PropTypes.bool,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	showOptionalLabel: PropTypes.bool,
	showRequiredLabel: PropTypes.bool
};

export default Label;