import React from 'react';
import '../static/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainStructure from './MainStructure.js';


class NewAPP extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainStructure />
        </MuiThemeProvider>
    )
  }
}

export default NewAPP;
