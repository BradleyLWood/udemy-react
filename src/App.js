import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Bradley', age: 34 },
			{ name: 'Jessica', age: 34 },
			{ name: 'Bob', age: 54 }
		],
		otherState: 'some other value'
	};

	changeNameHandler = ( newName ) => {
		// console.log('Was clicked!');
		// DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
		this.setState( {
			persons: [
				{ name: newName, age: 34 },
				{ name: 'Jessica', age: 34 },
				{ name: 'Bob', age: 20 }
			]
		} );
	};

	nameChangedHandler = (event) => {
		this.setState( {
			persons: [
				{ name: 'Bradley', age: 34 },
				{ name: 'Jessica', age: 34 },
				{ name: event.target.value, age: 20 }
			]
		} );
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
				<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button
					style={ style }
					onClick={this.changeNameHandler.bind(this, 'Taco')}>Switch Name</button>
				<Person
					name={ this.state.persons[0].name }
					age={ this.state.persons[0].age }
					click={ this.changeNameHandler }>
						My Hobbies: Gaming
				</Person>
				<Person
					name={ this.state.persons[1].name }
					age={ this.state.persons[1].age } />
				<Person
					name={ this.state.persons[2].name }
					age={ this.state.persons[2].age }
					changed={ this.nameChangedHandler } />
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default App;