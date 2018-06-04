import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import organization_flow from '../organization-info/organization_flow';

export default combineReducers({
  router: routerReducer,
  organization_flow
});
