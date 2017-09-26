import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { List } from '../components';
import { GlobalStyles } from '../config';

const styles = {
  listStyle: {
    backgroundColor: '#4d9b9d',
  },
};

const MainScreen = () => (
  <Provider store={createStore(reducers)}>
    <View style={[GlobalStyles.listStyle, styles.listStyle]}>
      <List />
    </View>
  </Provider>
);

export default MainScreen;
