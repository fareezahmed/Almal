import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

import variables from '../assets/styles/variables'
import styles from '../assets/styles/splashScreenStyles'
import { tagline } from '../copy/splashScreen'

class SplashScreen extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'cavalier': require('../assets/fonts/Cavalier.ttf'),
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { navigate } = this.props.navigation;
    const bg = require('../assets/img/bg-with-gradient.png')
    const logo = require('../assets/img/logo.png')
    const logoText = require('../assets/img/logo-text.png')

    return (
      <View style={ styles.page }>
        <Image
          style={ styles.container }
          source={ bg }
        >
          <View style={ styles.imageWrapper }>
            <View style={ [styles.circle, styles.firstCircle] }>
              <View style={ [styles.circle, styles.secondCircle]}>
                <View style={ [styles.circle, styles.thirdCircle]}>
                  <Image style={ styles.logo }
                    source={ logo }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={ styles.textWrapper }>
            <Image style={ styles.textLogo }
              source={ logoText }
            />
            <View style={ [styles.textWrapper, styles.textContent]}>
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
        </Image>
      </View>
    );
  }
}

export default SplashScreen;
