import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Banners from './banner.js';
import SwipApp from './Section3.js';
import Cards from './cards.js'



class MainPageCards extends Component{
  constructor(props){
    super(props);
    this.state = {
      control: {
        control1: 'Ok',
        control2: 'Cancel'
      },
    };
  };
  
  render() {
    return (
      <div>
        <Banners/>
        <SwipApp/>
      </div>
    )
  }
}

export default MainPageCards