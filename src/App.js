import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 'asdlfj', name: 'Bradley', age: 34 },
			{ id: 'asdasss', name: 'Jessica', age: 34 },
			{ id: 'asdlpinn', name: 'Bob', age: 54 }
		],
		otherState: 'some other value',
		showPersons: false
	};

	nameChangedHandler = ( id, e ) => {
		const personIndex = this.state.persons.findIndex( p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = e.target.value;

		const persons = [ ...this.state.persons ];
		persons[ personIndex ] = person;

		this.setState( { persons: persons } );
	};

	deletePersonHandler = ( index ) => {
		const persons = [ ...this.state.persons ];
		persons.splice( index, 1 );
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons });
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if ( this.state.showPersons ) {
			persons = (
				<div>
					{ this.state.persons.map( ( p, index ) => {
						return <Person 
							key={ p.id }
							click={ this.deletePersonHandler.bind( this, index ) }
							name={ p.name }
							age={ p.age }
							changed={ this.nameChangedHandler.bind( this, p.id ) }
						/>
					})}
				</div>
			);
		}

		return (
				<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button
					style={ style }
					onClick={ this.togglePersonsHandler }>
						Toggle Persons
				</button>
				{ persons }
			</div>
		);
	}
}

export default App;