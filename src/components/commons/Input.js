import React from 'react';
import { View } from 'react-native';
import {
  FormInput,
  Icon,
} from 'react-native-elements';
import { GlobalStyles, Colors } from '../../config';

const styles = {
  inputStyle: {
    marginBottom: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  iconStyle: {
    marginTop: 6,
    marginLeft: 10,
    width: 30,
  },
  formInput: {
    borderBottomColor: 'transparent',
  },
};

const Input = ({ containerStyle, icon, secureTextEntry, label, value, onChangeText }) => (
  <View style={[GlobalStyles.row, styles.inputStyle, containerStyle]}>
    <Icon
      name={icon}
      color={Colors.ICON_COLOR}
      style={styles.iconStyle}
    />
    <FormInput
      secureTextEntry={secureTextEntry}
      placeholder={label}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      containerStyle={[GlobalStyles.flex3, styles.formInput]}
    />
  </View>
);

export { Input };
