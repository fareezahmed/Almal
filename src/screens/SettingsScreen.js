import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Color, Sizes } from '../config';

class SettigsScreen extends Component {

  render() {
    console.log(Sizes.screen.width);

    return (
      <View
      style={styles.slideStyle}
      >
        <Text style={styles.textStyle}>Settings Screen</Text>
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

export default SettigsScreen;
