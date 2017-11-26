import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ListItem } from '../components';

class ListComponent extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.list);
  }

  renderRow(data) {
    console.log(data);
    return <ListItem data={data} />;
  }

  render() {
    console.log(this.props.list);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        style={styles.cellStyle}
      />
    );
  }
}

const mapStateToProps = state => ({ list: state.list });

const styles = {
  cellStyle: {
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
};

export const List = connect(mapStateToProps)(ListComponent);
