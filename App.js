import React, { Component } from 'react';
import ScreenRouter from './src/router';
import DBConfig from './src/config/dbConfig';

export default class App extends Component {
  componentWillMount() {
    DBConfig();
  }

  render() {
    return (
      <ScreenRouter />
    );
  }
}
