import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, passProps, ...rest }) => (
	<Route {...rest} render={props => (
		localStorage.getItem('user')
			? <Component {...passProps} {...props} />
			: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
	)} />
);