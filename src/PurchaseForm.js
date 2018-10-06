import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { Formik, Field } from 'formik';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Flex from "./components/flex";

import Button, { LinkButton } from './components/button';
import Icon from './components/icon';
import InputGroup from './components/form/input-group';
import { Fieldset, Checkbox, Label } from './components/form';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import tiers from './constants/plans';

import './form.css';

class PurchaseForm extends Component {


	render() {

		const {
			match
		} = this.props;

		const plan = match.params.id;

		const planLabel = tiers[plan].label;

		const fieldProps = {
			boldLabels: true,
			labelsOnTop: true,
			showStatus: false,
			theme: 'accent-outline'
		};

		const client = {
			sandbox:    'YOUR-SANDBOX-APP-ID',
			production: 'YOUR-PRODUCTION-APP-ID',
		};

		return (
			<Formik
				initialValues={{
					quantity:   1,
					email:      ''
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => {

					const qty = values.quantity;

					return (
						<div className="form">
							<Fieldset>
								<h2>You've selected the {planLabel} Plan <LinkButton to="/plans" transparent theme="accent-outline"><Icon icon="keyboard_backspace"/> Change Plan</LinkButton></h2>
							</Fieldset>

							<Fieldset>
								<Label boldLabels>Payment Email</Label>

								<Tabs style={{ marginTop:'1rem'}}>
									<TabList>
										<Tab>Use Your Email</Tab>
										<Tab>Use Anonymous Email</Tab>
									</TabList>
									<TabPanel>
										<Field placeholder="your.email@address" name="email" component={InputGroup} {...fieldProps} style={{ marginTop:'1rem', marginBottom:'1rem' }} />
										<p>
											<strong>Important:</strong> You will receive your account credentials by email.
											Please make sure you use this email throughout the payment process.
										</p>
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
												<strong>[ generated email ]</strong> <br />
												<strong>[ generated password ]</strong>
											</p>
										</div>
									</TabPanel>
								</Tabs>
							</Fieldset>

							<Fieldset>
								<Field label="Account Quantity" name="quantity" component={InputGroup} {...fieldProps} />
								<Flex className="total-cost">
									<Flex grow>{qty} accounts @$12 each</Flex>
									<div><strong>${qty*12}.00 per year</strong></div>
								</Flex>
							</Fieldset>

							<Fieldset>
								<PaypalExpressBtn
									client={client}
									currency={'USD'}
									total={qty*12.00}
									env="sandbox" // TODO: Need to pass the license code as the “custom” variable value e.g. md5 hash returned from add license API call
								/>
								<LinkButton to="/registration" type="submit" theme="accent" size="lg">PayPal ...</LinkButton>
							</Fieldset>
						</div>
					)}
				}
			</Formik>
		);
	}
}

PurchaseForm.propTypes = {
	close: PropTypes.func,
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string
		})
	}),
	plan: PropTypes.string
};

export default PurchaseForm;