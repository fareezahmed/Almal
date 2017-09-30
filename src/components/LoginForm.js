import React, { Component } from 'react';
import { View } from 'react-native';
import {
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { connect } from 'react-redux';
import { GlobalStyles, Colors } from '../config';
import { emailChanged, passwordChanged } from '../actions';
import { Input } from './commons';

const styles = {
  formStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class LoginForm extends Component {
  constructor() {
    super();
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
    const { usernameLabel, passwordLabel, buttonLabel } = this.props;

    return (
      <View style={styles.formStyle}>
        <Input
          icon="email"
          label={usernameLabel}
          onChangeText={this.onEmailChange}
          value={this.props.email}
        />
        <Input
          icon="lock"
          secureTextEntry
          label={passwordLabel}
          onChangeText={this.onPasswordChange}
          value={this.props.password}
        />
        <View>
          <FormValidationMessage>Error message</FormValidationMessage>
        </View>
        <View style={[GlobalStyles.row]}>
          <Button
            raised
            icon={{ name: 'done' }}
            title={buttonLabel}
            backgroundColor={Colors.PRIMARY_BUTTON}
            buttonStyle={[GlobalStyles.buttonLarge]}
            textStyle={GlobalStyles.buttonText}
          />
        </View>
      </View>
    );
  }
}

const MapStateToProps = ({ auth }) => {
  const { email, password } = auth;

  return { email, password };
};

export default connect(MapStateToProps, { emailChanged, passwordChanged })(LoginForm);
