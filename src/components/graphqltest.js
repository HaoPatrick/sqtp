import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class StopsContent extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
							{this.props.item.campus} - { this.props.item.time } - {this.props.item.location}<br/>
			</div>
		)
	}
}


class CardExampleExpandable extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		// 
		// 				<div>{JSON.stringify(
		// JSON.parse(schoolbus)[0])}</div>
		
		const item = this.props.item
		const cardStyle = {
			marginBottom: '10px'
		}
		const alertStyle = {
			color:'#e74c3c'
		}
		return (
			<Card style={cardStyle}>
    <CardHeader
      title={item.name}
      subtitle={item.departureCampus+"-"+item.arrivalCampus}
      actAsExpander={true}
      showExpandableButton={true}
					/>
		<CardText>
					出发时间: {item.departureTime}<br />
					到达时间: {item.arrivalTime} <br />
					工作时间: {item.serviceDays} <br/>
    </CardText>
    <CardText expandable={true}>
					{item.stops.map(function (item, i) {
					return 	<StopsContent item={item} key={i}/>
					})}
					{item.note}
					{console.log(item.note)}	
    </CardText>
  </Card>
		)
	}
}




class Profile extends Component { 
	constructor(props) {
		super(props);
		this.data = PropTypes.shape({
			loading: PropTypes.bool.isRequired,
			currentUser: PropTypes.object,
		}).isRequired;
	}
	render() {
		let schoolbus = this.props.data.schoolbus;
		let finished = schoolbus;
		let cards;
		if (finished) {
			schoolbus = JSON.parse(schoolbus)
			cards = schoolbus.map(function (item, i) {
				return <CardExampleExpandable key={i} item={item}/>
			})
		}
		return (
			schoolbus?
				<div>{cards}</div>
			:<div>wait</div>	
		)
	}
}


// We use the gql tag to parse our query string into a query document
const CurrentUserForLayout = gql`
  query CurrentUserForLayout {
    schoolbus(version:"asdfa")
  }
`;

const ProfileWithData = graphql(CurrentUserForLayout)(Profile);

export default ProfileWithData