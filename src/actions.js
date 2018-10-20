import { apiCall } from './api/apiCall'; 
import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';
// actions are objects which we are returning to the reducer, usually we store type in separate constants file and import it as above
// payload is  common name for data that we send with that action

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// async action below, we using higher order function to return other function, 
export const reqRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS , payload: data}))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
};