import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames';

import './modal.css';
import View from '../view/view';

const Modal = props => {

	const c1 = cn(
		"overlay",
		props.overlayClassName
	);

	const c2 = cn(
		"window",
		`window-${props.width}`,
		props.className
	);

	return (
		<div className={"modal"}>

			<div className={c2}>
				{ props.children }
			</div>
			<div className={c1} />

		</div>
	);
};

Modal.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	overlayClassName: PropTypes.string,
	width: PropTypes.oneOf(['sm','md','lg']),
};

Modal.defaultProps = {
	width: 'lg'
};

export default Modal;