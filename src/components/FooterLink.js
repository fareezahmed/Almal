import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Variables from '../assets/styles/Variables';
import { link, secondaryText } from '../assets/styles/GlobalStyles';

const LinkPreText = secondaryText

const FooterLink = ({
  text,
  preText,
  onPress,
  footerStyle,
  viewStyle,
}) => (
  <View style={ footerStyle }>
    <TouchableOpacity onPress={ onPress }>
      <View style={ viewStyle }>
        <Text style={ LinkPreText }>
          { preText }
        </Text>
        <Text style={ link }>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);


FooterLink.propTypes = {
  text: PropTypes.string.isRequired,
  preText: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  footerStyle: PropTypes.object,
  viewStyle: PropTypes.object,
}

FooterLink.defaultProps = {
  preText: '',
  footerStyle: {
    alignItems: 'center',
    paddingVertical: Variables.Spacing,
    paddingHorizontal: Variables.Spacing,
    backgroundColor: 'transparent',
  },
  viewStyle: {
    flexDirection: 'row',
  },
}


export default FooterLink
