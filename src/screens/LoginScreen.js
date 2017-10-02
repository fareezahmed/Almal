import React, { Component } from 'react';
import { View } from 'react-native';
import { GlobalStyles } from '../config';

import { Link } from '../components/commons';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';

const styles = {
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenStyles: {
    flex: 1,
    backgroundColor: '#383e45',
  },
  footerLinkStyle: {
    borderTopColor: '#FFF',
    borderTopWidth: 1,
    width: '100%',
    paddingTop: 30,
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const commonStyle = [
      GlobalStyles.row,
      GlobalStyles.noPadding,
      styles.centerAlign,
      GlobalStyles.gutters,
    ];
    const footerStyle = [commonStyle, GlobalStyles.flex1];
    const mainStyle = [GlobalStyles.gutters, styles.centerAlign, GlobalStyles.flex4];

    return (
      <View style={[styles.screenStyles]}>

        {/* Header */}
        <Logo />

        {/* Body */}
        <View style={mainStyle}>
          <LoginForm
            usernameLabel="Email"
            passwordLabel="Password"
            buttonLabel="Sign In"
            navigate={navigate}
          />
          <View style={[GlobalStyles.row, GlobalStyles.noPadding]}>
            <Link
              text="Forgot Password"
              onPress={() => navigate('ForgotPassword')}
            />
          </View>
        </View>

        {/* Footer */}
        <View style={footerStyle}>
          <View style={styles.footerLinkStyle} >
            <Link
              text="New here? Sign Up"
              onPress={() => navigate('SignUp')}
              style={[GlobalStyles.flex1, styles.centerAlign]}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
