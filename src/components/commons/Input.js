import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'react-native-elements';

// Styles
import Colors from '../../assets/styles/Colors';
import inputStyles from '../../assets/styles/InputStyles';

const renderIcon = (icon, error) => (
  <Icon
    // type="ionicon"
    name={ icon }
    color={ Colors.ICON_COLOR }
    style={ inputStyles.iconStyle }
    size={ 26 }
    iconStyle={ [(error) ? inputStyles.errorIcon : {}] }
  />
);

const Input = ({
  error,
  icon,
  secureTextEntry,
  label,
  value,
  onChangeText,
  styles,
}) => (
  <View style={ [
    inputStyles.wrapperStyle,
    styles,
    ] }
  >
    { icon ? renderIcon(icon, error) : <View /> }
    <View style={ [
      inputStyles.containerStyle,
      (error) ? inputStyles.errorInput : {},
      ] }
    >
      <TextInput
        style={ inputStyles.inputStyle }
        placeholderTextColor={ Colors.WHITE }
        secureTextEntry={ secureTextEntry }
        placeholder={ label }
        value={ value }
        onChangeText={ onChangeText }
        autoCorrect={ false }
      />
    </View>
  </View>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  styles: PropTypes.object,
}

Input.defaultProps = {
  icon: '',
  error: '',
  secureTextEntry: false,
  styles: {},
}

export { Input };
