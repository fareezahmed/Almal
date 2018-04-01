import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styles
import styles from '../assets/styles/ContractScreenStyles'

// Actions
import {
  contractNameChanged,
  contractPhoneChanged,
  // contractEmailChanged,
  // contractTypeChanged,
  // contractAmountChanged,
  // contractDateChanged,
  // contractReturnDateChanged,
  contractCreated,
} from '../actions';

// Components
import { Input, Spinner, ButtonElement } from './commons';

class ContractForm extends Component {
  constructor() {
    super();
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    // this.onEmailChange = this.onEmailChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onNameChange(text) {
    this.props.contractNameChanged(text);
  }

  onPhoneChange(text) {
    this.props.contractPhoneChanged(text);
  }

  // onEmailChange(text) {
  //   this.props.contractEmailChanged(text);
  // }


  onButtonPress() {
    console.log('Clicked on Create');
    this.props.contractCreated(this.props);
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
      nameLabel,
      phoneLabel,
      // emailLabel,
      // typeLabel,
      // amountLabel,
      // dateLabel,
      error,
    } = this.props;

    return (
      <View style={ styles.fromWrapper }>
        <View style={ styles.formStyle }>
          <Input
            icon="person-outline"
            label={ nameLabel }
            type="dark"
            onChangeText={ this.onNameChange }
            value={ this.props.name }
            error={ error }
          />
          <Input
            icon="phone-iphone"
            label={ phoneLabel }
            type="dark"
            onChangeText={ this.onPhoneChange }
            value={ this.props.phone }
            error={ error }
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

const MapStateToProps = ({ contract }) => {
  const {
    name, phone, type, amount, returnDate, contractDate, error, loading,
  } = contract;

  return {
    name, phone, type, amount, returnDate, contractDate, error, loading,
  };
};

ContractForm.propTypes = {
  nameLabel: PropTypes.string.isRequired,
  phoneLabel: PropTypes.string.isRequired,
  // emailLabel: PropTypes.string.isRequired,
  // typeLabel: PropTypes.string.isRequired,
  // amountLabel: PropTypes.number.isRequired,
  // dateLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  // amount: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  contractNameChanged: PropTypes.func.isRequired,
  contractPhoneChanged: PropTypes.func.isRequired,
  // contractEmailChanged: PropTypes.func.isRequired,
  // contractTypeChanged: PropTypes.func.isRequired,
  // contractAmountChanged: PropTypes.func.isRequired,
  // contractDateChanged: PropTypes.func.isRequired,
  contractCreated: PropTypes.func,
  navigate: PropTypes.func.isRequired,
}

ContractForm.defaultProps = {
  loading: false,
  contractCreated: () => {},
}

export default connect(MapStateToProps, {
  contractNameChanged,
  contractPhoneChanged,
  // contractEmailChanged,
  // contractTypeChanged,
  // contractAmountChanged,
  // contractDateChanged,
  contractCreated,
})(ContractForm);
