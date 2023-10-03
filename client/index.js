import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
// import store from './store';
import styles from './styles.css'; // eslint-disable-line no-unused-vars

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
