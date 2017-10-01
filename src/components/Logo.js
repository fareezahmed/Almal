import React from 'react';
import { View, Image } from 'react-native';
import { GlobalStyles } from '../config';

const logoStyle = {
  width: 100,
  height: 100,
};

const containerStyle = {
  marginBottom: 30,
};

const ConfirmationScreen = ({ styles }) => {
  const logo = require('../assets/img/logo.png');
  return (
    <View style={[GlobalStyles.row, containerStyle, styles]}>
      <Image
        style={logoStyle}
        source={logo}
      />
    </View>
  );
};

export default ConfirmationScreen;
