import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Flex from '../flex';
import ValidationIndicator from './validation-indicator';
import ClearInputControl from './clear-input-control';
import Label from './label';
import ErrorMessage from './error-message';
import HelpText from './help-text';
import Input from '../input';

import './input-group.css';

const InputGroup = ({
	asyncValidating,
	className,
	clearValue,
	errors,
	hasValue,
	helpText,
	inlineControl,
	inputErrorTheme,
	inputProps,
	inputRounded,
	inputTheme,
	isFocused,
	label,
	labelsOnTop,
	required,
	readOnly,
	readOnlyLabel,
	showLabel,
	showOptionalLabel,
	showRequiredLabel,
	showStatus,
	submitFailed,
	theme,
	touched,
	type
}) => {

	const wrapper = cn(
		"input-group",
		{
			"labels-on-top":labelsOnTop
		},
		className
	);

	const input = cn(
		{
			"has-clear-input-ctrl": !!clearValue
		}
	);

	return (
		<div className={ wrapper }>
			{ showLabel &&
			<Label
				atTop={ labelsOnTop }
				readOnly={readOnly}
				required={required}
				showOptionalLabel={showOptionalLabel}
				showRequiredLabel={showRequiredLabel}
			>
				{ readOnly && readOnlyLabel ? readOnlyLabel : label }
			</Label>
			}

			<Flex className="inner" justifyContent={'flex-start'}>
				<Flex alignItems={'stretch'} className="input-wrapper" grow>

					<Input {...inputProps} className={input} />

					{ clearValue &&
					<ClearInputControl
						clearFunction={clearValue}
						hasValue={hasValue}
						theme={theme}
					/>
					}

				</Flex>
				{
					inlineControl && inlineControl
				}
				{ showStatus &&
				<ValidationIndicator
					asyncValidating={asyncValidating}
					errors={errors}
					errorTheme={inputErrorTheme}
					hasValue={hasValue}
					isFocused={isFocused}
					submitFailed={submitFailed}
					touched={touched}
					validateOnChange={type === 'select'}
					white={ theme === 'whiteOnColor'}
				/>
				}
			</Flex>


			{
				helpText &&
				<HelpText
					atTop={ labelsOnTop }
				>
					{helpText}
				</HelpText>
			}

			{
				!readOnly && ( touched || submitFailed ) && errors &&
				<ErrorMessage
					atTop={ labelsOnTop }
				>
					{ errors }
				</ErrorMessage>
			}
		</div>
	);
};

InputGroup.propTypes = {
	asyncValidating: PropTypes.bool,
	className: PropTypes.string,
	border: PropTypes.bool,
	columns: PropTypes.string,
	cornerRadius: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	clearValue: PropTypes.func,
	disableHelpTextDisplay: PropTypes.bool,
	errors: PropTypes.array,
	errorTheme: PropTypes.string,
	fixedErrorHeight: PropTypes.bool,
	fixedHelpTextHeight: PropTypes.bool,
	fontSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
	hasValue: PropTypes.bool,
	helpText: PropTypes.any,
	inlineControl: PropTypes.element,
	inputProps: PropTypes.object,
	inputTheme: PropTypes.string,
	inputErrorTheme: PropTypes.string,
	inputReadOnlyTheme: PropTypes.string,
	inputRounded: PropTypes.bool,
	inputWidth: PropTypes.oneOfType([
		PropTypes.oneOf(['full','short','medium']),
		PropTypes.number // will be converted to rems
	]),
	isFocused: PropTypes.bool,
	isFocusedOnBlur: PropTypes.func,
	isFocusedOnFocus: PropTypes.func,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	labelsOnTop: PropTypes.bool,
	options: PropTypes.array, // select,
	placeholder: PropTypes.string,
	readOnly: PropTypes.bool,
	readOnlyLabel: PropTypes.string,
	required: PropTypes.bool,
	reset: PropTypes.bool,
	showLabel: PropTypes.bool,
	showOptionalLabel: PropTypes.bool,
	showRequiredLabel: PropTypes.bool,
	showStatus: PropTypes.bool,
	submitFailed: PropTypes.bool,
	theme: PropTypes.string,
	touched: PropTypes.bool,
	verticalMarginSize: PropTypes.oneOf(['none', 'xs','sm','md','lg'])
};

InputGroup.defaultProps = {
	autoComplete: true,
	border: true,
	columns: '33% auto',
	errorTheme: 'warningOutline',
	fixedHelpTextHeight: true,
	fontSize: 'md',
	html5Date: true,
	html5Time: true,
	inputErrorTheme: 'warning',
	inputWidth: 'full',
	labelsOnTop: false,
	showLabel: true,
	showRequiredLabel: true,
	showStatus: true,
	type: 'text',
	verticalMarginSize: 'sm'
};

export default InputGroup;