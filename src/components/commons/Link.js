import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../config';

const Link = ({ text, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={style}>
      <Text style={[GlobalStyles.link]}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

export { Link };
