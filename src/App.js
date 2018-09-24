import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import Header from './components/header'
import LoginForm from './LoginForm';
import Purchase from './Purchase';

class App extends Component {


	render() {

		const isAuth = false;

		return (
			<div className="app">
				<Header isAuth={isAuth} />
				<Route path="/login" component={LoginForm}/>
				<Route path="/purchase" component={Purchase}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {

})(App);