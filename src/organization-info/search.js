import Immutable from 'immutable';
import { createSelector } from 'reselect';

export const actions = {
  INIT: 'search/INIT',
  LOAD_START: 'search/LOAD_START',
  LOAD_SUCCESS: 'search/LOAD_SUCCESS',
  LOAD_FAIL: 'search/LOAD_FAIL',
  UPDATE_SEARCH_TERM: 'search/UPDATE_SEARCH_TERM',
  UPDATE_BOX_TEXT: 'search/UPDATE_BOX_TEXT'
};

const initialState = Immutable.fromJS({
  searchTerm: '',
  boxText: '',
  isLoading: true,
  searched: false,
  key: 0
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_START:
      return state.set('isLoading', true);
    case actions.LOAD_FAIL:
    case actions.LOAD_SUCCESS:
      return state.set('isLoading', false);
    case actions.UPDATE_SEARCH_TERM:
      return state.set('searchTerm', action.value);
    case actions.UPDATE_BOX_TEXT:
      return state.set('boxText', state.get('searchTerm'));
    default:
      return state;
  }
};

// action creators
export const updateSearchTerm = value => dispatch =>
  dispatch({ type: actions.UPDATE_SEARCH_TERM, value });

export const updateBoxText = value => dispatch =>
  dispatch({ type: actions.UPDATE_BOX_TEXT, value });

export const updateQueryKey = (key, value) => dispatch =>
  dispatch({ type: actions.UPDATE_QUERY_KEY, key, value });

// selectors

// export const selectKey = createSelector(selectVisState, state =>
//   state.get('key')
// );

const getSearchTerm = state => state.searchTerm;

const getBoxText = state => state.boxText;

export const selectSearchTerm = createSelector([getSearchTerm], searchTerm => {
  return searchTerm;
});

export const selectBoxText = createSelector([getBoxText], boxText => {
  return boxText;
});
