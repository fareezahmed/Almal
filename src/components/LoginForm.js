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
import { Input } from './commons';

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
  componentWillMount() {
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    // const { email, password } = this.props;
    console.log(this.props);

    this.props.loginUser(this.props);
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <FormValidationMessage>Error message</FormValidationMessage>
        </View>
      );
    }
  }

  render() {
    const {
      usernameLabel,
      passwordLabel,
      buttonLabel,
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
          <Button
            raised
            icon={{ name: 'done' }}
            title={buttonLabel}
            backgroundColor={Colors.PRIMARY_BUTTON}
            buttonStyle={[GlobalStyles.buttonLarge]}
            textStyle={GlobalStyles.buttonText}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const MapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;

  return { email, password, error };
};

export default connect(MapStateToProps, {
  emailChanged, passwordChanged, loginUser,
})(LoginForm);
