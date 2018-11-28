import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';
// redux thunk is middleware for async actions
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import './index.css';

// create logger middleware to help monitor our app with logging info about actions
const logger = createLogger();
// combining all reducer into one rootReducer to connect to the store
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
                  <App/>
                </Provider>, 
                document.getElementById('root'));
registerServiceWorker();
