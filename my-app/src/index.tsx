import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseReducer from './hooks/useReducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <UseReducer />
  </React.StrictMode>
);

