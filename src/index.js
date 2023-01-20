import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { docData } from './data/data';

(() => {
  document.querySelector('title').textContent = docData.title;
  const headTitle = document.querySelector('head');
  const setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel','shortcut icon');
  setFavicon.setAttribute('href',docData.favicon);
  headTitle.appendChild(setFavicon);
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);