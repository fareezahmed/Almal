import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';

class ListItemComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    const { uid, name, avatar, leadDate, returnDate, witness1, witness2 } = this.props.data;
    console.log(this.props.data);
    return (
      <TouchableWithoutFeedback
        onPress={() => console.log(uid)}
      >
        <View key={uid}>
          <Text>{name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export const ListItem = connect()(ListItemComponent);
