import { combineReducers } from 'redux';
import _ from 'lodash';

import { alert, authentication } from './auth';
import { registration } from './registration';

const app = (state={}, action) => {
	switch(action.type) {

		case 'SET_PLAN_DETAILS': {
			return {
				...state,
				planDetails: action.payload
			};
		}
		case 'SET_USER': {
			return {
				...state,
				user: action.payload
			};
		}
		case 'ERROR_USER': {
			return {
				...state,
				user: action.payload
			};
		}
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	app,
	alert,
	authentication,
	registration
});

export default rootReducer;