import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { List } from '../components';

const MainScreen = () => (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <List />
    </View>
  </Provider>
);

export default MainScreen;
