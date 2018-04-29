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
import Colors from '../assets/styles/Colors';
import Variables from '../assets/styles/Variables';
import styles from '../assets/styles/ListItemStyles';

// Components
import { ButtonElement } from './commons'
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
          size={ Variables.IconSize }
          containerStyle={ cardChevronStyle }
          onPress={ () => this.props.contractSelected(uid) }
        />
      </View>
    ) : null
  }

  render() {
    const { expanded, navigation } = this.props
    const {
      uid,
      name,
      dealType,
      dealAmount,
      returnDate,
    } = this.props.data

    const amount = `${dealType} ${dealAmount}`

    const {
      rowStyle,
      itemWrapper,
      item,
      cardWrapper,
      card,
      thumbnail,
      thumbnailImage,
      textContainer,
      subTextContainer,
      subText,
      buttonWrapper,
      buttonText,
      expandedTextContainer,
      expandedTitleText,
      expandedDealAmount,
    } = styles;

    const nameStyle = [styles.baseText, styles.nameStyle]
    const dateStyle = [styles.baseText, styles.dateStyle]
    const returnDateTextStyle = [styles.baseText, styles.dateStyle, styles.boldText]


    const description = {
      leadDate: this.props.data.leadDate,
      returnDate: this.props.data.returnDate,
      witness1: this.props.data.witness1,
      witness2: this.props.data.witness2,
      onPressUpate: () => navigation.navigate('Lead'),
      onPressReceived: () => {},
    };

    const avatar = { uri: this.props.data.avatar }
    // require('../assets/img/logo.png')

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
              <View style={ cardWrapper }>
                { !expanded
                  ? (
                    <View style={ card }>
                      <View style={ thumbnail }>
                        {/* IMAGE */}
                        <Image
                          style={ thumbnailImage }
                          source={ avatar }
                        />
                      </View>
                      <View style={ textContainer }>
                        <View>
                          <Text style={ nameStyle }>{name}</Text>
                        </View>
                        <View style={ subTextContainer }>
                          <Icon
                            name="map-marker"
                            type="font-awesome"
                            color={ Colors.ICON_THIRD_COLOR }
                            size={ Variables.IconSizeMinor }
                          />
                          <Text style={ subText }>{name}</Text>
                        </View>
                      </View>
                      <View>
                        <ButtonElement
                          text={ amount }
                          containerStyles={ buttonWrapper }
                          textStyles={ buttonText }
                          onPress={ () => this.props.contractSelected(uid) }
                        />
                      </View>
                    </View>
                  )
                  : (
                    <View style={ expandedTextContainer }>
                      <View style={ expandedTitleText }>
                        <Text style={ nameStyle }>{name}</Text>
                      </View>
                      <View>
                        <Text style={ expandedDealAmount }>
                          {amount}
                        </Text>
                      </View>
                    </View>
                  )
                }
                {/* List Item Sub Title */}
                { !expanded
                  ?
                    <View style={ subTextContainer }>
                      <Icon
                        name="calendar"
                        type="font-awesome"
                        color={ Colors.ICON_THIRD_COLOR }
                        size={ Variables.IconSizeMinor }
                      />
                      <Text style={ dateStyle }>
                        Due Date -
                      </Text>
                      <Text style={ returnDateTextStyle }>{returnDate}</Text>
                    </View>

                  : null}
              </View>
            </View>
            {/* List Item Description  */}
            <View>
              { expanded ? <ListItemDescription { ...description } /> : null }
            </View>
          </View>
          {/* this.renderIcon() */}
        </View>

      </TouchableWithoutFeedback>
    );
  }
}

ListItemComponent.propTypes = {
  expanded: PropTypes.bool,
  data: PropTypes.object.isRequired,
  contractSelected: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
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
