import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import firebase from 'firebase';

// Test Data
import data from '../reducers/List.json';

// Styles
import styles from '../assets/styles/MainScreenStyles'

// Actions
import {
  mainList,
} from '../actions';

// Components
import { Spinner } from './commons';
import { ListItem } from '../components';

class ListComponent extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
    const { currentUser } = firebase.auth()
    this.state = {
      dataSource: dataSource.cloneWithRows([]),
    }
    // this.itemsRef = firebase.database().ref(`/users/${currentUser.uid}/contracts`)
    this.itemsRef = {}
    console.log(this.itemsRef)
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  listenForItems(itemsRef) {
    // itemsRef.on('value', (snap) => {
    //   const listData = Object.values(snap.val())
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(listData),
    //   });
    // });

    const listData = data
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(listData),
    });
  }

  renderListView() {
    if (this.state.dataSource.rowIdentities[0].length === 0) {
      return <Spinner size="large" />;
    }
    const renderRow = data => (<ListItem data={ data } navigation={ this.props.navigation } />);
    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ renderRow }
        style={ styles.cellStyle }
      />
    );
  }

  render() {
    console.log(this.state.dataSource.rowIdentities)
    console.log(this.state.dataSource)
    return (
      <View style={ styles.listStyle }>
        {this.renderListView()}
      </View>
    );
  }
}

ListComponent.propTypes = {
  dataSource: PropTypes.object,
  navigation: PropTypes.object.isRequired,
}

ListComponent.defaultProps = {
  dataSource: {},
}

const MapStateToProps = state => ({ data: state.list });

export default connect(MapStateToProps, {
  mainList,
})(ListComponent);

