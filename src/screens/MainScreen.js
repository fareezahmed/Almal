import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from '../assets/styles/MainScreenStyles'

// Components
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import List from '../components/List';

// eslint-disable-next-line  react/prefer-stateless-function
class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <PageWrapper type="secondary">
        {/* Header */}
        <Header
          title="Main"
          navigation={ this.props.navigation }
          secondaryNavigation="Lead"
          secondaryIcon="settings"
        />
        {/* Body */}
        <View style={ styles.main }>
          <List />
        </View>
      </PageWrapper>
    )
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default MainScreen;
