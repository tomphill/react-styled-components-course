import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {injectGlobal} from 'styled-components';

injectGlobal`
  body{
    font-family: 'Gaegu', cursive !important;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
