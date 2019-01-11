import { combineReducers } from 'redux';
import routes from './routesReducer';
import user from './userReducer';
// ... other reducers

export default combineReducers({
  routes,
  user
  // ... other reducers
});
