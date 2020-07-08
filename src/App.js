import React, { Component } from 'react';
import './App.css';
import classes from './App.module.css';
import Person from './Person/Person';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
		const btnClasses = [ classes.Button ];

		if ( this.state.showPersons ) {
			persons = (
				<div>
					{ this.state.persons.map( ( p, index ) => {
						return <ErrorBoundary key={ p.id } >
							<Person 
								click={ this.deletePersonHandler.bind( this, index ) }
								name={ p.name }
								age={ p.age }
								changed={ this.nameChangedHandler.bind( this, p.id ) }
								/>
							</ErrorBoundary>
					})}
				</div>
			);

			btnClasses.push( classes.Red );
		}

		const assignedClasses = [ ];
		if ( this.state.persons.length < 3 ) assignedClasses.push( classes.red );
		if ( this.state.persons.length < 2 ) assignedClasses.push( classes.bold );

		return (
				<div className="App">
					<h1>Hi, I'm a React App</h1>
					<p className={ assignedClasses.join( ' ' ) }>This is really working!</p>
					<button
						className={ btnClasses.join( ' ' ) }
						alt={ this.state.showPersons }
						onClick={ this.togglePersonsHandler }>
							Toggle Persons
					</button>
					{ persons }
				</div>
		);
	}
}

export default App;