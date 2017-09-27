import React, { Component } from 'react';
import { View } from 'react-native';
import {
  FormLabel,
  FormInput,
} from 'react-native-elements';

class LoginScreen extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput
          onChangeText={
            (text) => {
              console.log(text);
            }
          }
        />
      </View>
    );
  }
}

export default LoginScreen;
