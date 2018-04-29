import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';

// Styles
import { IconBtn } from '../assets/styles/GlobalStyles';

// eslint-disable-next-line react/prefer-stateless-function
class IconButton extends Component {
  render() {
    const {
      containerStyles,
      onPress,
      size,
      name,
    } = this.props
    return (
      <TouchableOpacity onPress={ onPress }>
        <LinearGradient
          start={ { x: 0.1, y: 0.5 } }
          end={ { x: 0.7, y: 0.7 } }
          locations={ [0.5, 1] }
          colors={ ['#00b7b1', '#05cf8e'] }
          style={ [IconBtn, containerStyles] }
        >
          <Icon
            name={ name }
            color="#fff"
            size={ size }
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

IconButton.propTypes = {
  containerStyles: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
}

IconButton.defaultProps = {
  containerStyles: {},
  size: 20,
}

export default IconButton
