import React, { Component } from 'react';
import { View } from 'react-native';
import { GlobalStyles, Colors } from '../config';

import SignUpForm from '../components/SignUpForm';
import Logo from '../components/Logo';

const styles = {
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
    marginTop: -30,
  },
};

// eslint-disable-next-line  react/prefer-stateless-function
class ProfileScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={[styles.screenStyle, GlobalStyles.padding]}>
        {/* Header */}
        <Logo />

        <SignUpForm
          nameLabel="Full Name"
          phoneLabel="Mobile"
          usernameLabel="Email"
          passwordLabel="Password"
          confirmPasswordLabel="Confirm Password"
          buttonLabel="Sign Up"
          errorMessage="Invalid Username or Password"
          navigate={navigate}
        />
      </View>
    );
  }
}

export default ProfileScreen;
