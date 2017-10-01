import React, { Component } from 'react';
import { View } from 'react-native';
import {
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { connect } from 'react-redux';
import { GlobalStyles, Colors } from '../config';
import {
  forgotPasswordEmailChanged,
  forgotPasswordPasswordChanged,
  forgotPasswordConfirmPasswordChanged,
  forgotPasswordEmailValidate,
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

class ForgotPasswordForm extends Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onEmailChange(text) {
    this.props.forgotPasswordEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.forgotPasswordPasswordChanged(text);
  }

  onConfirmPasswordChange(text) {
    this.props.forgotPasswordConfirmPasswordChanged(text);
  }

  onButtonPress() {
    this.props.forgotPasswordEmailValidate(this.props);
  }

  // eslint-disable-next-line consistent-return
  renderError() {
    const { error } = this.props;
    // let errorMessage;
    // switch (error.code) {
    //   case 'auth/network-request-failed':
    //     errorMessage = 'Unable to connect, Check your network';
    //     break;
    //   default:
    //     errorMessage = 'Invalid Email';
    //     break;
    // }
    // if (error) {
    //   return (
    //     <View>
    //       <FormValidationMessage>{errorMessage}</FormValidationMessage>
    //     </View>
    //   );
    // }
    return <View />;
  }

  renderInput() {
    const {
      emailSucess,
      error,
      usernameLabel,
      passwordLabel,
      confirmPasswordLabel,
    } = this.props;

    if (emailSucess) {
      return (
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
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
        </View>
      );
    }
    return (
      <Input
        icon="email"
        label={usernameLabel}
        onChangeText={this.onEmailChange}
        value={this.props.email}
        error={error}
      />
    );
  }

  renderButton() {
    const {
      emailSucess,
      loading,
    } = this.props;

    if (loading) {
      return <Spinner size="large" />;
    }

    if (emailSucess) {
      return (
        <Button
          raised
          icon={{ name: 'done' }}
          title={this.props.buttonResetLabel}
          backgroundColor={Colors.PRIMARY_BUTTON}
          buttonStyle={[GlobalStyles.buttonLarge]}
          textStyle={GlobalStyles.buttonText}
          onPress={this.onButtonPress}
        />
      );
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
        {this.renderInput()}
        {this.renderError()}
        <View style={[GlobalStyles.row, GlobalStyles.padding]}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const MapStateToProps = ({ forgotPassword }) => {
  const { email, password, confirmPassword, emailSucess, error, loading } = forgotPassword;

  return { email, password, confirmPassword, emailSucess, error, loading };
};

export default connect(MapStateToProps, {
  forgotPasswordEmailChanged,
  forgotPasswordPasswordChanged,
  forgotPasswordConfirmPasswordChanged,
  forgotPasswordEmailValidate,
})(ForgotPasswordForm);
