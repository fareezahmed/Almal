import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'react-native-elements';

// Styles
import Colors from '../../assets/styles/Colors';
import styles from '../../assets/styles/DropdownStyles';

const renderIcon = (icon, error) => (
  <Icon
    name={ icon }
    color={ Colors.ICON_COLOR }
    style={ styles.iconStyle }
    size={ 26 }
    iconStyle={ [(error) ? styles.errorIcon : {}] }
  />
);

const Dropdown = ({
  error,
  icon,
  label,
  value,
  items,
  onValueChange,
  last,
}) => {
  // console.log(items);
  return (
    <View style={ [
      styles.wrapperStyle,
      styles,
      ] }
    >
      { icon ? renderIcon(icon, error) : <View /> }
      <View style={ [
        styles.containerStyle,
        (error) ? styles.errorInput : {},
        (last) ? styles.lastContainerStyle : {},
        ] }
      >
        <TouchableOpacity onPress={ onValueChange }>
          <Text style={ styles.dropdownStyle } >{ label }</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  items: PropTypes.array.isRequired,
  last: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
}

Dropdown.defaultProps = {
  icon: '',
  last: false,
}

export { Dropdown };
