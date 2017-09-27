import React from 'react';
import Init from './src';
import Store from './src/Store';

const App = () => {
  const store = Store();

  return (
    <Init store={store} />
  );
};

export default App;
