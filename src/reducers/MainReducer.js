import {
  MAIN_LIST,
} from '../actions/types';

const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case MAIN_LIST:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
