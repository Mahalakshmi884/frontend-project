// index.jsx
import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Assuming this imports your Redux store
import App from './App';
import './App.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
