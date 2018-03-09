import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

const styles = {
  slideStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
};

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
    const resizeMode = 'cover';
    const resizeLogoMode = 'center';
    const remote = require('../assets/img/bg-with-gradient.png');

    return (
      <View
        style={ styles.slideStyle }
      >
        <Image
          style={ {
            backgroundColor: '#000',
            flex: 1,
            resizeMode,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          } }
          source={ remote }
        >
          <View
            style={ {
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            } }
          >
            <View
              style={ {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              width: 260,
              height: 260,
              borderRadius: 200,
              justifyContent: 'center',
              alignItems: 'center',
            } }
            >
              <View
                style={ {
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              width: 230,
              height: 230,
              borderRadius: 200,
              justifyContent: 'center',
              alignItems: 'center',
            } }
              >
                <View
                  style={ {
              backgroundColor: '#fff',
              width: 200,
              height: 200,
              borderRadius: 200,
              justifyContent: 'center',
              alignItems: 'center',
            } }
                >
                  <Image
                    style={ {
                position: 'absolute',
                top: 20,
                width: 180,
                height: 180,
              } }
                    source={ require('../assets/img/logo.png') }
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={ {
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            } }
          >
            <Image
              style={ {
                width: 200,
                height: 50,
              } }
              source={ require('../assets/img/logo-text.png') }
            />
            <View
              style={ {
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 90,
            } }
            >
            {
              this.state.fontLoaded ? (
                <TouchableOpacity onPress={ () => navigate('Login') }>
                  <Text
                    style={ {
                    fontFamily: 'open-sans-bold',
                    backgroundColor: 'transparent',
                    textAlign: 'center',
                    fontSize: 13,
                    fontWeight: 'bold',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 15,
                    paddingRight: 15,
                  } }
                  >
                  (2:282) O you who have believed, when you contract a debt for a specified term, write it down.
                  And let a scribe write [it] between you in justice. Let no scribe refuse to write as Allah has taught him
                  ...........
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
