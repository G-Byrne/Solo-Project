import React from 'react';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import styles from './styles.css'; // eslint-disable-line no-unused-vars
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers/appReducer.js';

// grab root from index.html document
const root = createRoot(document.getElementById('root'));
// create redux store
const store = configureStore({ reducer: appReducer });

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
