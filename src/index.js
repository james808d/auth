import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store";

import './css/main.css';
import './css/colors.css';
import './css/grid.css';
import 'react-tabs/style/react-tabs.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom'

import { history } from './history';

//import { configureFakeBackend } from './auth/helpers/mock-backend';
const store = configureStore();

//configureFakeBackend();

ReactDOM.render(
	<Router history={history}>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>, document.getElementById('root'));
registerServiceWorker();
