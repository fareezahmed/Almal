import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from '../assets/styles/ContractScreenStyles'

// Components
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import ContractForm from '../components/ContractForm';


// eslint-disable-next-line  react/prefer-stateless-function
class ContractScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <PageWrapper type="secondary">
        {/* Header */}
        <Header title="Leading Record" navigation={ this.props.navigation } />
        {/* Body */}
        <ScrollView>
          <View style={ styles.main }>
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
        </ScrollView>
      </PageWrapper>
    )
  }
}

ContractScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ContractScreen;
