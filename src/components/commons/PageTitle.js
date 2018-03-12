import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Font } from 'expo';

// Styles
import { title } from '../../assets/styles/GlobalStyles';

// eslint-disable-next-line react/prefer-stateless-function
class PageTitle extends Component {
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
    const { text, style } = this.props
    return (
      <View style={ style }>
      {
        this.state.fontLoaded ? (
        <Text style={ [ { fontFamily: 'montserrat' }, title ]}>
          {text}
        </Text>
        ) : null
      }
      </View>
    );
  }
}

PageTitle.propTypes = {
  text: PropTypes.string,
}

PageTitle.defaultProps = {
  text: '',
}

export { PageTitle };

