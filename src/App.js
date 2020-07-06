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

	changeNameHandler = () => {
		// console.log('Was clicked!');
		// DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
		this.setState({
			persons: [
				{ name: 'Taco', age: 34 },
				{ name: 'Jessica', age: 34 },
				{ name: 'Bob', age: 20 }
			]
		});
	};

	render() {
		return (
				<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button onClick={this.changeNameHandler}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
					My Hobbies: Gaming
				</Person>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default App;