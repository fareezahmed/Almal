import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { GlobalStyles, Colors } from '../config';

class ListItemComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    const {
      uid,
      name,
      avatar,
      dealType,
      leadDate,
      dealAmount,
      returnDate,
      witness1,
      witness2 } = this.props.data;
    const {
      rowStyle,
      nameStyle,
      dealTypeStyle,
      dealAmountStyle,
      dateStyle,
      viewStyle } = styles;
    console.log(this.props.data);
    return (
      <TouchableWithoutFeedback
        onPress={() => console.log(uid)}
      >
        <View style={[GlobalStyles.shadow, viewStyle]}>
          <View
            style={[GlobalStyles.row, rowStyle]}
            key={uid}
            >
            <View style={GlobalStyles.flex5}>
              <Text style={[GlobalStyles.cellLabel, nameStyle]}>{name}</Text>
              <Text style={[GlobalStyles.cellHelpText, dateStyle]}>Due Date:{returnDate}</Text>
            </View>
            <View style={[GlobalStyles.flex1]}>
              <View style={[GlobalStyles.row]}>
                <Text style={[GlobalStyles.cellLabel, GlobalStyles.textRightAligned, dealTypeStyle]}>{dealType}</Text>
                <Text style={[GlobalStyles.cellLabel, GlobalStyles.textRightAligned, dealAmountStyle]}>{dealAmount}</Text>
              </View>

            </View>
          </View>
          <Icon
            raised
            name='keyboard-arrow-down'
            color={Colors.PRIMARY_COLOR}
            size={30}
            containerStyle={
              {
                width: 40,
                height: 40,
                marginTop: -5,
                paddingLeft: 5,
                paddingRight: 5,
                backgroundColor: '#fff',
              }
            }
            onPress={() => console.log(uid)}
          />
          <View>

          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  rowStyle: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 10,
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 80,
    borderRadius: 5,
    marginBottom: 30,
  },
  nameStyle: {
    fontSize: 22,
    color: '#304247',
    fontWeight: '500',
  },
  dealTypeStyle: {
    marginTop: 5,
    fontSize: 24,
    color: '#304247',
    fontWeight: '500',
  },
  dealAmountStyle: {
    marginTop: 5,
    fontSize: 24,
    paddingLeft: 1,
    color: '#304247',
    fontWeight: '500',
  },
  dateStyle: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '500',
  },
}


export const ListItem = connect()(ListItemComponent);
