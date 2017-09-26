import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { GlobalStyles, Colors } from '../config';
import * as actions from '../actions';

class ListItemComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const { expanded } = this.props;
    const {
      uid,
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

    if (expanded) {
      return (
        <View style={[viewStyle]}>
          <View style={[GlobalStyles.row, rowStyle]}>
            <View style={GlobalStyles.flex3}>
              <Text style={[GlobalStyles.cardLabel]}>Lead Date</Text>
              <Text style={[GlobalStyles.cardValue]}>{leadDate}</Text>
            </View>
            <View style={GlobalStyles.flex3}>
              <Text style={[GlobalStyles.cardLabel, GlobalStyles.textRightAligned]}>Due Date</Text>
              <Text style={[GlobalStyles.cardValue, GlobalStyles.textRightAligned]}>{returnDate}</Text>
            </View>
          </View>
          <View style={[GlobalStyles.row, rowStyle]}>
            <View style={GlobalStyles.flex3}>
              <Text style={[GlobalStyles.cardLabel]}>Witness1</Text>
              <Text style={[GlobalStyles.cardValue]}>{witness1.name}</Text>
              <Text style={[GlobalStyles.cardValue]}>{witness1.phone}</Text>
            </View>
            <View style={GlobalStyles.flex3}>
              <Text style={[GlobalStyles.cardLabel, GlobalStyles.textRightAligned]}>Witness2</Text>
              <Text style={[GlobalStyles.cardValue, GlobalStyles.textRightAligned]}>{witness2.name}</Text>
              <Text style={[GlobalStyles.cardValue, GlobalStyles.textRightAligned]}>{witness2.phone}</Text>
            </View>
          </View>
        </View>
      );
    }
  }

  renderIcon() {
    const { expanded } = this.props;
    const {
      iconContainerStyles,
      cardChevronStyle } = styles;
    if (!expanded) {
      return(
        <View style={[GlobalStyles.centerAligned, iconContainerStyles]}>
          <Icon
            raised
            name='keyboard-arrow-down'
            color={Colors.PRIMARY_COLOR}
            size={30}
            containerStyle={cardChevronStyle}
            onPress={() => this.props.selectedDeal(uid)}
          />
        </View>
      );
    }
  }

  renderSubTitle() {
    const { expanded } = this.props;
    const { returnDate } = this.props.data;
    const { dateStyle } = styles;
    if (!expanded) {
      return(
        <Text style={[GlobalStyles.cardSubTitle, dateStyle]}>Due Date:{returnDate}</Text>
      );
    }
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

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectedDeal(uid)}
      >
        <View style={[{ paddingBottom: 10 }]}>
          <View style={[GlobalStyles.shadow, viewStyle, { paddingBottom: 22 }]}>
            <View
              style={[GlobalStyles.row, rowStyle]}
              key={uid}
              >
              <View style={GlobalStyles.flex5}>
                <Text style={[GlobalStyles.cardTitle, nameStyle]}>{name}</Text>
                {this.renderSubTitle()}
              </View>
              <View style={[GlobalStyles.flex1]}>
                <View style={[GlobalStyles.row]}>
                  <Text style={[GlobalStyles.cardTitle, GlobalStyles.textRightAligned, dealTypeStyle]}>{dealType}</Text>
                  <Text style={[GlobalStyles.cardTitle, GlobalStyles.textRightAligned, dealAmountStyle]}>{dealAmount}</Text>
                </View>

              </View>
            </View>
            <View>
              {this.renderDescription()}
            </View>
          </View>
          {this.renderIcon()}
        </View>

      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  rowStyle: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 5,
  },
  nameStyle: {
    fontSize: 22,
    color: '#304247',
    fontWeight: '500',
  },
  dealTypeStyle: {
    marginTop: 7,
    fontSize: 24,
    color: '#304247',
    fontWeight: '500',
  },
  dealAmountStyle: {
    marginTop: 7,
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
  iconContainerStyles: {
    marginTop: -35,
  },
  cardChevronStyle: {
    width: 40,
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
  },
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedItemId === ownProps.data.uid;

  return { expanded };
};


export const ListItem = connect(mapStateToProps, actions)(ListItemComponent);
