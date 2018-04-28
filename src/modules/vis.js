import Immutable from "immutable"
import { createSelector } from "reselect"

export const actions = {
  INIT: "vis/INIT",
  LOAD_START: "vis/LOAD_START",
  LOAD_SUCCESS: "vis/LOAD_SUCCESS",
  LOAD_FAIL: "vis/LOAD_FAIL",
  UPDATE_SEARCH_TERM: 'vis/UPDATE_SEARCH_TERM',
  UPDATE_QUERY: 'vis/UPDATE_QUERY',
  UPDATE_QUERY_KEY: 'vis/UPDATE_QUERY_KEY',
}

const initialState = Immutable.fromJS({
  searchTerm: "",
  query: {},
  isLoading: false,
})

export const getInitialState = (kwargs = {}) => initialState.merge(kwargs)

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_START:
      return state.set("isLoading", true)
    case actions.LOAD_FAIL:
    case actions.LOAD_SUCCESS:
      return state.set("isLoading", false)
    case actions.UPDATE_SEARCH_TERM:
      return state.set("searchTerm", action.value)
    case actions.UPDATE_QUERY:
       // completely replace the query key in state
      return state.set("query", Immutable.fromJS(action.query))
    case actions.UPDATE_QUERY_KEY:
      // update the key in the filter
      return state.setIn(["query", action.key], action.value)
    case actions.CLEAR_FILTER:
      return state.set("query", Immutable.fromJS({}))
    default:
      return state;
  }
};

// action creators
export const updateSearchTerm = value =>
  dispatch => dispatch({ type: actions.UPDATE_SEARCH_TERM, value})

export const updateQuery = query =>
  dispatch => dispatch({ type: actions.UPDATE_QUERY, query })

export const updateQueryKey = (key, value) =>
  dispatch => dispatch({ type: actions.UPDATE_QUERY_KEY, key, value })

// selectors

const selectVisState = state => state.vis

export const selectSearchTerm = createSelector(
  selectVisState,
  state => state.get("searchTerm")
)

export const makeSelectQueryKey = (key) =>
  createSelector(
    selectVisState,
    state => state.getIn(['query', key])
)
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
