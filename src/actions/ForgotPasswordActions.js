import firebase from 'firebase';
import {
  FORGOT_PASSWORD_EMAIL_CHANGED,
  FORGOT_PASSWORD_PASSWORD_CHANGED,
  FORGOT_PASSWORD_CONFIRM_PASSWORD_CHANGED,
  FORGOT_PASSWORD_EMAIL_SUCCESS,
  FORGOT_PASSWORD_EMAIL_FAIL,
  FORGOT_PASSWORD_LOADING,
} from './types';

export const forgotPasswordEmailChanged = text => ({
  type: FORGOT_PASSWORD_EMAIL_CHANGED,
  payload: text,
});

export const forgotPasswordPasswordChanged = text => ({
  type: FORGOT_PASSWORD_PASSWORD_CHANGED,
  payload: text,
});

export const forgotPasswordConfirmPasswordChanged = text => ({
  type: FORGOT_PASSWORD_CONFIRM_PASSWORD_CHANGED,
  payload: text,
});

const forgotPasswordEmailFail = (dispatch, error) => {
  dispatch({
    type: FORGOT_PASSWORD_EMAIL_FAIL,
    payload: error,
  });
};

const forgotPasswordEmailSuccess = (dispatch, navigate) => {
  dispatch({ type: FORGOT_PASSWORD_EMAIL_SUCCESS });
  navigate('Login');
};

// eslint-disable-next-line arrow-parens
export const forgotPasswordEmailValidate = (props) => (dispatch) => {
  const { email, navigate } = props;
  dispatch({ type: FORGOT_PASSWORD_LOADING });
  // REWRITE THE LOGIC FOR FORGOT PASSWORD
  try {
    firebase.auth().fetchProvidersForEmail(email)
      .then(user => forgotPasswordEmailSuccess(dispatch, navigate, user))
      .catch((error) => {
        forgotPasswordEmailFail(dispatch, error);
      });
  } catch (err) {
    forgotPasswordEmailFail(dispatch, err);
  }
};

export const forgotPasswordResetPassword = (props, dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_LOADING });
  // WRITE THE LOGIC FOR RESET PASSWORD
};

