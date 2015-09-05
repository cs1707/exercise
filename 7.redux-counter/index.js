import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import counter from './reducers/counter.jsx';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(counter, 0);

React.render(<Provider store={store}>
             {() => <App />}
</Provider>,
            document.getElementById('root'));
