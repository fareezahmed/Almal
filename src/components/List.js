import React, { Component } from 'react';
import { ListView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import firebase from 'firebase';

// Styles
// import styles from '../assets/styles/MainScreenStyles'

// Actions
import {
  mainList,
} from '../actions';

import { ListItem } from '../components';

const styles = {
  cellStyle: {
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
};

const renderRow = data => (<ListItem data={ data } />);

class ListComponent extends Component {
  // constructor() {
  //   super();
  //   this.setState({ list: [] })
  // }

  // async componentWillMount() {
  //   const { currentUser } = firebase.auth()
  //   let listData

  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2,
  //   });

  //   try {
  //     await firebase.database().ref(`/users/${currentUser.uid}/contracts`)
  //       .on('value', (snapshot) => {
  //         listData = Object.values(snapshot.val())
  //         this.dataSource = ds.cloneWithRows(listData);
  //         // this.setState({ list: listData })
  //       });
  //     console.log('successful');
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  componentWillMount() {
    const { currentUser } = firebase.auth()
    const { data } = this.props
    console.log(data.list)
    console.log(typeof data.list)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(data.list);
  }

  render() {
    return (
      <ListView
        dataSource={ this.dataSource }
        renderRow={ renderRow }
        style={ styles.cellStyle }
      />
    );
  }
}

ListComponent.propTypes = {
  data: PropTypes.object,
}

ListComponent.defaultProps = {
  data: {},
}

const MapStateToProps = state => ({ data: state.list });

export default connect(MapStateToProps, {
  mainList,
})(ListComponent);

