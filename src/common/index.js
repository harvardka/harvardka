import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from '../home/counter';
import vis from '../graph/vis';
import organization_flow from '../organization-info/organization_flow';

export default combineReducers({
  router: routerReducer,
  vis,
  counter,
  organization_flow
});
