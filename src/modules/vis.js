import Immutable from 'immutable';
import { createSelector } from 'reselect';
import axios from 'axios';
// var data = require("../herp.json")

import { data } from '../herp.json';

const originalData = data;

export const actions = {
  INIT: 'vis/INIT',
  LOAD_START: 'vis/LOAD_START',
  LOAD_SUCCESS: 'vis/LOAD_SUCCESS',
  LOAD_FAIL: 'vis/LOAD_FAIL',
  UPDATE_SEARCH_TERM: 'vis/UPDATE_SEARCH_TERM',
  UPDATE_QUERY: 'vis/UPDATE_QUERY',
  UPDATE_QUERY_KEY: 'vis/UPDATE_QUERY_KEY',
  UPDATE_DATA: 'vis/UDPATE_DATA',
  GET_SEARCH: 'vis/GET_SEARCH',
  UPDATE_BOX_TEXT: 'vis/UPDATE_BOX_TEXT'
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

export const getInitialState = (kwargs = {}) => initialState.merge(kwargs);

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

export const selectKey = createSelector(selectVisState, state =>
  state.get('key')
);

export const selectSearchTerm = createSelector(selectVisState, state =>
  state.get('searchTerm')
);

export const selectBoxText = createSelector(selectVisState, state =>
  state.get('boxText')
);

export const selectQuery = createSelector(selectVisState, state =>
  state.get('query')
);

export const makeSelectQueryKey = key =>
  createSelector(selectVisState, state => state.getIn(['query', key]));

export const selectData = createSelector(selectVisState, state =>
  state
    .get('data')
    .filter(
      item => item.getIn(['end', 'name']) && item.getIn(['start', 'name'])
    )
);
export const selectVC = createSelector(selectVisState, state =>
  state.get('data').reduce((acc, a) => {
    return acc.add(a.getIn(['vc', 'display_name']));
  }, Immutable.Set())
);

export const selectVC1 = createSelector(selectData, state =>
  state.reduce((acc, a) => {
    return acc.add(a.getIn(['start', 'name']));
  }, Immutable.Set())
);

export const selectStartups = createSelector(selectVisState, state =>
  state.get('data').reduce((acc, a) => {
    return acc.add(a.getIn(['startup', 'display_name']));
  }, Immutable.Set())
);

export const selectStartups1 = createSelector(selectData, state =>
  state.reduce((acc, a) => {
    return acc.add(a.getIn(['end', 'name']));
  }, Immutable.Set())
);

export const selectEdges = createSelector(selectVisState, state =>
  state.get('data').map(edge => ({
    vc: edge.getIn(['vc', 'display_name']),
    startup: edge.getIn(['startup', 'display_name']),
    edge: edge.getIn(['edge', 'display_name'])
  }))
);

export const selectEdges1 = createSelector(selectData, state =>
  state.map(edge => ({
    vc: edge.getIn(['start', 'name']),
    startup: edge.getIn(['end', 'name']),
    edge: edge.get('type')
  }))
);

export const fetchSearchTerm = data => dispatch =>
  dispatch({ type: actions.GET_SEARCH, data });

export const updateVisData = data => dispatch =>
  dispatch({ type: actions.UPDATE_DATA, data });

export const fetchVisData = query => (dispatch, getState) => {
  // console.log(props)
  return getState()
    .vis.get('data')
    .toJS();
  // console.log('data is ', data)
  // console.log('the query is ', query)
  // const query = getState().vis.get("query").toJS()
  // // debugger;
  // console.log(getState())
  // console.log('v', getState().vis.get("data").toJS())
  // const queryString = "?" + Object.keys(query).map(key => [key, String(query[key])].join("=")).join("&")
  // console.log('HERE', queryString)

  // axios.get("http://localhost:5000/welcome").then(response=> {
  // dispatch(updateVisData(response.data))
  // })
  // dispatch(updateVisData(originalData))
  // axios.get("/" + queryString).then(response => {
  //   debugger;
  // })
};
// export const increment = () => {
//   return dispatch => {
//     dispatch({
//       type: INCREMENT_REQUESTED
//     });

//     dispatch({
//       type: INCREMENT
//     });
//   };
// };

// export const incrementAsync = () => {
//   return dispatch => {
//     dispatch({
//       type: INCREMENT_REQUESTED
//     });

//     return setTimeout(() => {
//       dispatch({
//         type: INCREMENT
//       });
//     }, 3000);
//   };
// };

// export const decrement = () => {
//   return dispatch => {
//     dispatch({
//       type: DECREMENT_REQUESTED
//     });

//     dispatch({
//       type: DECREMENT
//     });
//   };
// };

// export const decrementAsync = () => {
//   return dispatch => {
//     dispatch({
//       type: DECREMENT_REQUESTED
//     });

//     return setTimeout(() => {
//       dispatch({
//         type: DECREMENT
//       });
//     }, 3000);
//   };
// };
