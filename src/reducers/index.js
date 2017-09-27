import { combineReducers } from 'redux';
import ListViewReducer from './ListViewReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  list: ListViewReducer,
  selectedItemId: SelectionReducer,
  auth: AuthReducer,
});
