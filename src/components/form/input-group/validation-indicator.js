import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Loading from '../../loading/index';

const ValidationIndicator = props => {

	const showValidation = props.touched || props.submitFailed;

	const complete = showValidation && !props.errors && props.hasValue && !props.isFocused;
	const dirtyError = showValidation && !props.asyncValidating && !!props.errors;
	const submitError = showValidation && !!props.errors;

	const c = cn(
		"validation",
		"success",
		{
			"white": props.white,
			"warning": props.errors
		}
	);


	return (
		<div className={ c }>
			{ complete && !props.asyncValidating &&
			<div className="material-icons">done</div>
			}
			{ (dirtyError || submitError) && !props.asyncValidating &&
			<div className="material-icons">error_outline</div>
			}
			{ props.asyncValidating &&
			<Loading spinner centeredBlock={false} loading size={'sm'} theme={'accent'} />
			}
		</div>
	);
};

ValidationIndicator.propTypes = {
	asyncValidating: PropTypes.bool,
	errors: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	]),
	errorTheme: PropTypes.string,
	hasValue: PropTypes.bool,
	isFocused: PropTypes.bool,
	submitFailed: PropTypes.bool,
	touched: PropTypes.bool,
	validateOnChange: PropTypes.bool,
	white: PropTypes.bool
};

export default ValidationIndicator;
