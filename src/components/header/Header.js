import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import View from '../view'
import Flex from '../flex';
import './header.css';

const Header = ({ isAuth }) => {

	const c = cn(
		"header",
		{
			"authorized":isAuth
		}
	);

	return (
		<View>
			<Flex className={c} alignContent="space-between">
				<Flex alignItems="flex-start" justifyContent="flex-start">
					<Link to="/">Company Name</Link>
				</Flex>
				<div>
					<Link to="/login">Login</Link>
				</div>
				<div style={{paddingLeft:16}}>
					<Link to="/purchase">Purchase</Link>
				</div>
			</Flex>
		</View>
	);
};

Header.propTypes = {
	isAuth: PropTypes.bool
};

export default Header;