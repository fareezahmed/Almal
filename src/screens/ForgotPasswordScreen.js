import React, { Component } from 'react';
import { View } from 'react-native';
import { GlobalStyles, Colors } from '../config';

import ForgotPasswordForm from '../components/ForgotPasswordForm';
import Logo from '../components/Logo';

const styles = {
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
};

// eslint-disable-next-line  react/prefer-stateless-function
class ForgotPasswordScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={[styles.screenStyle, GlobalStyles.padding]}>
        {/* Header */}
        <Logo />

        <ForgotPasswordForm
          usernameLabel="Email"
          passwordLabel="Password"
          confirmPasswordLabel="Confirm Password"
          buttonLabel="Forgot Password"
          buttonResetLabel="Reset Password"
          navigate={navigate}
        />
      </View>
    );
  }
}

export default ForgotPasswordScreen;
