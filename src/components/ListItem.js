import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  LayoutAnimation,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

// Actions
import * as actions from '../actions';

// Styles
// import { GlobalStyles, Colors } from '../config';
import Colors from '../assets/styles/Colors';
import Variables from '../assets/styles/Variables';
import styles from '../assets/styles/ListItemStyles';

// Components
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
      cardChevronStyle,
    } = styles;

    return !expanded ? (
      <View style={ iconContainerStyles }>
        <Icon
          raised
          name="keyboard-arrow-down"
          color={ Colors.ICON_SECONDARY_COLOR }
          size={ Variables.IconSizeSml }
          containerStyle={ cardChevronStyle }
          onPress={ () => this.props.contractSelected(uid) }
        />
      </View>
    ) : null
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
      itemWrapper,
      item,
      card,
      thumbnail,
      thumbnailImage,
    } = styles;

    const nameStyle = [styles.baseText, styles.nameStyle]
    const dateStyle = [styles.baseText, styles.dateStyle]
    const dealTypeStyle = [styles.baseText, styles.dealTypeStyle]
    const dealAmountStyle = [styles.baseText, styles.dealAmountStyle]

    const description = {
      leadDate: this.props.data.leadDate,
      returnDate: this.props.data.returnDate,
      witness1: this.props.data.witness1,
      witness2: this.props.data.witness2,
    };

    const logo = require('../assets/img/logo.png')

    return (
      <TouchableWithoutFeedback
        onPress={ () => this.props.contractSelected(uid) }
      >
        <View style={ itemWrapper }>
          <View style={ item }>
            <View
              style={ rowStyle }
              key={ uid }
            >
              <View>
                { !expanded
                  ? (
                    <View style={ card }>
                      <View style={ thumbnail }>
                        {/* IMAGE */}
                        <Image
                          style={ thumbnailImage }
                          source={ logo }
                        />
                      </View>
                      <View>
                        <Text style={ nameStyle }>{name}</Text>
                        <View>
                          <Icon
                            name="keyboard-arrow-down"
                            color={ Colors.ICON_SECONDARY_COLOR }
                            size={ Variables.IconSizeSml }
                          />
                          <Text>{name}</Text>
                        </View>
                      </View>
                      <View>
                        <Text>
                          {dealAmount}
                        </Text>
                      </View>
                    </View>
                  )
                  : (
                    <View>
                      <View>
                        <Text>{name}</Text>
                      </View>
                      <View>
                        <Text>
                          {dealAmount}
                        </Text>
                      </View>
                    </View>
                  )
                }
                {/* List Item Sub Title */}
                { !expanded ? <Text style={ dateStyle }>Due Date:{returnDate}</Text> : null}
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

ListItemComponent.propTypes = {
  expanded: PropTypes.bool,
  data: PropTypes.object.isRequired,
  contractSelected: PropTypes.func.isRequired,
}

ListItemComponent.defaultProps = {
  expanded: false,
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.contractSelected === ownProps.data.uid

  return { expanded }
}

const ListItem = connect(mapStateToProps, actions)(ListItemComponent)

export default ListItem
