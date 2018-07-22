import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';

// Styles
import Colors from '../../assets/styles/Colors';
import styles from '../../assets/styles/DropdownStyles';

const renderIcon = (icon, error, type) => (
  <Icon
    name={ icon }
    color={ Colors.ICON_THIRD_COLOR }
    style={ styles.iconStyle }
    size={ 26 }
    iconStyle={ [
      (type === 'dark') ? styles.darkIcon : {},
      (error) ? styles.errorIcon : {},
    ] }
  />
);

const Dropdown = ({
  error,
  icon,
  label,
  options,
  value,
  onSelect,
  last,
  type,
  noLowerPadding,
}) => {
  console.log(icon);
  console.log(Colors.ICON_COLOR);
  return (
    <View style={ [
      styles.wrapperStyle,
      ] }
    >
      { icon ? renderIcon(icon, error) : <View /> }
      <View style={ [
        (type === 'dark') ? [styles.containerStyle, styles.darkContainerStyle] : styles.containerStyle,
        (error) ? styles.errorInput : {},
        (last) ? styles.lastContainerStyle : {},
        (noLowerPadding) ? styles.noLowerPaddingStyle : {},
        ] }
      >
        <ModalDropdown
          defaultValue={ label }
          options={ options }
          onSelect={ onSelect }
          value={ value }
          dropdownStyle={ (type === 'dark') ? [styles.inputStyle, styles.darkStyle] : styles.inputStyle }
        />
      </View>
      { renderIcon('keyboard-arrow-down') }
    </View>
  )
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  options: PropTypes.array.isRequired,
  last: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  type: PropTypes.string,
}

Dropdown.defaultProps = {
  icon: '',
  last: false,
  type: '',
}

export { Dropdown };
