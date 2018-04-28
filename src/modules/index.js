import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import vis from "./vis";

export default combineReducers({
  router: routerReducer,
  vis,
  counter
});
