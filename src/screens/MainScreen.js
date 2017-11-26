import React from 'react';
import { View, Text } from 'react-native';
import { List } from '../components';
import { GlobalStyles } from '../config';

const MainScreen = () => {
  return (
    <View style={[GlobalStyles.listStyle, styles.listStyle]}>
      <List />
    </View>
  );
};

const styles = {
  listStyle: {
    backgroundColor: '#4d9b9d',
  },
};

export default MainScreen;
