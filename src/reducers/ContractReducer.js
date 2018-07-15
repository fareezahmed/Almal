import {
  CONTRACT_NAME_CHANGED,
  CONTRACT_PHONE_CHANGED,
  CONTRACT_EMAIL_CHANGED,
  CONTRACT_TYPE_CHANGED,
  CONTRACT_AMOUNT_CHANGED,
  CONTRACT_RETURN_DATE_CHANGED,
  CONTRACT_DATE_CHANGED,
  CONTRACT_SUCCESS,
  CONTRACT_FAIL,
  CONTRACT_LOADING,
  CONTRACT_CREATE,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  type: '',
  amount: '',
  returnDate: '',
  contractDate: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case CONTRACT_NAME_CHANGED:
      return { ...state, name: action.payload };
    case CONTRACT_PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case CONTRACT_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case CONTRACT_TYPE_CHANGED:
      return { ...state, type: action.payload };
    case CONTRACT_AMOUNT_CHANGED:
      return { ...state, amount: action.payload };
    case CONTRACT_RETURN_DATE_CHANGED:
      return { ...state, returnDate: action.payload };
    case CONTRACT_DATE_CHANGED:
      return { ...state, contractDate: action.payload };
    case CONTRACT_LOADING:
      return { ...state, loading: true, error: '' };
    case CONTRACT_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case CONTRACT_FAIL:
      return {
        ...state,
        error: action.payload,
        password: '',
        loading: false,
      };
    case CONTRACT_CREATE:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    default:
      return state;
  }
};
