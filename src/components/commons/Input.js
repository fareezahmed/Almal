import React from 'react';
import { View } from 'react-native';
import {
  FormInput,
  Icon,
} from 'react-native-elements';
import { GlobalStyles, Colors } from '../../config';

const styles = {
  errorStyle: {
    container: {
      borderColor: Colors.ERROR,
      borderWidth: 2,
    },
    icon: {
      color: Colors.ERROR,
    },
  },
};

const Input = ({ error, icon, secureTextEntry, label, value, onChangeText }) => (
  <View style={[
    GlobalStyles.row,
    GlobalStyles.inputStyle,
    (error) ? styles.errorStyle.container : {}]}
  >
    <Icon
      name={icon}
      color={Colors.ICON_COLOR}
      style={[GlobalStyles.iconStyle]}
      iconStyle={[(error) ? styles.errorStyle.icon : {}]}
    />
    <FormInput
      secureTextEntry={secureTextEntry}
      placeholder={label}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      containerStyle={[GlobalStyles.flex3, GlobalStyles.formInput]}
    />
  </View>
);

export { Input };
