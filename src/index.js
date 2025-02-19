import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import emailjs from '@emailjs/browser';
import reportWebVitals from './reportWebVitals';

// Initialize EmailJS
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
