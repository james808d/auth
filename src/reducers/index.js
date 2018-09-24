import { combineReducers } from 'redux';
import _ from 'lodash';

const auth = (state={}, action) => {
	switch(action.type) {
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	auth
});

export default rootReducer;