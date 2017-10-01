import {
  SIGNUP_NAME_CHANGED,
  SIGNUP_PHONE_CHANGED,
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_CONFIRM_PASSWORD_CHANGED,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case SIGNUP_NAME_CHANGED:
      return { ...state, name: action.payload };
    case SIGNUP_PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case SIGNUP_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case SIGNUP_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGNUP_CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload };
    case SIGNUP_USER:
      return { ...state, loading: true, error: '' };
    case SIGNUP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case SIGNUP_USER_FAIL:
      return { ...state, error: action.payload, password: '', loading: false };
    default:
      return state;
  }
};
