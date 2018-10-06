import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import './loading.css';

const spinnerSize = {
	sm: {
		diameter: 20,
		stroke: 5
	},
	md: {
		diameter: 30,
		stroke: 4
	},
	lg: {
		diameter: 40,
		stroke: 3
	}
};

const dotSize = {
	sm: {
		size:6,
		margin:6
	},
	md: {
		size:12,
		margin:8
	},
	lg: {
		size:16,
		margin:10
	}
};


const Loading = (props) => {

	const wrapper = classNames(
		'loading-wrapper',
		{
			'loading-wrapper-flex': props.display === 'flex'
		}
	);

	const loadingIndicatorClasses = classNames(
		'loading',
		{'animated-loading-circles':!props.spinner},
		{'reversed':props.reversed},
		{'inline':props.display === 'inline'}
	);

	const loadingInner = classNames(
		'loading-inner',
		loadingIndicatorClasses,
		{
			'item': props.centered
		}
	);

	const circle = {
		borderRadius:'50%',
		display:'inline-block',
		position: 'relative',
		height:dotSize[props.size].size,
		width:dotSize[props.size].size,
		marginRight:dotSize[props.size].margin
	};

	if(props.spinner) {

		const radius = 18;
		const viewBoxDimension = radius + (spinnerSize[props.size].stroke / 2);

		const svg = (
			<svg height="100%" width="100%" viewBox={-viewBoxDimension + ' ' + -viewBoxDimension + ' ' + viewBoxDimension*2 + ' ' + viewBoxDimension*2} >
				<g strokeWidth={spinnerSize[props.size].stroke} fill="none" fillRule="evenodd">
					<circle cx={0} cy={0} r={radius} />
					<path className="spinner-circle" d={'M'+ radius + ' ' + 0 + 'c0-9.94-8.06-18-18-18'} />
				</g>
			</svg>
		);

		const style = {
			height: spinnerSize[props.size].diameter,
			width: spinnerSize[props.size].diameter,
			verticalAlign:'middle',
			flex: 1
		};

		return (
			<div style={style}>
				{svg}
			</div>
		);
	}

	return (
		<div className={ wrapper }>
			<div className={ loadingInner }>
				<span className="circle" style={circle} />
				<span className="circle" style={circle} />
				<span className="circle" style={circle} />
			</div>
		</div>
	);

};

Loading.propTypes = {
	spinner: PropTypes.bool,
	centered: PropTypes.bool, // can only be centered if block or flex ... worth testing?
	display: PropTypes.oneOf(['inline','block','flex','item']),
	inButton: PropTypes.bool,
	size: PropTypes.oneOf(['sm','md','lg']),
	style: PropTypes.object,
	reversed: PropTypes.bool,
	theme: PropTypes.oneOf(['dark', 'light', 'accent', 'white']),
	previewContent: PropTypes.bool,
	loadingBackground: PropTypes.bool,
	fillLoading: PropTypes.bool
};

Loading.defaultProps = {
	centered: true,
	display: 'flex',
	size: 'md',
	theme: 'accent'
};

export default Loading;