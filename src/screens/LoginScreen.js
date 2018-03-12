import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from '../assets/styles/LoginScreenStyles'

// Components
import PageWrapper from '../components/PageWrapper';
import { PageTitle } from '../components/commons';
import LoginForm from '../components/LoginForm';
import FooterLink from '../components/FooterLink';

// eslint-disable-next-line react/prefer-stateless-function, jsx-a11y/anchor-is-valid
class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const bg = require('../assets/img/bg.png')

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
        <FooterLink
          preText="Don't have an Account? "
          text="Sign Up"
          onPress={ () => navigate('SignUp') }
        />
      </PageWrapper>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default LoginScreen;
