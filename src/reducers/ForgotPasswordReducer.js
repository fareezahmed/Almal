import {
  FORGOT_PASSWORD_EMAIL_CHANGED,
  FORGOT_PASSWORD_PASSWORD_CHANGED,
  FORGOT_PASSWORD_CONFIRM_PASSWORD_CHANGED,
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_EMAIL_SUCCESS,
  FORGOT_PASSWORD_EMAIL_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  emailSucess: false,
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case FORGOT_PASSWORD_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case FORGOT_PASSWORD_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case FORGOT_PASSWORD_CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload };
    case FORGOT_PASSWORD_LOADING:
      return { ...state, loading: true };
    case FORGOT_PASSWORD_EMAIL_SUCCESS:
      return { ...state, ...INITIAL_STATE, emailSucess: true };
    case FORGOT_PASSWORD_EMAIL_FAIL:
      return { ...state, ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
};
