import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { userActions } from './auth/actions/user.actions';

import Flex from "./components/flex";

import Button, { LinkButton } from './components/button';
import Icon from './components/icon';
import InputGroup from './components/form/input-group';
import { Fieldset, Checkbox, Label } from './components/form';
import PasswordStrength from './components/password-strength';

import './form.css';

const register = userActions.register;

class RegistrationForm extends Component {

	handleSubmit = (values) => {
		if (values.email && values.password) {
			this.props.register({ username:`${values.email}@${values.domain}`, password:values.password});
		}
	};

	render() {

		const fieldProps = {
			boldLabels: true,
			labelsOnTop: true,
			showStatus: false,
			theme: 'accent-outline'
		};

		return (
			<Formik
				initialValues={{
					domain: 'discreet.email',
					quantity:   1,
					email:      ''
				}}
				onSubmit={this.handleSubmit}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
				}) => {

					return (
						<form className="form" onSubmit={handleSubmit}>
							<Fieldset>
								<h2>Thank you for choosing Discreet&nbsp;Mail!</h2>
								<p>To register your new email account please enter your payment email address and the registration code sent to you.</p>
							</Fieldset>

							<Fieldset>
								<Field
									label="Email Address Associated to Payment"
									placeholder="Email used to process payment"
									name="paymentEmail"
									component={InputGroup}
									{...fieldProps}
									style={{ marginTop:'1rem', marginBottom:'1rem' }}
								/>
								<Field
									label="License Code"
									placeholder="License code from email"
									name="license"
									component={InputGroup}
									{...fieldProps}
									style={{ marginTop:'1rem', marginBottom:'1rem' }}
								/>


								<Flex alignItems="flex-end">
									<Field
										label="New Email Account"
										placeholder="Choose your new Discreet Email address"
										name="email"
										component={InputGroup}
										{...fieldProps}
										style={{ marginTop:'1rem', marginBottom:'1rem' }}
									/>
									<div className="accent-outline no-border" style={{ marginBottom:'1.25rem', marginLeft:6 }}>@</div>
									<Field
										readOnly
										name="domain"
										component={InputGroup}
										{...fieldProps}
										theme="accent-outline no-border"
										style={{ marginTop:'1rem', marginBottom:'1rem' }}
									/>
								</Flex>

								<p>This will be your new email address. Please choose a unique address, first come, first served.</p>

								<Field
									label="Choose Password"
									placeholder=""
									name="password"
									component={InputGroup}
									{...fieldProps}
									type="password"
									style={{ marginTop:'1rem', marginBottom:0 }}
								/>
								<PasswordStrength value={values.password} />


								<p style={{color:'red'}}>Recommend NOT generating random password in js, all modern browsers do this natively and more securely</p>

								<Field
									label="Confirm Password"
									placeholder=""
									name="confirmPassword"
									component={InputGroup}
									{...fieldProps}
									type="password"
									style={{ marginTop:'1rem', marginBottom:'1rem' }}
								/>
								<p>
									<strong>Important:</strong> Please store this password in a secure place. We are not able to restore your password or to
									reset your account because all of your data is end-to-end encrypted.
								</p>
								<Field
									label="Reset Email"
									placeholder="Email to use to reset your password if lost."
									name="resetPassword"
									component={InputGroup}
									{...fieldProps}
									type="password"
									style={{ marginTop:'1rem', marginBottom:'1rem' }}
								/>
								<p style={{color:'red'}}>The above says it can't be reset ???</p>
							</Fieldset>

							<Fieldset>
								<Button type="submit" theme="accent" size="lg">Create Account</Button>
							</Fieldset>

						</form>
					)}
				}
			</Formik>
		);
	}
}

RegistrationForm.propTypes = {
	close: PropTypes.func,
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string
		})
	}),
	plan: PropTypes.string
};

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {
	register
})(RegistrationForm);