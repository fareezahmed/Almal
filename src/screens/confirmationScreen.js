import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
};

const ConfirmationScreen = () => (
  <View
    style={styles.slideStyle}
  >
    <Text style={styles.textStyle}>Confirmation</Text>
  </View>
);

export default ConfirmationScreen;
