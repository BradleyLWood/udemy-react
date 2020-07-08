import React from 'react';
import PropTypes from 'prop-types';

import classes from './Cockpit.module.css';

const Cockpit = props => {
	const btnClasses = [ classes.Button ];
	const assignedClasses = [ ];
	if ( props.persons.length < 3 ) assignedClasses.push( classes.red );
	if ( props.persons.length < 2 ) assignedClasses.push( classes.bold );
	if ( props.showPersons ) btnClasses.push( classes.Red );

	return (
		<div className={ classes }>
			<h1>Hi, I'm a React App</h1>
			<p className={ assignedClasses.join( ' ' ) }>This is really working!</p>
			<button
				className={ btnClasses.join( ' ' ) }
				alt={ props.showPersons.toString() }
				onClick={ props.clicked }>
				Toggle Persons
			</button>
		</div> );
};

Cockpit.propTypes = {
	showPersons: PropTypes.bool,
	persons: PropTypes.any,
	clicked: PropTypes.func
};

export default Cockpit;
