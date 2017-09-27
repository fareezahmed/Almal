import React, { Component } from 'react';
import { View } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { connect } from 'react-redux';
import { GlobalStyles, Colors } from '../config';
import { emailChanged } from '../actions';

const styles = {
  sectionStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383e45',
  },
};

class LoginScreen extends Component {
  constructor() {
    super();
    this.sectionStyles = styles.sectionStyles;
  }
  componentWillMount() {
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <View style={[this.sectionStyles]}>
        <View>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
          <FormValidationMessage>Error message</FormValidationMessage>
        </View>
        <View>
          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
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
  const { email } = auth;

  return { email };
};

export default connect(MapStateToProps, { emailChanged })(LoginScreen);
