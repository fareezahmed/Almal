import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
// import styles from '../assets/styles/ContractScreenStyles'
import { GlobalStyles, Colors } from '../config';

// Components
import ContractForm from '../components/ContractForm';

const styles = {
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
    marginTop: -30,
  },
};

// eslint-disable-next-line  react/prefer-stateless-function
class ContractScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={ [styles.screenStyle, GlobalStyles.padding] }>

        <ContractForm
          nameLabel="Full Name"
          phoneLabel="Mobile"
          usernameLabel="Email"
          passwordLabel="Password"
          confirmPasswordLabel="Confirm Password"
          buttonLabel="Sign Up"
          errorMessage="Invalid Username or Password"
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
