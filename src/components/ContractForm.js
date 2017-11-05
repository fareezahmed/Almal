import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import {
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { connect } from 'react-redux';
import { GlobalStyles, Colors } from '../config';
import {
  contractNameChanged,
  contractPhoneChanged,
  // contractTypeChanged,
  // contractAmountChanged,
  // contractReturnDateChanged,
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

class ContractForm extends Component {
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
    this.props.contractNameChanged(text);
  }

  onPhoneChange(text) {
    this.props.contractPhoneChanged(text);
  }

  onEmailChange(text) {
    this.props.contractEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.contractPasswordChanged(text);
  }

  onConfirmPasswordChange(text) {
    this.props.contractConfirmPasswordChanged(text);
  }

  onButtonPress() {
    console.log('Clicked on Create');
    // this.props.SignUpUser(this.props);
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
        title="Create Contract"
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
      // usernameLabel,
      // passwordLabel,
      // confirmPasswordLabel,
      error,
    } = this.props;

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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Input
            label="Type"
            onChangeText={this.onTypeChange}
            value={this.props.type}
            error={error}
            style={{ flex: 1 }}
          />
          <Picker
            selectedValue={this.props.type}
            onValueChange={this.onTypeChange}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <View style={{ width: 20 }} />
          <Input
            label="Amount"
            onChangeText={this.onAmountChange}
            value={this.props.amount}
            error={error}
            style={{ flex: 1 }}
          />
        </View>
        {this.renderError()}
        <View style={[GlobalStyles.row, GlobalStyles.padding]}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const MapStateToProps = ({ contract }) => {
  const {
    name, phone, type, amount, returnDate, contractDate, error, loading,
  } = contract;

  return {
    name, phone, type, amount, returnDate, contractDate, error, loading,
  };
};

export default connect(MapStateToProps, {
  contractNameChanged,
  contractPhoneChanged,
  // contractEmailChanged,
  // contractPasswordChanged,
  // contractConfirmPasswordChanged,
  // SignUpUser,
})(ContractForm);
