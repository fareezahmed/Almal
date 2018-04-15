import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import { Font } from 'expo'

// Styles
import Colors from '../assets/styles/Colors'
import { header, alignment, headerBackButton, headerTitle, lastElement } from '../assets/styles/GlobalStyles'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-semi': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { navigation, secondaryNavigation, secondaryIcon } = this.props
    const { navigate } = navigation
    const onPress = () => navigation.goBack();
    const onSecondaryPress = () => navigate(secondaryNavigation)
    console.log(secondaryIcon)
    return (
      <View style={ header }>
        <View>
          <Icon
            color={ Colors.WHITE }
            containerStyle={ headerBackButton }
            name="arrow-back"
            onPress={ onPress }
            size={ 25 }
          />
        </View>
        <View
          style={ alignment.flex1 }
        >
          {
            this.state.fontLoaded ? (
              <Text style={ headerTitle }>{this.props.title}</Text>
            ) : null
          }
        </View>
        {
          secondaryNavigation ? (
            <View
              style={ lastElement }
            >
              <Icon
                color={ Colors.WHITE }
                name={ secondaryIcon }
                onPress={ onSecondaryPress }
                size={ 25 }
              />
            </View>
          ) : null
        }
      </View>
    )
  }
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  secondaryIcon: PropTypes.string,
  secondaryNavigation: PropTypes.string,
}

Header.defaultProps = {
  secondaryIcon: '',
  secondaryNavigation: '',
}

export default Header;

