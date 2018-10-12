import React from 'react';
import { connect } from 'react-redux';

import View from "./components/view";

/*

• Verify email is available
• Get PaymentID from license record

 */

const Validate = ({ details }) =>
	<View>
		<h2>Validating email ...</h2>
		<p>{ details }</p>
	</View>;

function mapStateToProps(state) {
	return {
		details: state.app.planDetails && state.app.planDetails.email
	};
}

export default connect(mapStateToProps)(Validate);