import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { Formik, Field } from 'formik';

import { setPlanDetails, getUser, getLicenseRequest } from './actions/actions';

import Flex from "./components/flex";
import Button, { LinkButton } from './components/button';
import Icon from './components/icon';
import InputGroup from './components/form/input-group';
import { Fieldset, Label } from './components/form';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import View from "./components/view";
import tiers from './constants/plans';

import './form.css';

class CapturePlanDetails extends Component {

	randomEmail = () => {
		let email = "";
		const first = "abcdefghijklmnopqrstuvwxyz";
		const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (let i = 0; i < 8; i++)
			i === 0 ? email += first.charAt(Math.floor(Math.random() * first.length)) :
				email += possible.charAt(Math.floor(Math.random() * possible.length));

		return `${email}@discreet.mail`;
	};

	randomPassword = () => {

		const length = this.props.passwordLength;
		const string = "abcdefghijklmnopqrstuvwxyz"; //to upper
		const numeric = '0123456789';
		const punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

		let password = "";
		let character = "";

		while( password.length<length ) {
			const entity1 = Math.ceil(string.length * Math.random()*Math.random());
			const entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
			const entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());

			let hold = string.charAt( entity1 );
			hold = (password.length%2==0)?(hold.toUpperCase()):(hold);

			character += hold;
			character += numeric.charAt( entity2 );
			character += punctuation.charAt( entity3 );
			password = character;
		}
		password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
		return password.substr(0, length);
	};


	state = {
		randomEmail: this.randomEmail(),
		randomPassword: this.randomPassword(),
		useRandom: 0
	};

	updateRandomEmail = () => this.setState({
		randomEmail: this.randomEmail()
	});

	updateRandomPassword = () => this.setState({
		randomPassword: this.randomPassword()
	});

	updateTab = index => this.setState({
		useRandom: index
	});

	planId = () => {
		return 1;
	};

	render() {

		const {
			getUser,
			getLicense,
			setPlanDetails,
			match
		} = this.props;

		const {
			randomEmail,
			randomPassword,
			useRandom
		} = this.state;

		const plan = match.params.id;

		const planLabel = tiers[plan].label;

		const fieldProps = {
			boldLabels: true,
			labelsOnTop: true,
			showStatus: false,
			theme: 'dark-outline'
		};

		return (
			<Formik
				enableReinitialize
				initialValues={{
					quantity:   1,
					email:      '',
					randomEmail: randomEmail,
					randomPassword: randomPassword,
					plan: this.planId()
				}}
				onSubmit={async (values, { setFieldError, setSubmitting }) => {

					// 1: IF RANDOM, try to create user on server so we know email is available
					// 2: get license from server for user

					const data = {
						createUser: useRandom,
						email: useRandom ? values.randomEmail : values.email,
						password: useRandom ? values.randomPassword : null,
						secretPassword: useRandom ? this.randomPassword() : null,
						quantity: values.quantity
					};

					setPlanDetails(data);


					try {

						// todo: why is this the ACTION ???? { type:'SET_USER', ... }
						const emailAvailable = await getUser(data);


						// if email is not available stop and setFieldError on email

						if (emailAvailable) {
							getLicenseRequest(data);
						}

					} catch (errors) {
						errors.forEach( err => {
							console.warn(err);
							setFieldError(err.field, err.error); // Map errors to fields
						});
					}

					// todo: after all this, go to the screen allowing payment
					// this.props.history.push('/select-payment');
				}}
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

					const qty = values.quantity;

					return (
						<form onSubmit={handleSubmit}>

							<div className="accent">
								<View>
									<LinkButton to="/plans" transparent theme="reversed"><Icon icon="keyboard_backspace"/> Change Plan</LinkButton>
									<h2 style={{ marginBottom:16 }}>You've selected the {planLabel} Plan</h2>
								</View>
							</div>

							<div className="form">
								<Fieldset>
									<h3 style={{ paddingTop:32, marginBottom:0 }}>Plan information</h3>
								</Fieldset>

								<Fieldset>
									<Label boldLabels>Payment Email</Label>
									<p style={{ marginTop:16 }}>
										<strong>Important:</strong> You will receive your account credentials by email.
										Please make sure you use the same email throughout the payment process.
									</p>

									<Tabs style={{ marginTop:'1rem'}} onSelect={ this.updateTab }>
										<TabList>
											<Tab>Use Your Email</Tab>
											<Tab>Use Anonymous Email</Tab>
										</TabList>
										<TabPanel>

											<Field placeholder="your.email@address" name="email" component={InputGroup} {...fieldProps} style={{ marginTop:'1rem', marginBottom:'1rem' }} />

										</TabPanel>
										<TabPanel>
											<div style={{ marginBottom:'1rem' }}>
												We can provide a

												<Popup
													contentStyle={{ padding:'1rem', width: 360 }}
													trigger={<a data-tip data-for='tempEmail' style={{ margin:'0 4px'}}>48 hour temporary payment email</a>}
													position="bottom center"
												>
													<React.Fragment>
														<p>To complete the payment process we will create a temporary email
														address and password for you. You can use this email address to
														purchase your Discreet Email account privately from PayPal or CoinPayments.
														</p>
														<p style={{ marginBottom:0 }}>Once payment is confirmed your temporary email
														account will be enabled. Your payment receipt plus new Discreet
														Email account registration instructions will be provided in your&nbsp;Inbox.</p>
													</React.Fragment>
												</Popup>

												to hide your identity.
												We do not store these credentials and there is no way to recover them.
												PLEASE WRITE THESE CREDENTIALS DOWN AND STORE IN A SAFE LOCATION.
											</div>

											<div className="highlight pad">
												<span style={{ float:'right', position:'relative', top:-8 }}>
													<Icon className="small-text" theme="accent-outline">print</Icon>
													<a className="small-text" href="javascript:window.print()" style={{ marginLeft:2}}>Print Page</a>
												</span>
												<p style={{ marginBottom: 0 }}>
													<Field name="randomEmail" component={InputGroup} {...fieldProps} style={{ marginTop:'1rem', marginBottom:'1rem' }} readOnly label={"Random email"} />
													<Button onClick={ this.updateRandomEmail } >Re-generate</Button>
													<Field name="randomPassword" component={InputGroup} {...fieldProps} style={{ marginTop:'1rem', marginBottom:'1rem' }} readOnly label={"Random password"} />
													<Button onClick={ this.updateRandomPassword } >Re-generate</Button>
												</p>
											</div>
										</TabPanel>
									</Tabs>
								</Fieldset>

								<Fieldset>
									<Field label="Account Quantity" name="quantity" component={InputGroup} {...fieldProps} type="number" />
									<Flex className="total-cost">
										<Flex grow>{qty} accounts @$12 each</Flex>
										<div><strong>${qty*12}.00 per year</strong></div>
									</Flex>
								</Fieldset>

								<Fieldset>
									<Button type="submit" theme="accent" size="lg">Check for availability -></Button>
								</Fieldset>

								{/*<div>User: { this.props.user }</div>*/}

							</div>
						</form>
					)}
				}
			</Formik>
		);
	}
}

CapturePlanDetails.propTypes = {
	close: PropTypes.func,
	getUser: PropTypes.func,
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string
		})
	}),
	passwordLength: PropTypes.number,
	plan: PropTypes.string,
	setPlanDetails: PropTypes.func
};

CapturePlanDetails.defaultProps = {
	passwordLength: 12
};

function mapStateToProps(state) {
	return {
		plan: state.app.plan,
		user: state.app.user
	};
}

export default withRouter(connect(mapStateToProps, {
	getUser,
	setPlanDetails
})(CapturePlanDetails));