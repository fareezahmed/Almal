import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from '../assets/styles/LoginScreenStyles'

// Components
import PageWrapper from '../components/PageWrapper';
import { PageTitle } from '../components/commons';
import SignUpForm from '../components/SignUpForm';

// eslint-disable-next-line  react/prefer-stateless-function
class ProfileScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const bg = require('../assets/img/bg.png')

    const mainStyle = styles.main;
    const pageTitleStyle = styles.pageTitle;

    return (
      <PageWrapper bg={ bg }>
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

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen
