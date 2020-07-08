import React, { Component } from 'react';
import './App.css';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
		let persons = null;

		if ( this.state.showPersons ) {
			persons = (
				<Persons
					persons={ this.state.persons }
					clicked={ this.deletePersonHandler }
					changed={ this.nameChangedHandler }
				/>
			);
		}

		return (
				<div className={ classes.App }>
					<Cockpit
						showPersons={ this.state.showPersons }
						persons={ this.state.persons }
						clicked={ this.togglePersonsHandler } />	
					{ persons }
				</div>
		);
	}
}

export default App;