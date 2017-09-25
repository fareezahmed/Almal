import React, { Component, PropTypes } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from '../components';

class ListComponent extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  };

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.list);
  }

  renderRow(data) {
    return <ListItem data={data} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => ({ list: state.list });

export const List = connect(mapStateToProps)(ListComponent);

