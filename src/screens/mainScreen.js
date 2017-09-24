import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Color, Sizes } from '../config';

class MainScreen extends Component {

  render() {
    console.log(Sizes.screen.width);

    return (
      <View
      style={styles.slideStyle}
      >
        <Text style={styles.textStyle}>Main Screen</Text>
      </View>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688'
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
};

export default MainScreen;
