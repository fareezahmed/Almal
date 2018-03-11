import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../assets/styles/LogoStyles'

const Logo = ({ styleOverrides }) => {
  const logo = require('../assets/img/logo.png')

  return (
    <View style={ styles.imageWrapper }>
      <View style={ [styles.circle, styles.firstCircle] }>
        <View style={ [styles.circle, styles.secondCircle] }>
          <View style={ [styles.circle, styles.thirdCircle] }>
            <Image
              style={ styles.logo }
              source={ logo }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

Logo.propTypes = {
  styleOverrides: PropTypes.object,
}

Logo.defaultProps = {
  styleOverrides: {},
}

export default Logo;
