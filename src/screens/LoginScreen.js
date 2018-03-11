import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import variables from '../assets/styles/Variables'
import styles from '../assets/styles/LoginScreenStyles'

// Components
import PageWrapper from '../components/PageWrapper';
import { PageTitle, Link } from '../components/commons';
import LoginForm from '../components/LoginForm';

// eslint-disable-next-line react/prefer-stateless-function
class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const bg = require('../assets/img/bg.png')

    const footerStyle = styles.footerWrapper;
    const mainStyle = styles.main;
    const pageTitleStyle = styles.pageTitle;

    return (
      <PageWrapper bg={ bg }>
        {/* Body */}
        <View style={ mainStyle }>
          <PageTitle style={ pageTitleStyle } text="Sign In" />
          <LoginForm
            usernameLabel="Email"
            passwordLabel="Password"
            buttonLabel="Sign In"
            navigate={ navigate }
          />
        </View>

        {/* Footer */}
        <View style={ footerStyle }>
          <Link
            text="Don't have an Account? Sign Up"
            onPress={ () => navigate('SignUp') }
          />
        </View>
      </PageWrapper>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default LoginScreen;
