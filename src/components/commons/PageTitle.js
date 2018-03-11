import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import { title } from '../../assets/styles/GlobalStyles';

const PageTitle = ({ style, text }) => (
  <View style={ style }>
    <Text style={ title }>{text}</Text>
  </View>
);

PageTitle.propTypes = {
  text: PropTypes.string,
  style: PropTypes.number,
}

PageTitle.defaultProps = {
  text: '',
  style: null,
}

export { PageTitle };

