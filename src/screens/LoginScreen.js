import React, { Component } from 'react';
import { View } from 'react-native';
import { GlobalStyles } from '../config';
import { Link } from '../components/commons';
import LoginForm from '../components/LoginForm';

const styles = {
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenStyles: {
    flex: 1,
    backgroundColor: '#383e45',
  },
  headerStyle: {
    flex: 2,
  },
  mainStyle: {
    flex: 4,
  },
  footerStyle: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'white',
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
    const footerStyle = [commonStyle, styles.footerStyle];
    const headerStyle = [commonStyle, styles.headerStyle];
    const mainStyle = [GlobalStyles.gutters, styles.centerAlign, styles.mainStyle];

    return (
      <View style={[styles.screenStyles]}>

        {/* Header */}
        <View style={headerStyle}>
          <Link
            text="New here? Sign Up"
            onPress={() => navigate('SignUp')}
          />
        </View>

        {/* Body */}
        <View style={mainStyle}>
          <LoginForm
            usernameLabel="Email"
            passwordLabel="Password"
            buttonLabel="Sign In"
          />
          <View style={[GlobalStyles.row, GlobalStyles.noPadding]}>
            <Link
              text="ForgotPassword"
              onPress={() => navigate('ForgotPassword')}
            />
          </View>
        </View>

        {/* Footer */}
        <View style={footerStyle}>
          <Link
            text="New here? Sign Up"
            onPress={() => navigate('SignUp')}
          />
        </View>

      </View>
    );
  }
}

export default LoginScreen;
