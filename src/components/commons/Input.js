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

const renderIcon = (icon, error) => (
  <Icon
    name={icon}
    color={Colors.ICON_COLOR}
    style={[GlobalStyles.iconStyle]}
    iconStyle={[(error) ? styles.errorStyle.icon : {}]}
  />
);


const Input = ({
  error,
  icon,
  secureTextEntry,
  label,
  value,
  onChangeText,
  style,
}) => (
  <View style={[
    GlobalStyles.row,
    GlobalStyles.inputStyle,
    (error) ? styles.errorStyle.container : {},
    style]}
  >
    { icon ? renderIcon(icon, error) : <View /> }
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
