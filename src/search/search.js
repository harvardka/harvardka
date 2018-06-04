import Immutable from 'immutable';
import { createSelector } from 'reselect';
import axios from 'axios';
// var data = require("../herp.json")

import { data } from '../herp.json';

const originalData = data;

export const actions = {
  INIT: 'vis/INIT',
  LOAD_START: 'search/LOAD_START',
  LOAD_SUCCESS: 'search/LOAD_SUCCESS',
  LOAD_FAIL: 'search/LOAD_FAIL',
  UPDATE_SEARCH_TERM: 'search/UPDATE_SEARCH_TERM',
  UPDATE_QUERY: 'search/UPDATE_QUERY',
  UPDATE_QUERY_KEY: 'search/UPDATE_QUERY_KEY',
  UPDATE_DATA: 'search/UDPATE_DATA',
  GET_SEARCH: 'search/GET_SEARCH',
  UPDATE_BOX_TEXT: 'search/UPDATE_BOX_TEXT'
};

const initialState = Immutable.fromJS({
  searchTerm: '',
  boxText: '',
  query: {},
  isLoading: true,
  data: data,
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
      return state.set('boxText', action.value);
    case actions.UPDATE_QUERY:
      // completely replace the query key in state
      return state.set('query', Immutable.fromJS(action.query));
    case actions.UPDATE_QUERY_KEY:
      // update the key in the filter
      return state.setIn(['query', action.key], action.value);
    case actions.CLEAR_FILTER:
      return state.set('query', Immutable.fromJS({}));
    case actions.UPDATE_DATA:
      return state.set('data', Immutable.fromJS(action.data));
    case actions.GET_SEARCH:
      return state.get('searchTerm');
    default:
      return state;
  }
};

// action creators
export const updateSearchTerm = value => dispatch =>
  dispatch({ type: actions.UPDATE_SEARCH_TERM, value });

export const updateBoxText = value => dispatch =>
  dispatch({ type: actions.UPDATE_BOX_TEXT, value });

export const updateQuery = query => dispatch =>
  dispatch({ type: actions.UPDATE_QUERY, query });

export const updateQueryKey = (key, value) => dispatch =>
  dispatch({ type: actions.UPDATE_QUERY_KEY, key, value });

// selectors

const selectVisState = state => state.vis;

// export const selectKey = createSelector(selectVisState, state =>
//   state.get('key')
// );

export const selectSearchTerm = state => state.get('searchTerm');

export const selectBoxText = state => state.get('boxText');
