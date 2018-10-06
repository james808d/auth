import React from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';

import './password-strength.css';

var strength = {
	0: "Worst",
	1: "Bad",
	2: "Weak",
	3: "Good",
	4: "Strong"
};

const PasswordStrength = ({ value }) => {

	const result = zxcvbn(value);

	return (
		<div>
			<meter
				min="0"
				max="4"
				low="1"
				high="3"
				optimum="4"
				value={result.score}
			>
				<div />
			</meter>
			<p>
				{ result.score === 4 && "Password Ok" }
				{ result.score < 4 && "Password too weak" }
			</p>
		</div>
	);
};


PasswordStrength.propTypes = {
	value: PropTypes.string
};

PasswordStrength.defaultProps = {
	value: ""
};

export default PasswordStrength;