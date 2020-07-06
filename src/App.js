import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
	const [ personsState, setPersonsState ] = useState( {
		persons: [
			{ name: 'Bradley', age: 34 },
			{ name: 'Jessica', age: 34 },
			{ name: 'Bob', age: 54 }
		]
	} );

	const [ otherState, setOtherState ] = useState( 'Some other value' );
	
	console.log( personsState, otherState );

	const changeNameHandler = () => {
	// console.log('Was clicked!');
	// Don't do this: this.state.persons[0].name = 'Taco';
		setPersonsState( {
			persons: [
				{ name: 'Taco', age: 34 },
				{ name: 'Jessica', age: 34 },
				{ name: 'Bob', age: 20 }
			]
		} );
	};

	return (
		<div className="App">
			<h1>Hi. I'm a react app</h1>
			<p>This is really working!</p>
			<button onClick={ changeNameHandler }>Change Name</button>
			<Person name={ personsState.persons[0].name } age= { personsState.persons[0].age }>
					My Hobbies: Gaming
			</Person>
			<Person name={ personsState.persons[1].name } age= { personsState.persons[1].age } />
			<Person name={ personsState.persons[2].name } age= { personsState.persons[2].age } />
		</div>
	);
};

export default App;
