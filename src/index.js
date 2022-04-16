import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "react-multi-carousel/lib/styles.css";

ReactDOM.render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);
