import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './flex.css';


const getGrow = (grow) => {
	if (typeof grow === 'number') {
		return grow;
	} else if (grow) {
		return 1;
	}

	return 0;
};

const getShrink = (shrink, basis) => {
	if (typeof shrink === 'number') {
		return shrink;
	} else if (shrink) {
		return 1;
	} else if (shrink === false) {
		return 0;
	}

	if (basis && basis !== 'auto') {
		return 0;
	}

	return 1;
};

const getBasis = basis => {
	if (basis) {
		const suffix = typeof basis === 'number' ? 'px' : '';
		return basis + suffix;
	}

	return 'auto';
};

const Flex = ({
	alignContent,
	alignItems,
	alignSelf,
	basis,
	children,
	className,
	direction,
	hAlign,
	hideOverflow,
	justifyContent,
	fill,
	grow,
	relative,
	shrink,
	vAlign,
	wrap
}) => {


	const c = cn(
		className,
		"flex",
		{
			"fill":fill,
			"hide-overflow":hideOverflow
		}
	);

	const style = {
		alignItems,
		alignContent,
		alignSelf,
		flexGrow: getGrow(grow),
		flexShrink: getShrink(shrink, basis),
		flexBasis: getBasis(basis),
		flexWrap: wrap,
		justifyContent
	};

	return (
		<div className={c} style={style}>
			{ children }
		</div>
	);

};

Flex.propTypes = {
	alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']),
	alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
	alignSelf: PropTypes.oneOf(['auto','flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
	basis: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	children: PropTypes.any,
	className: PropTypes.string,
	direction: PropTypes.oneOf(['row', 'column']),
	fill: PropTypes.bool,
	grow: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.bool
	]),
	hAlign: PropTypes.bool,
	justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch']),
	hideOverflow: PropTypes.bool,
	relative: PropTypes.bool,
	shrink: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.bool
	]),
	vAlign: PropTypes.bool,
	wrap: PropTypes.bool
};

Flex.defaultProps = {
	alignContent: 'center',
	alignItems: 'center',
	direction: 'row',
	justifyContent: 'center',
};

export default Flex;