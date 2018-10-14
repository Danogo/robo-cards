import { CHANGE_SEARCH_FIELD } from './constants';
// actions are objects which we are returning to the reducer, usually we store type in separate constants file and import it as above
// payload is  common name for data that we send with that action
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});
// this is just one action setSeatchField but we can expand it more below and add more actions