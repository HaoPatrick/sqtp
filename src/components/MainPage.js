import React from 'react';
const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;



class MainPageExample extends React.Component{
	constructor(props) {
		super(props);
		this.getData = this.getData.bind(this);
	}
	getData = () => {
		const client = new Lokka({
			transport: new Transport('http://graphql-swapi.parseapp.com/')
		});
		client.query(`
    {
      allFilms {
        films {
          title
        }
      }
    }
	`).then(result => {
		console.log(result.allFilms);
		})
	}
	render() {
		return (
			<div>
				<button onClick={this.getData}>klajsd</button>
				</div>	
		)
	}
}