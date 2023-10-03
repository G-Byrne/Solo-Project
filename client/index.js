import React from 'react';
//import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import styles from './scss/application.scss'; // eslint-disable-line no-unused-vars

const root = createRoot(document.getElementById('contents'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);