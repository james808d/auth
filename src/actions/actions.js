import moment from 'moment';

export const setPlanDetails = props => {
	return {
		type: 'SET_PLAN_DETAILS',
		payload: props
	}
};

export const setUser = props => {
	return {
		type: 'SET_USER',
		payload: props
	}
};

export const errorUser = props => {
	return {
		type: 'ERROR_USER',
		payload: props
	}
};

export const setLicense = props => {
	return {
		type: 'SET_LICENSE',
		payload: props
	}
};

export const errorLicense = props => {
	return {
		type: 'ERROR_LICENSE',
		payload: props
	}
};

export function getUser({ email }) {

	const getUserOptions = {
		method: 'GET',
		mode: 'no-cors',
		headers: { 'Content-Type': 'application/json' }
	};

	// todo: check vs user or license ???
	// NOTE: we WANT this to fail, it means the address is available


	return dispatch => {
		return fetch(`https://localhost/iredadmin/api/license/${email}`, getUserOptions) // 404 error
		.then(
			user => dispatch(setUser(user)),
			error => dispatch(errorUser(error)) // why does this not get hit with 404 ????
		);
	}
}

export function getLicenseRequest({ createUser, email, password, plan, secretPassword, quantity }) {

	const now = moment().format();

	const requestLicenseOptions = {
		method: 'POST',
		mode: 'no-cors',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			accountType: plan,
			amount: quantity * 12,
			email,
			expirationdate: moment(now, 'DD-MM-YYYY').add(1, 'years').format(),
			password: secretPassword,
			paymentprocessor: 'paypal',
			purchasedate: now,
			registrationpassword: password,
			quantity
		})
	};

	return dispatch => {
		return fetch(`https://localhost/discreetadmin/api/licenses/${email}`, requestLicenseOptions)
		.then(
			license => dispatch(setLicense(license)),
			error => dispatch(errorLicense(error))
		)
	}
}