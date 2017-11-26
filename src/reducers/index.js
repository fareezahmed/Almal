import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';
import ListViewReducer from './ListViewReducer';
import ContractReducer from './ContractReducer';
import ContractSelectionReducer from './ContractSelectionReducer';

export default combineReducers({
  auth: AuthReducer,
  signUp: SignUpReducer,
  forgotPassword: ForgotPasswordReducer,
  list: ListViewReducer,
  contract: ContractReducer,
  contractSelected: ContractSelectionReducer,
});
