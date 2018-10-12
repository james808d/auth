import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PlanCard } from "./components/card";
import Flex from "./components/flex";
import View from "./components/view";

export default class SelectPlan extends Component {

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

SelectPlan.propTypes = {
	plan: PropTypes.string,
	setPlan: PropTypes.func
};