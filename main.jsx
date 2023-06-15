import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './src/routes/Routes';

import './index.css'
import "./src/styles/scrollbar.css"
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

