import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient, Font } from 'expo';

// Styles
import { button } from '../../assets/styles/GlobalStyles';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonElement extends Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'montserrat': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { text, style, onPress } = this.props
    return (
      <TouchableOpacity onPress={ onPress }>
        <LinearGradient
          start={ { x: 0.1, y: 0.5 } }
          end={ { x: 0.7, y: 0.7 } }
          locations={ [0.5, 1] }
          colors={ ['#00b7b1', '#05cf8e'] }
          style={ { padding: 15, alignItems: 'center', backgroundColor: 'transparent' } }
        >
          {
            this.state.fontLoaded ? (
              <Text style={ [ { fontFamily: 'montserrat' }, button ]}>
                { text }
              </Text>
            ) : null
          }
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

ButtonElement.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export { ButtonElement };
