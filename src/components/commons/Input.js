import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'react-native-elements';

// Styles
import Colors from '../../assets/styles/Colors';
import inputStyles from '../../assets/styles/InputStyles';

const renderIcon = (icon, error, type) => (
  <Icon
    name={ icon }
    color={ Colors.ICON_COLOR }
    style={ inputStyles.iconStyle }
    size={ 26 }
    iconStyle={ [
      (type === 'dark') ? inputStyles.darkIcon : {},
      (error) ? inputStyles.errorIcon : {},
    ] }
  />
);

const Input = ({
  error,
  type,
  icon,
  secureTextEntry,
  label,
  value,
  onChangeText,
  styles,
  last,
}) => (
  <View style={ [
    inputStyles.wrapperStyle,
    styles,
    ] }
  >
    { icon ? renderIcon(icon, error, type) : <View /> }
    <View style={ [
      (type === 'dark') ? [inputStyles.containerStyle, inputStyles.darkContainerStyle] : inputStyles.containerStyle,
      (error) ? inputStyles.errorInput : {},
      (last) ? inputStyles.lastContainerStyle : {},
      ] }
    >
      <TextInput
        style={ (type === 'dark') ? [inputStyles.inputStyle, inputStyles.darkStyle] : inputStyles.inputStyle }
        placeholderTextColor={ (type === 'dark') ? Colors.BLACK : Colors.WHITE }
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
  secureTextEntry: PropTypes.bool,
  last: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  type: PropTypes.string,
}

Input.defaultProps = {
  icon: '',
  secureTextEntry: false,
  last: false,
  type: '',
}

export { Input };
