import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SplashScreen extends Component {
  componentDidMount() {
    console.log('Splash Screen Openned');
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={styles.slideStyle}
      >
        <Text style={styles.textStyle}>Splash Screen</Text>
        <Button
          onPress={() => navigate('Login')}
          title="Login"
        />
      </View>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383e45',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
};

export default SplashScreen;
