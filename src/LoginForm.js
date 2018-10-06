import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from './auth/actions/user.actions';

import { Formik, Field } from 'formik';

import Input from './components/input';
import Button from './components/button';
import View from "./components/view";
import Flex from './components/flex';
import { Fieldset } from './components/form';
import InputGroup from './components/form/input-group';

const fieldProps = {
	boldLabels: true,
	labelsOnTop: true,
	showStatus: false,
	theme: 'accent-outline'
};

const login = userActions.login;
const logout = userActions.logout;

class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.props.logout();
	}

	handleSubmit = (values) => {
		if (values.email && values.password) {
			this.props.login(values.email, values.password);
		}
	};

	render() {
		return (
			<div className="full-window accent">
				<View>
					<h1 className="hero-text">Sign In</h1>
					<Formik
						onSubmit={this.handleSubmit}
						render={ props =>
							<form onSubmit={props.handleSubmit} className="form">
								<Fieldset>
									<Field component={InputGroup} type="email" name="email" placeholder="Email" {...fieldProps} />
									<Field component={InputGroup} type="password" name="password" placeholder="Password" {...fieldProps} />
								</Fieldset>
								<Fieldset>
									<Button size="lg" type="submit" theme="white">Sign In</Button>
								</Fieldset>

							</form>
						}
					/>
				</View>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { loggingIn } = state.authentication;
	return {
		loggingIn
	};
}

export default connect(mapStateToProps, {
	login,
	logout
})(LoginForm);
