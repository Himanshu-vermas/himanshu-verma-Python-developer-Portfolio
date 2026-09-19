import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap 5 CSS & JS bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// Custom Modern Design System
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
