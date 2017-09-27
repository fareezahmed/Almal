import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

import ScreenRouter from './Router';
import DBConfig from './config/dbConfig';
import reducers from './reducers';

class Init extends Component {
  componentWillMount() {
    DBConfig();
  }

  render() {
    const store = createStore(
      reducers,
      {},
      compose(
        applyMiddleware(ReduxThunk),
        autoRehydrate(),
      ),
    );


    return (
      <Provider store={persistStore(store)}>
        <ScreenRouter />
      </Provider>
    );
  }
}

export default Init;
