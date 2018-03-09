import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { GlobalStyles, Colors } from '../config';
import * as actions from '../actions';
import { ListItemDescription } from './listItemComponents';

class ListItemComponent extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderIcon() {
    const { uid } = this.props.data;
    const { expanded } = this.props;
    const {
      iconContainerStyles,
      cardChevronStyle } = styles;
    if (!expanded) {
      return (
        <View style={[GlobalStyles.centerAligned, iconContainerStyles]}>
          <Icon
            raised
            name="keyboard-arrow-down"
            color={Colors.PRIMARY_COLOR}
            size={30}
            containerStyle={cardChevronStyle}
            onPress={() => this.props.contractSelected(uid)}
          />
        </View>
      );
    }
  }

  render() {
    const { expanded } = this.props;
    const {
      uid,
      name,
      dealType,
      dealAmount,
      returnDate,
    } = this.props.data;

    const {
      rowStyle,
      nameStyle,
      dealTypeStyle,
      dealAmountStyle,
      viewStyle,
      dateStyle,
    } = styles;

    const description = {
      leadDate: this.props.data.leadDate,
      returnDate: this.props.data.returnDate,
      witness1: this.props.data.witness1,
      witness2: this.props.data.witness2,
    };

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.contractSelected(uid)}
      >
        <View style={[{ paddingBottom: 10 }]}>
          <View style={[GlobalStyles.shadow, viewStyle, { paddingBottom: 22 }]}>
            <View
              style={[GlobalStyles.row, rowStyle]}
              key={uid}
            >
              <View style={GlobalStyles.flex5}>
                <Text style={[GlobalStyles.cardTitle, nameStyle]}>{name}</Text>
                {/* List Item Sub Title */}
                { !expanded ? <Text style={[GlobalStyles.cardSubTitle, dateStyle]}>Due Date:{returnDate}</Text> : null}
              </View>
              <View style={[GlobalStyles.flex1]}>
                <View style={[GlobalStyles.row]}>
                  <Text style={[GlobalStyles.cardTitle, GlobalStyles.textRightAligned, dealTypeStyle]}>
                    {dealType}
                  </Text>
                  <Text style={[GlobalStyles.cardTitle, GlobalStyles.textRightAligned, dealAmountStyle]}>
                    {dealAmount}
                  </Text>
                </View>

              </View>
            </View>
            {/* List Item Description  */}
            <View>
              { expanded ? <ListItemDescription { ...description } /> : null }
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
    paddingBottom: 0,
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
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.contractSelected === ownProps.data.uid;

  return { expanded };
};

const ListItem = connect(mapStateToProps, actions)(ListItemComponent);

export default ListItem;
