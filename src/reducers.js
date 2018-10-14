import { CHANGE_SEARCH_FIELD } from './constants';
// initial state for our reducer, just like we have this.state in App.js in constructor()
const initialState = {
  searchField: ''
}
// Our reducer function takes state and action, if there is action to perform he changes state accordingly
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // we don't modify
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
};