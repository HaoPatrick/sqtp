import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
// import MainPage from './MainPage.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


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
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu alkjsdfajl</MenuItem>
        </Drawer>
      </div>
    );
  }
}

class AppBarSelf extends React.Component{
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose=()=> {
    this.props.onChangeState(
      !this.props.open
    );
    console.log('aaa')
  }

  render() {
    return (
      <AppBar
        title="Teasf again"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleClose}
        />      
    )
  }
}

class Main extends React.Component{
  constructor(props) {
    super();
    this.state = {
      open: true
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