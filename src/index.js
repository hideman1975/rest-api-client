

import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Disk from './components/disk';
require("!style!css!./style.css");

console.log("index.js included");
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

