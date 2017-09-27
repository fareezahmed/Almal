import firebase from 'firebase';

const DBConfig = () => {
  const config = {
    apiKey: 'AIzaSyBOQgd-QOj7WFxcbAEDz4Oib8oTXpy_Wb8',
    authDomain: 'almal-5176a.firebaseapp.com',
    databaseURL: 'https://almal-5176a.firebaseio.com',
    projectId: 'almal-5176a',
    storageBucket: '',
    messagingSenderId: '540539871975',
  };
  firebase.initializeApp(config);
};

export default DBConfig;
