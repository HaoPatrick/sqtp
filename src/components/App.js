import React from 'react';
import '../static/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainStructure from './MainStructure.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';


class AppBarSelf extends React.Component{
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose=()=> {
    this.props.onChangeState(
      !this.props.open
    );
  }

  render() {
    return (
      <AppBar
        title={this.props.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleClose}
        />      
    )
  }
}

class DrawerUndocked extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose=()=> {
    this.props.onChangeState(
      !this.props.open
    );
  }
  
  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={256}
          open={this.props.open}
          onRequestChange={this.handleClose}
        >
          <MenuItem onTouchTap={this.handleClose}><Link to="/">Home</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link to="/section2">Section2</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}

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
          open={this.state.open} title={this.state.title}
          onChangeState={this.handleToggle} />
          <MainStructure/>
        <DrawerUndocked open={this.state.open}
          onChangeState={this.handleToggle} />
      </div>  
    )
  }
}

class NewAPP extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    )
  }
}

export default NewAPP;
