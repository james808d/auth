import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter, Switch } from 'react-router-dom';

import Header from './components/header'
import LoginForm from './LoginForm';
import Purchase from './SelectPlan';
import PurchaseForm from './CapturePlanDetails';
import Registration from './RegistrationForm';
import Thanks from './Thanks';
import Validate from './Validate';

import { alertActions } from './auth/actions/alert.actions';
import { PrivateRoute } from './auth/PrivateRoute'

import Test from './Test';

const clear = alertActions.clear;

// todo: 404 page
// todo: Error page
// todo: Login page

class App extends Component {

	componentWillReceiveProps(nextProps) {
		const locationChanged = nextProps.location !== this.props.location;

		if(locationChanged) {
			//this.props.clear();
		}
	}

	render() {

		const isAuth = false;
		const {
			alert,
			authentication
		} = this.props;

		return (
			<div className="app">

				{alert.message &&
					<div className={`alert ${alert.type}`}>{alert.message}</div>
				}

				<Header isAuth={isAuth} />
				<Route path="/login" component={LoginForm}/>
				<Route path="/plans" exact component={Purchase} />
				<Route path="/plans/:id" component={PurchaseForm} />

				<PrivateRoute exact path="/test" component={Test} passProps={{authentication:authentication}} />
				<Route path="/registration" component={Registration} />
				<Route path="/thank-you" component={Thanks} />
				<Route path="/validate" component={Validate} />

			</div>
		);
	}
}

App.propTypes = {

};


function mapStateToProps(state) {

	const { alert, authentication } = state;
	return {
		alert,
		authentication
	};
}


export default withRouter(connect(mapStateToProps, {
	clear
})(App));