import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Font } from 'expo';

// Styles
import styles from '../assets/styles/SplashScreenStyles'

// Content
import { tagline } from '../copy/SplashScreen'

// Components
import Logo from '../components/Logo';
import PageWrapper from '../components/PageWrapper';

class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { navigate } = this.props.navigation;
    const bg = require('../assets/img/bg-with-gradient.png')
    const logoText = require('../assets/img/logo-text.png')
    const textContainStyles = [styles.textWrapper, styles.textContent]

    return (
      <PageWrapper bg={ bg }>
        <Logo />
        <View style={ styles.textWrapper }>
          <Image
            style={ styles.textLogo }
            source={ logoText }
          />
          <View style={ textContainStyles }>
            {
              this.state.fontLoaded ? (
                <TouchableOpacity onPress={ () => navigate('Login') }>
                  <Text style={ styles.tagline }>
                    { tagline }
                  </Text>
                </TouchableOpacity>
              ) : null
            }
          </View>
        </View>
      </PageWrapper>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SplashScreen;
