import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const tilesData = [
  {
    title: 'qqqqqq',
    avatar: "https://www.baidu.com/favicon.ico",
    subtitle: 'bbbbb',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. " +
    "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." +
    "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
  },
  {
    title: 'bbbbbb',
    avatar: "https://www.baidu.com/favicon.ico",
    subtitle: 'bbbbb',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. " +
    "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." +
    "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
  },
  {
    title: 'qqqqqq',
    avatar: "https://www.baidu.com/favicon.ico",
    subtitle: 'bbbbb',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. " +
    "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." +
    "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
  },
  {
    title: 'qqqqqq',
    avatar: "https://www.baidu.com/favicon.ico",
    subtitle: 'bbbbb',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. " +
    "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." +
    "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
  },
  {
    title: 'qqqqqq',
    avatar: "https://www.baidu.com/favicon.ico",
    subtitle: 'bbbbb',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. " +
    "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." +
    "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
  },
  {
    title: 'qqqqqq',
    avatar: "https://www.baidu.com/favicon.ico",
    subtitle: 'bbbbb',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. " +
    "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." +
    "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
  },
]

class CardExampleExpandable extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    let cardStyle = {
      marginBottom:'10px'
    }
    return (
    <Card style={cardStyle}>
    <CardHeader
      title={"The "+this.props.item.title + " Card"}
      subtitle={"The "+this.props.item.subtitle + " SubTitle"}
      actAsExpander={true}
      avatar={this.props.item.avatar}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label={this.props.control.control1} />
      <FlatButton label={this.props.control.control2} />
    </CardActions>
    <CardText expandable={true}>
      {this.props.item.content}
    </CardText>
  </Card>
    )
  }
}

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
        {tilesData.map(function (item, i) {
          return <CardExampleExpandable key={i} item={item} control={this.state.control} />; 
        }, this)}
      </div>
    )
  }
}

export default MainPageCards