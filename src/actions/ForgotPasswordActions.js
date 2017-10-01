import firebase from 'firebase';
import {
  FORGOT_PASSWORD_EMAIL_CHANGED,
  FORGOT_PASSWORD_PASSWORD_CHANGED,
  FORGOT_PASSWORD_CONFIRM_PASSWORD_CHANGED,
  FORGOT_PASSWORD_EMAIL_SUCCESS,
  FORGOT_PASSWORD_EMAIL_FAIL,
  FORGOT_PASSWORD_EMAIL_VALIDATE,
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

const forgotPasswordEmailSucess = (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_EMAIL_SUCCESS });
};

// eslint-disable-next-line arrow-parens
export const forgotPasswordEmailValidate = (props) => (dispatch) => {
  const { email } = props;
  dispatch({ type: FORGOT_PASSWORD_EMAIL_VALIDATE });
  try {
    firebase.auth().fetchProvidersForEmail(email)
      .then(user => forgotPasswordEmailSucess(dispatch, user))
      .catch((error) => {
        forgotPasswordEmailFail(dispatch, error);
      });
  } catch (err) {
    forgotPasswordEmailFail(dispatch, err);
  }
};
