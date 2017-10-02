import React, { Component } from 'react';
import { View } from 'react-native';
import {
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { connect } from 'react-redux';
import { GlobalStyles, Colors } from '../config';
import {
  signUpNameChanged,
  signUpPhoneChanged,
  signUpEmailChanged,
  signUpPasswordChanged,
  signUpConfirmPasswordChanged,
  SignUpUser,
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

class SignUpForm extends Component {
  constructor() {
    super();
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onNameChange(text) {
    this.props.signUpNameChanged(text);
  }

  onPhoneChange(text) {
    this.props.signUpPhoneChanged(text);
  }

  onEmailChange(text) {
    this.props.signUpEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.signUpPasswordChanged(text);
  }

  onConfirmPasswordChange(text) {
    this.props.signUpConfirmPasswordChanged(text);
  }

  onButtonPress() {
    this.props.SignUpUser(this.props);
  }

  // eslint-disable-next-line consistent-return
  renderError() {
    const { error } = this.props;
    let errorMessage;
    switch (error.code) {
      case 'password-mismatch':
        errorMessage = 'Passwords does not match';
        break;
      case 'name-error':
        errorMessage = 'Please enter your full name';
        break;
      case 'phone-error':
        errorMessage = 'Please enter valid mobile number';
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Unable to connect, Check your network';
        break;
      case 'auth/user-disabled':
        errorMessage = 'User has been blocked, Please contact the admin';
        break;
      case 'auth/weak-password':
        errorMessage = error.message;
        break;
      case 'auth/invalid-email':
        errorMessage = 'Please enter a valid email address';
        break;
      default:
        errorMessage = 'Invalid Email or Password';
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
      nameLabel,
      phoneLabel,
      usernameLabel,
      passwordLabel,
      confirmPasswordLabel,
      error } = this.props;

    return (
      <View style={styles.formStyle}>
        <Input
          icon="person"
          label={nameLabel}
          onChangeText={this.onNameChange}
          value={this.props.name}
          error={error}
        />
        <Input
          icon="phone-iphone"
          label={phoneLabel}
          onChangeText={this.onPhoneChange}
          value={this.props.phone}
          error={error}
        />
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
        <Input
          icon="spellcheck"
          secureTextEntry
          label={confirmPasswordLabel}
          onChangeText={this.onConfirmPasswordChange}
          value={this.props.confirmPassword}
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

const MapStateToProps = ({ signUp }) => {
  const { name, phone, email, password, confirmPassword, error, loading } = signUp;

  return { name, phone, email, password, confirmPassword, error, loading };
};

export default connect(MapStateToProps, {
  signUpNameChanged,
  signUpPhoneChanged,
  signUpEmailChanged,
  signUpPasswordChanged,
  signUpConfirmPasswordChanged,
  SignUpUser,
})(SignUpForm);
