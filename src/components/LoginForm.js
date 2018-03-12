import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styles
import styles from '../assets/styles/LoginScreenStyles';

// Actions
import {
  emailChanged,
  passwordChanged,
  loginUser,
} from '../actions';

// Components
import { Input, Spinner, Link, ButtonElement } from './commons';


class LoginForm extends Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    this.props.loginUser(this.props);
  }

  // eslint-disable-next-line consistent-return
  renderError() {
    const { error } = this.props;
    let errorMessage;
    switch (error.code) {
      case 'auth/network-request-failed':
        errorMessage = 'Unable to connect, Check your network';
        break;
      case 'auth/user-disabled':
        errorMessage = 'User has been blocked, Please contact the admin';
        break;
      default:
        errorMessage = 'Invalid Username or Password';
        break;
    }
    if (error) {
      return (
        <Text style={ styles.errorMessage }>{errorMessage}</Text>
      );
    }
    return <View />;
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <ButtonElement
        text={ this.props.buttonLabel }
        styles={ styles.buttonWrapper }
        onPress={ this.onButtonPress }
      />
    );
  }

  render() {
    const {
      usernameLabel,
      passwordLabel,
      forgotLabel,
      error,
    } = this.props;

    return (
      <View style={ styles.fromWrapper }>
        <View style={ styles.loginForm }>
          <Input
            icon="person-outline"
            label={ usernameLabel }
            onChangeText={ this.onEmailChange }
            value={ this.props.email }
            error={ error }
          />
          <Input
            icon="lock-outline"
            secureTextEntry
            label={ passwordLabel }
            onChangeText={ this.onPasswordChange }
            value={ this.props.password }
            error={ error }
            last
          />
        </View>
        <View>
          <Link
            text={ forgotLabel }
            type="secondary"
            styles={ styles.formLink }
            onPress={ () => navigate('ForgotPassword') }
          />
        </View>
        <View style={ styles.errorSection }>
          {this.renderError()}
        </View>
        <View>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const MapStateToProps = ({ auth }) => {
  const {
    email, password, error, loading,
  } = auth;

  return {
    email, password, error, loading,
  };
};

LoginForm.propTypes = {
  usernameLabel: PropTypes.string.isRequired,
  passwordLabel: PropTypes.string.isRequired,
  forgotLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  emailChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
  loading: false,
}


export default connect(MapStateToProps, {
  emailChanged, passwordChanged, loginUser,
})(LoginForm);
