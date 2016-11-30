import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Section2 from './components/Section2.js';
import Section3 from './components/Section3.js';
import Section4 from './components/Section4.js';
import NewJS from './components/new.js';
import GraphQLTest from './components/graphqltest.js';



import { ApolloProvider } from 'react-apollo';
import ApolloClient,{createNetworkInterface} from 'apollo-client';
const client = new ApolloClient({
  networkInterface:createNetworkInterface({uri:'http://www.zhangcy.cn:3010/graphql'})
});

// import Main from './components/MainStructure.js';
import './static/index.css';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
    <ApolloProvider client={client}>
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/2" component={Section2}/>
      <Route path="/3" component={Section3} />
      <Route path="/4" component={Section3} /> 
      <Route path="/graph" component={GraphQLTest}/> 
    </Route>
    <Route path="/a" component={Section2} />
    <Route path="/b" component={NewJS} />
    </Router>
  </ApolloProvider>  
), document.getElementById('root'))
