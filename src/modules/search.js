import Immutable from 'immutable';
import { createSelector } from 'reselect';

const initialState = Immutable.fromJS({
  searchTerm: '',
  query: {},
  isLoading: true
});

export const actions = {
  INIT: 'search/INIT',
  LOAD_START: 'search/LOAD_START',
  LOAD_SUCCESS: 'search/LOAD_SUCCESS',
  LOAD_FAIL: 'search/LOAD_FAIL',
  UPDATE_SEARCH_TERM: 'search/UPDATE_SEARCH_TERM'
};

export const getInitialState = (kwargs = {}) => initialState.merge(kwargs);

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_START:
      return state.set('isLoading', true);
    case actions.LOAD_FAIL:
    case actions.LOAD_SUCCESS:
      return state.set('isLoading', false);
    case actions.UPDATE_SEARCH_TERM:
      console.log('hey', action.value);
      return state.set('searchTerm', action.value);
    // case actions.UPDATE_QUERY:
    //   // completely replace the query key in state
    //   return state.set('query', Immutable.fromJS(action.query));
    // case actions.UPDATE_QUERY_KEY:
    //   // update the key in the filter
    //   return state.setIn(['query', action.key], action.value);
    // case actions.CLEAR_FILTER:
    //   return state.set('query', Immutable.fromJS({}));
    // case actions.UPDATE_DATA:
    //   return state.set('data', Immutable.fromJS(action.data));
    default:
      console.log('here');
      return state;
  }
};

export const selectSearchTerm = state => state.searchTerm;

// export const selectSearchTerm = createSelector(searchTermSelect, state =>
//   state.get('searchTerm')
// );

export const updateSearchTerm = value => dispatch =>
  dispatch({ type: actions.UPDATE_SEARCH_TERM, value });

// export const search = value => dispatch =>
//   dispatch({ type: actions.SEARCH, value})
