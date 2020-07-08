import React from 'react';
import Person from './Person/Person';

import PropTypes from 'prop-types';

const Persons = props => props.persons.map( ( p, index ) => {
	return <Person
		key={ p.id } 
		name={ p.name }
		age={ p.age }
		click={ props.clicked.bind( this, index ) }
		changed={ props.changed.bind( this, p.id ) } />;
} );

Persons.propTypes = {
	key: PropTypes.bool,
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	change: PropTypes.func
};

export default Persons;
