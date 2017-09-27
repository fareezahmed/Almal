import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ScreenRouter from './Router';
import DBConfig from './config/dbConfig';

class Init extends Component {
  componentWillMount() {
    DBConfig();
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ScreenRouter />
      </Provider>
    );
  }
}

export default Init;
