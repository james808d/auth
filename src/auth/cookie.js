import Cookies from 'universal-cookie';
import moment from 'moment';

const cookies = new Cookies();

const parseDomain = () => {
	const parts = window.location.hostname.split('.');

	if (parts.length > 1) {
		const suffix = parts.pop();
		const root = parts.pop();
		return '.' + root + '.' + suffix;
	}
	return '.' + window.location.hostname;
};

const setAuthCookie = (value, expires) => {
	const domain = parseDomain();
	console.log('domain', domain);

	cookies.set('auth', value, {
		domain,
		path: '/',
		expires
	});
};

const cacheAuth = ({ accessToken, refreshToken, tokenType }) => {
	const expires = moment().add('year', 1).toDate();
	setAuthCookie(
		{
			accessToken,
			refreshToken,
			tokenType
		},
		expires
	);
};

const clearAuth = () => {
	const expires = new Date(1970, 1, 1, 0, 0, 1);
	setAuthCookie({}, expires);
};

const authCookieMiddleware = () => store => next => async action => {
	const auth = store.getState().auth;
	const actionPromise = next(action);

	await actionPromise;

	const nextAuth = store.getState().auth;
	if (auth && !nextAuth) {
		clearAuth();
	} else if (nextAuth !== auth) {
		cacheAuth(nextAuth);
	}

	return actionPromise;
};

export default authCookieMiddleware;