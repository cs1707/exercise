import React from 'react';
import App from './containers/App';
import store from './store/store.js';
import { Provider } from 'react-redux';

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.body);
