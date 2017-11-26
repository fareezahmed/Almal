import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import { GlobalStyles } from '../../config';

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 5,
  },
}

const ListItemDescription = ({
  leadDate,
  returnDate,
  witness1,
  witness2,
}) => (
  <View style={ [styles.viewStyle] }>
    <View style={ [GlobalStyles.row, GlobalStyles.noPaddingBottom] }>
      <View style={ GlobalStyles.flex3 }>
        <Text style={ [GlobalStyles.cardLabel] }>Lead Date</Text>
        <Text style={ [GlobalStyles.cardValue] }>{leadDate}</Text>
      </View>
      <View style={ GlobalStyles.flex3 }>
        <Text style={ [GlobalStyles.cardLabel, GlobalStyles.textRightAligned] }>
          Due Date
        </Text>
        <Text style={ [GlobalStyles.cardValue, GlobalStyles.textRightAligned] }>
          {returnDate}
        </Text>
      </View>
    </View>
    <View style={ [GlobalStyles.row, GlobalStyles.noPaddingBottom] }>
      <View style={ GlobalStyles.flex3 }>
        <Text style={ [GlobalStyles.cardLabel] }>Witness1</Text>
        <Text style={ [GlobalStyles.cardValue] }>{witness1.name}</Text>
        <Text style={ [GlobalStyles.cardValue] }>{witness1.phone}</Text>
      </View>
      <View style={ GlobalStyles.flex3 }>
        <Text style={ [GlobalStyles.cardLabel, GlobalStyles.textRightAligned] }>
          Witness2
        </Text>
        <Text style={ [GlobalStyles.cardValue, GlobalStyles.textRightAligned] }>
          {witness2.name}
        </Text>
        <Text style={ [GlobalStyles.cardValue, GlobalStyles.textRightAligned] }>
          {witness2.phone}
        </Text>
      </View>
    </View>
    <View style={ [GlobalStyles.row, GlobalStyles.noPaddingBottom] }>
      <Button
        raised
        icon={ { name: 'mode-edit' } }
        title="Update"
        backgroundColor="#E5A60B"
        buttonStyle={ GlobalStyles.button }
        textStyle={ GlobalStyles.buttonText }
      />
      <Button
        raised
        icon={ { name: 'done-all' } }
        title="Received"
        backgroundColor="#008a7d"
        buttonStyle={ GlobalStyles.button }
        textStyle={ GlobalStyles.buttonText }
      />
    </View>
  </View>
);

ListItemDescription.propTypes = {
  leadDate: PropTypes.string.isRequired,
  returnDate: PropTypes.string.isRequired,
  witness1: PropTypes.object.isRequired,
  witness2: PropTypes.object.isRequired,
}

export default ListItemDescription;
