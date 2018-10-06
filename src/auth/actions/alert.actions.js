import { authConstants } from '../authConstants';

export const alertActions = {
	success,
	error,
	clear
};

function success(message) {
	return { type: authConstants.SUCCESS, message };
}

function error(message) {
	return { type: authConstants.ERROR, message };
}

function clear() {
	return { type: authConstants.CLEAR };
}