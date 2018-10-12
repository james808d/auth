import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import View from '../view'
import Flex from '../flex';
import './header.css';

const Header = ({ className, isAuth }) => {

	const c = cn(
		"header",
		{
			"authorized":isAuth
		}
	);

	return (
		<div className={className}>
			<View>
				<Flex className={c} alignContent="space-between">
					<Flex alignItems="flex-start" justifyContent="flex-start">
						<Link to="/">Company Name</Link>
					</Flex>
					<div>
						{ process.env.NODE_ENV } /
						{ process.env.REACT_APP_TEST }
					</div>
					<div style={{paddingLeft:16}}>
						<Link to="/plans">Purchase Plan</Link>
					</div>
					<div style={{paddingLeft:16}}>
						<Link to="/registration">Register</Link>
					</div>
				</Flex>
			</View>
		</div>
	);
};

Header.propTypes = {
	className: PropTypes.string,
	isAuth: PropTypes.bool
};

export default Header;