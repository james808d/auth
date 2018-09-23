import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment-timezone';

import './input.css';

//import SearchList from '../../search-list/search-list';
//import ToggleGroup from '../../toggle/toggle-group';

const Input = ({
	active,
	className,
	disabled,
	field,
	fontSize,
	form,
	html5Date,
	html5Time,
	initialValue,
	inputTheme,
	name,
	onBlur,
	onChange,
	onFocus,
	options,
	placeholder,
	readOnly,
	inputRef,
	rounded,
	selectProps,
	theme,
	timeOptions,
	type,
	value
}) => {

	const _onBlur = field && field.onBlur || onBlur;
	const _onChange = field && field.onChange || onChange;
	const _name = field && field.name || name;
	const tmpValue = field ? field.value : value;
	let _value;

	if(type === 'date' && tmpValue !== '') {
		_value = moment(tmpValue).format('YYYY-MM-DD')
	} else {
		_value = tmpValue || '';
	}

	const c = cn(
		'input',
		'mono',
		theme,
		`input-${theme}`,
		{
			'active': active,
			'disabled': disabled,
			'rounded': rounded
		},
		className
	);

	const fieldProps = {
		className:c,
		disabled,
		name: _name,
		onChange:_onChange,
		onBlur: _onBlur,
		onFocus,
		placeholder,
		readOnly,
		ref:inputRef,
		value:_value
	};



	switch(type) {

		case 'hidden':
		case 'number':
		case 'password':
		case 'text':
			return (
				<input
					type={type}
					{...fieldProps} />
			);


		case 'textarea':
			return (
				<textarea
					type={'text'}
					{...fieldProps} />
			);


		case 'select':
			/*if( !readOnly && options && options.length ) {
				// note: no sense in rendering a select widget if no options are passed
				return (
					<SearchList
						containerFlex
						expandingInputClosedTheme={theme}
						expandingInputExpandedTheme={inputTheme}
						expandingInputFontSize={fontSize}
						expandingInputProps={{
							errors,
							readOnly,
							touched
						}}
						formMode
						initialValue={initialValue}
						listHoverTheme={'accent'}
						listSelectTheme={theme}
						listTheme={theme}
						options={options}
						selected={value}
						useAutoSizer={useAutoSizer}
						value={props.value}
						{ ...fieldProps }
						{ ...selectProps }
						{ ...rest }
						style={undefined}
					/>
				);
			}*/

			return (
				<input
					type={'text'}
					{...fieldProps} />
			);


		case 'date':
			return (
				<input
					type={html5Date ? 'date' : 'text'}
					{...fieldProps} />
			);

		case 'time':
			return (
				<input
					type={html5Time ? 'time' : 'text'}
					{...fieldProps}
					{...timeOptions} />
			);

		/*case 'toggle-group':
			return (
				<ToggleGroup
					{ ...fieldProps }
					{ ...rest }
					options={options}
					style={undefined}
					selected={props.value}
					theme={inputTheme || theme}
					onClick={props.onChange}
					passEvent
					size={fontSize}
				/>
			);*/

		default:
			return (
				<input
					type={'text'}
					{...fieldProps} />
			);
	}
};

Input.propTypes = {
	active: PropTypes.bool,
	autoComplete: PropTypes.bool,
	autoFocus: PropTypes.bool,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	field: PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.any,
		onChange: PropTypes.func,
		onBlur: PropTypes.func
	}),
	fontSize:PropTypes.string,
	form: PropTypes.shape({
		touched: PropTypes.object,
		errors: PropTypes.object
	}),
	html5Date: PropTypes.bool,
	html5Time: PropTypes.bool,
	initialValue: PropTypes.any,
	isFocused: PropTypes.bool,
	name: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	options: PropTypes.array,
	placeholder: PropTypes.string,
	readOnly: PropTypes.bool,
	inputRef: PropTypes.func,
	rounded: PropTypes.bool,
	selectProps: PropTypes.object,
	setFieldError: PropTypes.func,
	theme: PropTypes.string,
	timeOptions: PropTypes.object,
	type: PropTypes.any,
	useAutoSizer: PropTypes.bool,
	value: PropTypes.any
};

export default Input;