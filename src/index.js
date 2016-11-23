import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Main from './components/MainStructure.js';
import './static/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
