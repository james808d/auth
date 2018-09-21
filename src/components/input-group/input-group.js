import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import cn from 'classnames';

import Flex from '../flex';
import ValidationIndicator from './validation-indicator';
import ClearInputControl from './clear-input-control';
import InputField from '../input';
import Label from './label';
import ErrorMessage from './error-message';
import HelpText from './help-text';

import * as normalizerFunctions from '../../constants/normalizers';

import _ from 'lodash';

import './input-group.css';

class InputGroup extends PureComponent {

	state = {
		asyncValidated: false,
		value: null,
		valueChanged: false
	};

	componentDidMount() {
		if(this.props.updateOnBlur) {
			this.setState({
				value: this.props.field.value
			});
		}
	}

	componentDidUpdate(prevProps) {
		if(!prevProps.reset && this.props.reset) {
			this.setState({
				valueChanged:false
			});
		}
		if(!prevProps.asyncValidating && this.props.asyncValidating){
			this.setState({
				asyncValidated: true
			});
		}
	}

	handleFocus = () => {
		this.props.isFocusedOnFocus();
		this.props.onFocus && this.props.onFocus();
	};

	handleBlur = event => {
		this.props.isFocusedOnBlur();

		if(this.props.updateOnBlur) {
			this.props.field.onChange(event);
		}

		if(this.props.onBlur) {
			this.props.onBlur(this.props.field.name, true);
		}

		this.props.field.onBlur(event);
	};

	handleChange = event => {

		const {
			field: {
				name,
				onChange
			},
			form: {
				setFieldValue
			},
			normalizers,
			type,
			updateOnBlur
		} = this.props;


		let value = event && event.target ? event.target.value : event;

		this.setState({
			valueChanged: true
		});

		if(normalizers && normalizers.length) {
			normalizers.map( n => {
				value = normalizerFunctions[n](value);
			});

			if(updateOnBlur) {
				return this.setState({value: value});
			} else {
				return setFieldValue(name, value);
			}
		}

		if(updateOnBlur && type !== 'toggle-group') {
			this.setState({value: value});
		} else {
			onChange(event);
		}
	};

	render() {

		const {
			asyncValidated,
			valueChanged
		} = this.state;

		const {
			asyncValidating,
			clearValue,
			children,
			field: {
				name
			},
			form: {
				errors:_errors,
				initialValues,
				touched:_touched
			},
			helpText,
			inlineControl,
			inputErrorTheme,
			isFocused,
			label,
			labelPosition,
			placeholder,
			required,
			readOnly,
			readOnlyLabel,
			showLabel,
			showOptionalLabel,
			showRequiredLabel,
			showStatus,
			submitFailed,
			theme,
			type,
			updateOnBlur,
			...rest
		} = this.props;

		const value = updateOnBlur ? this.state.value : this.props.field.value;
		const errors = _.get(_errors, name);
		const touched = _.get(_touched, name);
		const labelsOnTop = labelPosition === 'top';

		const wrapper = cn(
			"input-group",
			{
				"labels-on-top":labelsOnTop
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

				<div className="inner">
					<Flex justifyContent={'flex-start'}>
						<Flex alignItems={'stretch'} className="input-wrapper">

							{ children }

							{/*<InputField
								{ ...rest }
								errors={errors}
								initialValue={initialValues && initialValues[name]}
								isFocused={isFocused}
								name={name}
								onBlur={this.handleBlur}
								onChange={this.handleChange}
								onFocus={this.handleFocus}
								placeholder={placeholder}
								readOnly={readOnly}
								theme={theme}
								touched={touched}
								type={type}
								value={value}
							/>*/}

							{ clearValue &&
							<ClearInputControl
								clearFunction={clearValue}
								hasValue={!!value}
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
							hasValue={!!value}
							isFocused={isFocused}
							submitFailed={submitFailed}
							touched={touched}
							validateOnChange={type === 'select'}
							valueChanged={valueChanged}
							white={ theme === 'whiteOnColor'}
						/>
						}
					</Flex>
				</div>

				{
					helpText &&
					<HelpText
						atTop={ labelsOnTop }
					>
						{helpText}
					</HelpText>
				}

				{
					!readOnly && (touched || submitFailed || asyncValidated) && errors &&
					<ErrorMessage
						atTop={ labelsOnTop }
					>
						{ errors }
					</ErrorMessage>
				}
			</div>
		);
	}
}

InputGroup.propTypes = {

	children: PropTypes.node,

	// from formik Field
	field: PropTypes.shape({
		name: PropTypes.string,
		onBlur: PropTypes.func,
		onChange: PropTypes.func,
		value: PropTypes.any
	}),
	form: PropTypes.shape({
		dirty: PropTypes.bool,
		errors: PropTypes.object,
		handleBlur: PropTypes.func,
		handleChange: PropTypes.func,
		handleReset: PropTypes.func,
		handleSubmit: PropTypes.func,
		initialValues: PropTypes.object,
		isSubmitting: PropTypes.bool,
		isValid: PropTypes.bool,
		resetForm: PropTypes.func,
		setError: PropTypes.func,
		setErrors: PropTypes.func,
		setFieldError: PropTypes.func,
		setFieldTouched: PropTypes.func,
		setFieldValue: PropTypes.func,
		setFormikState: PropTypes.func,
		setStatus: PropTypes.func,
		setSubmitting: PropTypes.func,
		setTouched: PropTypes.func,
		setValues: PropTypes.func,
		submitForm: PropTypes.func,
		touched: PropTypes.object,
		validateForm: PropTypes.func,
		validateOnBlur: PropTypes.bool,
		validateOnChange: PropTypes.bool,
		values: PropTypes.object
	}),
	//

	asyncValidating: PropTypes.bool,
	border: PropTypes.bool,
	columns: PropTypes.string,
	cornerRadius: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	clearValue: PropTypes.func,
	disableHelpTextDisplay: PropTypes.bool,
	errorTheme: PropTypes.string,
	fixedErrorHeight: PropTypes.bool,
	fixedHelpTextHeight: PropTypes.bool,
	fontSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
	helpText: PropTypes.any,
	inlineControl: PropTypes.element,
	inputTheme: PropTypes.string,
	inputErrorTheme: PropTypes.string,
	inputReadOnlyTheme: PropTypes.string,
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
	labelPosition: PropTypes.oneOf(['side', 'top']),
	normalizers: PropTypes.array,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
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
	type: PropTypes.oneOf(['text', 'password', 'textarea', 'select', 'date', 'hidden', 'time', 'toggle-group']).isRequired,
	updateOnBlur: PropTypes.bool,
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
	labelPosition: 'side',
	showLabel: true,
	showRequiredLabel: true,
	showStatus: true,
	type: 'text',
	verticalMarginSize: 'sm'
};


const WrappedInputGroup = props =>
	<Field
		{ ...props }
		component={ InputGroup }
	/>;


export default WrappedInputGroup;
