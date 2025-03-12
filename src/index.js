import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
