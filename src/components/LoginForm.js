import React, { Component } from 'react';
import { View } from 'react-native';
import {
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { connect } from 'react-redux';
import { GlobalStyles, Colors } from '../config';
import {
  emailChanged,
  passwordChanged,
  loginUser,
} from '../actions';
import { Input, Spinner } from './commons';

const styles = {
  formStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    paddingTop: 0,
  },
};

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
        <View>
          <FormValidationMessage>{errorMessage}</FormValidationMessage>
        </View>
      );
    }
    return <View />;
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        raised
        icon={{ name: 'done' }}
        title={this.props.buttonLabel}
        backgroundColor={Colors.PRIMARY_BUTTON}
        buttonStyle={[GlobalStyles.buttonLarge]}
        textStyle={GlobalStyles.buttonText}
        onPress={this.onButtonPress}
      />
    );
  }

  render() {
    const {
      usernameLabel,
      passwordLabel,
      error } = this.props;

    return (
      <View style={styles.formStyle}>
        <Input
          icon="email"
          label={usernameLabel}
          onChangeText={this.onEmailChange}
          value={this.props.email}
          error={error}
        />
        <Input
          icon="lock"
          secureTextEntry
          label={passwordLabel}
          onChangeText={this.onPasswordChange}
          value={this.props.password}
          error={error}
        />
        {this.renderError()}
        <View style={[GlobalStyles.row, GlobalStyles.padding]}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const MapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(MapStateToProps, {
  emailChanged, passwordChanged, loginUser,
})(LoginForm);
