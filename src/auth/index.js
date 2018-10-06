/*import authCookieMiddleware from './cookie';
import apiMiddleware from './api';

const merge = (x, y) => store => next => x(store)(y(store)(next));

const combinedMiddleware = ({ onRefreshPasswordToken, onAuthError } = {}) =>
	merge(
		authCookieMiddleware(),
		apiMiddleware({ onRefreshPasswordToken, onAuthError })
	);

export default combinedMiddleware;*/
