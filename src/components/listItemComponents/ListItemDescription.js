import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from '../../assets/styles/ListItemStyles';

// Components
import { ButtonElement } from '../commons'

const ListItemDescription = ({
  leadDate,
  returnDate,
  witness1,
  witness2,
  onPressUpate,
  onPressReceived,
}) => (
  <View style={ styles.itemDescription }>
    <View style={ styles.descriptionWrapper }>
      <View style={ styles.descriptionTextWrapper }>
        <Text style={ styles.descriptionLabel }>
          Lead Date
        </Text>
        <Text style={ styles.descriptionValue }>
          {leadDate}
        </Text>
      </View>
      <View style={ styles.descriptionTextWrapper }>
        <Text style={ styles.descriptionLabel }>
          Due Date
        </Text>
        <Text style={ styles.descriptionValue }>
          {returnDate}
        </Text>
      </View>
    </View>
    <View style={ styles.descriptionWrapper }>
      <View style={ styles.descriptionTextWrapper }>
        <Text style={ styles.descriptionLabel }>Witness1</Text>
        <Text style={ styles.descriptionValue }>{witness1.name}</Text>
        <Text style={ styles.descriptionValue }>{witness1.phone}</Text>
      </View>
      <View style={ styles.descriptionTextWrapper }>
        <Text style={ styles.descriptionLabel }>
          Witness2
        </Text>
        <Text style={ styles.descriptionValue }>
          {witness2.name}
        </Text>
        <Text style={ styles.descriptionValue }>
          {witness2.phone}
        </Text>
      </View>
    </View>
    <View style={ styles.descriptionButtonContainer }>
      <ButtonElement
        text="Update"
        containerStyles={ styles.descriptionButtonWrapper }
        textStyles={ styles.descriptionButtonText }
        onPress={ onPressUpate }
      />
      <ButtonElement
        text="Received"
        containerStyles={ styles.descriptionButtonWrapper }
        textStyles={ styles.descriptionButtonText }
        onPress={ onPressReceived }
      />
    </View>
  </View>
);

ListItemDescription.propTypes = {
  leadDate: PropTypes.string.isRequired,
  returnDate: PropTypes.string.isRequired,
  witness1: PropTypes.object.isRequired,
  witness2: PropTypes.object.isRequired,
  onPressUpate: PropTypes.func.isRequired,
  onPressReceived: PropTypes.func.isRequired,
}

export default ListItemDescription;
