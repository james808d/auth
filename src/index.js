import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import './css/colors.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
