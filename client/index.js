import React from 'react';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
// import store from './store';
import styles from './styles.css'; // eslint-disable-line no-unused-vars
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import reducers from './reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = createRoot(document.getElementById('root'));
const store = createStore(reducers, composeWithDevTools());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
