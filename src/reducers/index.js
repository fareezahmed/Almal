import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';

export default combineReducers({
  auth: AuthReducer,
  signUp: SignUpReducer,
  forgotPassword: ForgotPasswordReducer,
});
