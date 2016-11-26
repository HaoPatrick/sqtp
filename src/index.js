import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Section2 from './components/Section2.js';
import Section3 from './components/Section3.js';
import Section4 from './components/Section4.js';
import NewJS from './components/new.js';
// import Main from './components/MainStructure.js';
import './static/index.css';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/2" component={Section2} />
      <Route path="/3" component={Section3} />
      <Route path="/4" component={Section4} />      
    </Route>
    <Route path="/a" component={Section2} />
    <Route path="/b" component={NewJS} />
  </Router>
),document.getElementById('root'))
