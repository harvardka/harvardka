import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import vis from './vis';
import organization_flow from './organization_flow';

export default combineReducers({
  router: routerReducer,
  vis,
  counter,
  organization_flow
});
