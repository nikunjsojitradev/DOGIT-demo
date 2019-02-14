import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store, {history} from './store';
import {Router} from 'react-router-dom';

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root')
);
serviceWorker.unregister();
