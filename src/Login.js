import React, { Component } from 'react';
import { Formik, Field } from 'formik';

import Input from './components/input';
import Button from './components/button';

class Login extends Component {
	render() {
		return (
			<div>
				Login Form
				<Formik
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit");
							alert(JSON.stringify(values, null, 2));
							actions.setSubmitting(false);
						}, 1000);
					}}
					render={props =>
						<form onSubmit={props.handleSubmit}>
							<Field component={Input} type="email" name="email" placeholder="Email" />
							<Field component={Input} type="password" name="password" placeholder="Password" />
							<Button type="submit">Submit</Button>
						</form>
					}
				/>
			</div>
		);
	}
}

export default Login;
