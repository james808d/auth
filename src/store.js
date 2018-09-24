import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
	const store = createStore(
		reducer,
		initialState,
		composeEnhancers(
			applyMiddleware( thunk, promise(), createLogger() )
		)
	);

	return store;
}