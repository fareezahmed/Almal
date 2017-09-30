import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../config';

const styles = {
};

const Link = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text style={[GlobalStyles.link]}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

export { Link };
