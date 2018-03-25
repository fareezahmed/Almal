import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import { row, flex1 } from '../assets/styles/GlobalStyles';

import { Input, Dropdown } from './commons';

const OptionalSignUpRow = ({
  gender,
  age,
  onAgeChange,
  onGenderChange,
  error,
}) => (
  <View style={ row }>
    <View style={ flex1 }>
      <Input
        icon="hourglass-empty"
        label="Age"
        onChangeText={ onAgeChange }
        value={ age }
        error={ error }
      />
    </View>
    <View style={ flex1 }>
      <Dropdown
        icon="wc"
        label="Gender"
        onValueChange={ onGenderChange }
        value={ gender }
        items={ [
          {
            label: 'Male',
            value: 'male',
          },
          {
            label: 'Female',
            value: 'female',
          },
        ] }
        error={ error }
      />
    </View>
  </View>
);

OptionalSignUpRow.propTypes = {
  gender: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  error: PropTypes.string,
  onAgeChange: PropTypes.func.isRequired,
  onGenderChange: PropTypes.func.isRequired,
}

OptionalSignUpRow.defaultProps = {
  error: '',
}

export default OptionalSignUpRow;
