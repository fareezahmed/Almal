import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

// Styles
import Colors from '../assets/styles/Colors'
import { backButton } from '../assets/styles/GlobalStyles'

const BackButton = ({ navigation }) => {
  const onPress = () => navigation.goBack();

  return (
    <Icon
      color={ Colors.WHITE }
      containerStyle={ backButton }
      name="arrow-back"
      onPress={ onPress }
      size={ 25 }
    />
  );
};

BackButton.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default BackButton;
