import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Label = ({ atTop, children, readOnly, required, showRequiredLabel, showOptionalLabel }) => {

	const c = cn(
		"label",
		{
			'grid1': atTop
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
	children: PropTypes.any,
	hasHelpText: PropTypes.bool,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	showOptionalLabel: PropTypes.bool,
	showRequiredLabel: PropTypes.bool
};

export default Label;