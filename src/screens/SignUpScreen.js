import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from '../assets/styles/SignUpScreenStyles';

// Components
import PageWrapper from '../components/PageWrapper';
import { PageTitle } from '../components/commons';
import SignUpForm from '../components/SignUpForm';
import BackButton from '../components/BackButton';

// eslint-disable-next-line  react/prefer-stateless-function
class SignUpScreen extends Component {
  render() {
    console.log(this.props.navigation)
    const { navigate } = this.props.navigation;
    const bg = require('../assets/img/bg.png')

    const mainStyle = styles.main;
    const pageTitleStyle = styles.pageTitle;

    return (
      <PageWrapper bg={ bg }>
        {/* Header */}
        <BackButton navigation={ this.props.navigation } />
        {/* Body */}
        <View style={ mainStyle }>
          <PageTitle style={ pageTitleStyle } text="Sign Up" />
          <SignUpForm
            nameLabel="Full Name"
            phoneLabel="Mobile"
            usernameLabel="Email"
            passwordLabel="Password"
            confirmPasswordLabel="Confirm Password"
            buttonLabel="Sign Up"
            errorMessage="Invalid Username or Password"
            navigate={ navigate }
          />
        </View>
      </PageWrapper>
    );
  }
}

SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SignUpScreen
