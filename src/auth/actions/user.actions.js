import { authConstants } from '../authConstants';
import { userService } from '../services/user.service';
import { alertActions } from './alert.actions';
import { history } from '../../history';

export const userActions = {
	login,
	logout,
	register
};

function login(username, password) {
	return dispatch => {
		dispatch(request({ username }));

		userService.login(username, password)
		.then(
			user => {
				dispatch(success(user));
				history.push('/test'); // todo: how do users setup remaining accounts??? need more pages
			},
			error => {
				dispatch(failure(error.toString()));
				dispatch(alertActions.error(error.toString()));
			}
		);
	};

	function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
	function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
	function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
	userService.logout();
	return { type: authConstants.LOGOUT };
}

function register(user) {
	return dispatch => {
		dispatch(request(user));

		userService.register(user)
		.then(
			user => {
				dispatch(success());
				history.push('/login'); // todo: forward to account managment?
				dispatch(alertActions.success('Registration successful'));
			},
			error => {
				dispatch(failure(error.toString()));
				dispatch(alertActions.error(error.toString()));
			}
		);
	};

	function request(user) { return { type: authConstants.REGISTER_REQUEST, user } }
	function success(user) { return { type: authConstants.REGISTER_SUCCESS, user } }
	function failure(error) { return { type: authConstants.REGISTER_FAILURE, error } }
}