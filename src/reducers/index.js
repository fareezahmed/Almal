import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';
// import ListViewReducer from './ListViewReducer';
import MainReducer from './MainReducer';
import ContractReducer from './ContractReducer';
import ContractSelectionReducer from './ContractSelectionReducer';

export default combineReducers({
  auth: AuthReducer,
  signUp: SignUpReducer,
  forgotPassword: ForgotPasswordReducer,
  list: MainReducer,
  contract: ContractReducer,
  contractSelected: ContractSelectionReducer,
});
