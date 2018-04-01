import firebase from 'firebase';

import {
  MAIN_LIST,
} from '../actions/types';

// eslint-disable-next-line  import/prefer-default-export
export const mainList = () => {
  const { currentUser } = firebase.auth()
  let list = []
  console.log(currentUser)
  return (dispatch) => {
    try {
      firebase.database().ref(`/users/${currentUser.uid}/contracts`)
        .on('value', (snapshot) => {
          list = Object.values(snapshot.val())
          // const listKeys = Object.keys(listObject)
          // const list = listKeys.map((i) => {
          //   console.log(i)
          //   for(item in listObject) {
          //     item
          //   }
          //   return data.push(listObject[i])
          // });
          dispatch({ type: MAIN_LIST, payload: list })
          // console.log(typeof Object.values(snapshot.val()));
          console.log('list')
          console.log(list)
          // console.log('listKeys')
          // console.log(listKeys)
          // console.log('listObject')
          // console.log(listObject)
        });
      console.log('successful');
    } catch (error) {
      console.log(error)
    }
  };
};

