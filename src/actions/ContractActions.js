import firebase from 'firebase';
import {
  CONTRACT_SELECTED,
  CONTRACT_UNSELECTED,
  CONTRACT_CREATE,
} from './types';

export const contractSelected = uid => ({
  type: CONTRACT_SELECTED,
  payload: uid,
});

export const contractUnSelected = () => ({
  type: CONTRACT_UNSELECTED,
});

export const contractCreate = (state) => {
  const {
    name,
    phone,
    leadDate,
    returnDate,
    dealType,
    dealAmount,
    witness1,
    witness2,
  } = state;
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/contracts`)
      .push({ name, phone, leadDate, returnDate, dealType, dealAmount, witness1, witness2 })
      .then(() => {
        dispatch({ type: CONTRACT_CREATE });
      });
  };
};
