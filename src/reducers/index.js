import { combineReducers } from 'redux';
import ListViewReducer from './ListViewReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  list: ListViewReducer,
  selectedItem: SelectionReducer,
});
