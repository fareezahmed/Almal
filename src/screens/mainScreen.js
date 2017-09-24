import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { Color, Sizes } from '../config';
import { ListView } from '../components';

const MainScreen = () => (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <ListView />
    </View>
  </Provider>
);

export default MainScreen;
