import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  pageTitleStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const PageTitle = ({ title }) => (
  <View style={ styles.pageTitleStyle }>
    <Text>{title}</Text>
  </View>
);

PageTitle.propTypes = {
  title: PropTypes.string,
}

PageTitle.defaultProps = {
  title: '',
}

export { PageTitle };

