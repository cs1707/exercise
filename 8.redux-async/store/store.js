import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer.js';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

let store = createStoreWithMiddleware(rootReducer);

export default store;
