import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Button from './Button';

const LinkButton = (props) => {
	const {
		history,
		to,
		onClick,
		...rest
	} = props;

	return (
		<Button
			onClick={(event) => {
				onClick && onClick(event);
				history.push(to)
			}}
			{ ...rest }
		/>
	)
};

LinkButton.propTypes = {
	active: PropTypes.bool,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	theme: PropTypes.string,
	rounded: PropTypes.bool,
	transparent: PropTypes.bool,
	size: PropTypes.oneOf(['sm','md','lg','xl']),
};

LinkButton.defaultProps = {
	caretDirection: 'left',
	padding: true,
	passEvent: false,
	rounded: true,
	roundLeft: true,
	roundRight: true,
	size: 'md',
	type: 'button'
};

export default withRouter(LinkButton)