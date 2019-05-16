import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css' // reactstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // for mdb
import 'bootstrap-css-only/css/bootstrap.min.css'; // for mdb
import 'mdbreact/dist/css/mdb.css'; // for mdb

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
