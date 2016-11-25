import React from 'react';
import { Router, Route, hashHistory,Link } from 'react-router';

import MainPage from './MainPage.js';
import Section2 from './Section2.js';


class Main extends React.Component{
  constructor(props) {
    super();
    this.state = {
      open: false,
      title:'Title'
    };
    this.handleToggle =
      this.handleToggle.bind(this);
  }
  handleToggle(open) {
    this.setState({
      open: open
    });
  }
  render() {
    return (
      <div>
        <AppBarSelf
          open={this.state.open}
          onChangeState={this.handleToggle} /> 
        <DrawerUndocked open={this.state.open}
          onChangeState={this.handleToggle} />
      </div>  
    )
  }
}
export default Main
