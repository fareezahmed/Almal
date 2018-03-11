import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../assets/styles/PageStyles'

const PageWrapper = ({ bg, children }) => {
  return (
    <View style={ styles.page }>
      {
        bg ? (
          <Image
            style={ styles.container }
            source={ bg }
          >
            {children}
          </Image>
        ) : { children }
      }
    </View>
  );
};

PageWrapper.propTypes = {
  bg: PropTypes.number,
  children: PropTypes.array.isRequired,
}

PageWrapper.defaultProps = {
  bg: null,
}

export default PageWrapper;
