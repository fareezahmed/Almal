import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import { Colors } from '../config';
import * as actions from '../actions';

class ListView extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderRow(item) {
    return (
      <View style={subtitleView}>
        <Image
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          style={ratingImage}
        />
        <Text style={ratingText}>{item.subtitle}</Text>
      </View>
    );
  }

  render() {
    const { subtitleView, ratingImage, ratingText } = styles;

    return (
      <List>
        {
          list.map((item, index) => (
            <ListItem
              roundAvatar
              rightTitle="Recieved"
              key={item.uid}
              title={item.name}
              subtitle={this.renderRow}
              avatar={{ uri: item.avatar_url }}
            />
          ))
        }
      </List>
    );
  }
}

const styles = {
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: Colors.BLACK,
  },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListView);
