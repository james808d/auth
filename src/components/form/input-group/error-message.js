import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';


const ErrorMessage = ({ atTop, children }) => {

	const c = cn(
		"error-message",
		{
			'grid1': atTop
		}
	);

	return (
		<div className={ c }>
			{!_.isArray(children) && <div>{ children }</div>}
			{_.isArray(children) && children.map(function(error, i){
				return <div key={i}>Error: { children }</div>;
			})}
		</div>
	);
};

ErrorMessage.propTypes = {
	atTop: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	])
};

export default ErrorMessage;