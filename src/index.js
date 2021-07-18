import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, HashRouter} from "react-router-dom";
import './index.scss';
import App from './App';
import 'macro-css';

ReactDOM.render(
    <HashRouter basename='/'>
        <App />
    </HashRouter>,
  document.getElementById('root'),
);
