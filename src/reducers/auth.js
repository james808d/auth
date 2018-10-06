import { authConstants } from '../auth/authConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
	switch (action.type) {
		case authConstants.LOGIN_REQUEST:
			return {
				loggingIn: true,
				user: action.user
			};
		case authConstants.LOGIN_SUCCESS:
			return {
				loggedIn: true,
				user: action.user
			};
		case authConstants.LOGIN_FAILURE:
			return {};
		case authConstants.LOGOUT:
			return {};
		default:
			return state
	}
}

export function alert(state = {}, action) {
	switch (action.type) {
		case authConstants.SUCCESS:
			return {
				type: 'alert-success',
				message: action.message
			};
		case authConstants.ERROR:
			return {
				type: 'alert-danger',
				message: action.message
			};
		case authConstants.CLEAR:
			return {};
		default:
			return state
	}
}