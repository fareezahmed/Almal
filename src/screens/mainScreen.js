import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import { List } from '../components';
import { GlobalStyles } from '../config';

const MainScreen = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <View style={[GlobalStyles.listStyle, styles.listStyle]}>
        <List />
      </View>
    </Provider>
  );
};

const styles = {
  listStyle: {
    backgroundColor: '#4d9b9d',
  },
};

export default MainScreen;
