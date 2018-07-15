import firebase from 'firebase';
import {
  CONTRACT_SELECTED,
  CONTRACT_UNSELECTED,
  CONTRACT_CREATE,
  CONTRACT_NAME_CHANGED,
  CONTRACT_PHONE_CHANGED,
  CONTRACT_EMAIL_CHANGED,
  CONTRACT_TYPE_CHANGED,
  CONTRACT_AMOUNT_CHANGED,
  CONTRACT_RETURN_DATE_CHANGED,
  CONTRACT_DATE_CHANGED,
  CONTRACT_SUCCESS,
  CONTRACT_FAIL,
  CONTRACT_LOADING
} from './types';

export const contractSelected = uid => ({
  type: CONTRACT_SELECTED,
  payload: uid,
});

export const contractUnSelected = () => ({
  type: CONTRACT_UNSELECTED,
});

export const contractNameChanged = text => ({
  type: CONTRACT_NAME_CHANGED,
  payload: text,
});

export const contractPhoneChanged = text => ({
  type: CONTRACT_PHONE_CHANGED,
  payload: text,
});

export const contractEmailChanged = text => ({
  type: CONTRACT_EMAIL_CHANGED,
  payload: text,
});

export const contractTypeChanged = text => ({
  type: CONTRACT_TYPE_CHANGED,
  payload: text,
});

export const contractAmountChanged = text => ({
  type: CONTRACT_AMOUNT_CHANGED,
  payload: text,
});

export const contractReturnDateChanged = text => ({
  type: CONTRACT_RETURN_DATE_CHANGED,
  payload: text,
});

export const contractDateChanged = text => ({
  type: CONTRACT_DATE_CHANGED,
  payload: text,
});

export const contractCreated = (state) => {
  const {
    name,
    phone,
    email,
    // returnDate,
    type,
    amount,
    // witness1,
    // witness2,
  } = state;
  const { currentUser } = firebase.auth();
  // let now = new Date();
  const contractDate = Date.now();
  console.log(contractDate)
  console.log(currentUser)
  return (dispatch) => {
    try {
      firebase.database().ref(`/users/${currentUser.uid}/contracts`)
        // .push({ name, phone, contractDate, returnDate, dealType, dealAmount, witness1, witness2 })
        .push({
          name,
          phone,
          email,
          type,
          amount,
          contractDate,
        })
        .then(() => {
          dispatch({ type: CONTRACT_CREATE })
        });
      console.log('sucessful');
    } catch (error) {
      console.log(error)
    }
  };
};
