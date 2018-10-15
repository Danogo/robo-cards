import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
// redux thunk is middleware for async actions
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

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
