import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Banners from './banner.js';


class CardExampleExpandable extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    let cardStyle = {
      margin:'10px'
    }
    return (
    <Card style={cardStyle}>
    <CardHeader
      title={"The "+this.props.title + " Card"}
      subtitle={"The "+this.props.title + " SubTitle"}
      actAsExpander={true}
      avatar="https://www.baidu.com/favicon.ico"
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
    )
  }
}

class MainPageCards extends Component{
  constructor(props){
    super(props);
    this.state = {
      cardNumber: [1,2,3,4,5,6,7,8,9,10]
    }
  };

  render() {
    let cardList = []

    this.state.cardNumber.forEach(function (value) {
      cardList.push(<CardExampleExpandable key={value} title={value} />)
    })

    return (
      <div>
        <Banners/>
        {cardList}
      </div>
    )
  }
}

export default MainPageCards