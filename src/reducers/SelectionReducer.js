import {
  CONTRACT_SELECTED,
  CONTRACT_UNSELECTED,
  CONTRACT_CREATE,
} from '../actions/types';

export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case CONTRACT_SELECTED:
      return action.payload;
    case CONTRACT_UNSELECTED:
      return 0;
    case CONTRACT_CREATE:
      return action.payload;
    default:
      return state;
  }
};
