import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Transition } from 'react-spring'

import { setPlan } from './actions/actions';
import { PlanCard } from "./components/card";
import Flex from "./components/flex";
import View from "./components/view";
import Button from './components/button/Button';

import tiers from './constants/plans';
import { Formik } from 'formik';

import PurchaseForm from './PurchaseForm';

class Purchase extends Component {

	render() {

		return (
			<div className="full-window accent">
				<View>

					{/*<Transition
						from={{ opacity: 0, top: windowHeight}}
						enter={{ opacity: 1, top: 0 }}
						leave={{ opacity: 0, top: windowHeight, pointerEvents: 'none' }}>
					{
						plan &&
						( styles =>
							<PurchaseForm
								close={this.closeModal}
								plan={plan}
								style={styles}
							/>
						)
					}
					</Transition>*/}

					<h1 className="hero-text">Select your plan</h1>
					<Flex alignContent="stretch" alignItems="stretch" justifyContent="stretch" style={{ marginLeft: -8, marginRight: -8 }}>
						<PlanCard tier={"basic"} />
						<PlanCard tier={"advanced"} />
						<PlanCard tier={"enterprise"} />
					</Flex>
				</View>
			</div>
		);
	}
}

Purchase.propTypes = {
	plan: PropTypes.string,
	setPlan: PropTypes.func
};

function mapStateToProps(state) {
	return {
		plan: state.app.plan
	};
}

export default connect(mapStateToProps, {
	setPlan
})(Purchase);