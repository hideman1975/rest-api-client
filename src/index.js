

import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

require("!style!css!./style.css");


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

