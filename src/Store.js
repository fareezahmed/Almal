import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import reducers from './reducers';

export default (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(Thunk),
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
