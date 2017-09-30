import React, { Component } from 'react';
import { View } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { connect } from 'react-redux';
import { GlobalStyles } from '../config';
import { emailChanged, passwordChanged } from '../actions';

const styles = {
  sectionStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383e45',
  },
  loginScreen: {
    paddingLeft: 30,
    paddingRight: 30,
  },
};

class LoginScreen extends Component {
  constructor() {
    super();
    this.sectionStyles = styles.sectionStyles;
    this.loginScreen = styles.loginScreen;
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  componentWillMount() {
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <View style={[this.sectionStyles]}>
        <View style={[this.loginScreen]}>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
          <FormValidationMessage>Error message</FormValidationMessage>
        </View>
        <View style={[this.loginScreen]}>
          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
          <FormValidationMessage>Error message</FormValidationMessage>
        </View>
        <View style={[GlobalStyles.row]}>
          <Button
            raised
            icon={{ name: 'mode-edit' }}
            title="Sign Up"
            backgroundColor="#F8F8F8"
            buttonStyle={GlobalStyles.button}
            textStyle={GlobalStyles.buttonText}
          />
          <Button
            raised
            icon={{ name: 'done' }}
            title="Sign In"
            backgroundColor="#E5A60B"
            buttonStyle={GlobalStyles.button}
            textStyle={GlobalStyles.buttonText}
          />
        </View>
        <View />
      </View>
    );
  }
}

const MapStateToProps = ({ auth }) => {
  const { email, password } = auth;

  return { email, password };
};

export default connect(MapStateToProps, { emailChanged, passwordChanged })(LoginScreen);
