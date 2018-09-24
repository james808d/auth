import React, { Component } from 'react';

import { PlanCard } from "./components/card";
import Flex from "./components/flex";
import Section from "./components/section";
import View from "./components/view";


class Purchase extends Component {

	state = {
		anonymousEmail: false,
		showHelp: false
	};

	render() {

		return (
			<View>

				<h1 className="hero-text">Select your plan</h1>

				<Flex alignContent="stretch" alignItems="stretch" justifyContent="stretch" style={{ marginLeft: -8, marginRight: -8 }}>
					<PlanCard tier={"basic"} />
					<PlanCard tier={"advanced"} />
					<PlanCard tier={"enterprise"} />
				</Flex>
			</View>
		);
	}
}

export default Purchase;