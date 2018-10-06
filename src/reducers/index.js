import { combineReducers } from 'redux';
import _ from 'lodash';

import { alert, authentication } from './auth';
import { registration } from './registration';

const app = (state={}, action) => {
	switch(action.type) {

		case 'SET_PLAN': {
			return {
				...state,
				plan: action.payload
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