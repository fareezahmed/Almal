import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from '../assets/styles/ContractScreenStyles'

// Components
import ContractForm from '../components/ContractForm';

// eslint-disable-next-line  react/prefer-stateless-function
class ContractScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const mainStyles = styles.main
    return (
      <View style={ mainStyles }>

        <ContractForm
          nameLabel="Full Name"
          phoneLabel="Mobile"
          emailLabel="Email"
          typeLabel="Type"
          amountLabel="Amount"
          buttonLabel="Lead"
          errorMessage=""
          navigate={ navigate }
        />
      </View>
    );
  }
}

ContractScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ContractScreen;
