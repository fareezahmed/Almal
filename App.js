import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ScreenRouter from './src/Router';
import Store from './src/Store';
import DBConfig from './src/config/dbConfig';

const store = Store();
class App extends Component {
  componentWillMount() {
    DBConfig();
  }

  render() {
    return (
      <Provider store={ store }>
        <ScreenRouter />
      </Provider>
    );
  }
}

export default App
