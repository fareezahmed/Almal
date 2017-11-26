import {
  CONTRACT_SELECTED,
  CONTRACT_UNSELECTED,
} from '../actions/types';

export default (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case CONTRACT_SELECTED:
      return action.payload;
    case CONTRACT_UNSELECTED:
      return 0;
    default:
      return state;
  }
};
