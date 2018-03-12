import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import { link, secondaryText } from '../../assets/styles/GlobalStyles';


const Link = ({
  text,
  onPress,
  styles,
  type,
}) => (
  <TouchableOpacity onPress={ onPress }>
    <View style={ styles }>
      <Text style={ (type !== 'secondary') ? link : secondaryText }>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

Link.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  styles: PropTypes.object,
  type: PropTypes.string,
}

Link.defaultProps = {
  styles: {},
  type: '',
}

export { Link };
