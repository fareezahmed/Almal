import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';
import ContractReducer from './ContractReducer';
import ContractSelectionReducer from './ContractSelectionReducer';

export default combineReducers({
  auth: AuthReducer,
  signUp: SignUpReducer,
  forgotPassword: ForgotPasswordReducer,
  contract: ContractReducer,
  contractSelected: ContractSelectionReducer,
});
