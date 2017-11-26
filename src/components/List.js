import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

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
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.list);
  }

  render() {
    console.log(this.props.list);
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
  list: PropTypes.array,
}

ListComponent.defaultProps = {
  list: {},
}

const mapStateToProps = state => ({ list: state.list });

const List = connect(mapStateToProps)(ListComponent);

export default List;
