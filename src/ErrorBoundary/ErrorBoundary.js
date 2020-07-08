import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		error: ''
	}

	componentDidCatch = ( error, info ) => {
		this.setState( {
			hasError: true,
			error: error
		} );
	}

	render() {
		if ( this.state.hasError ) return <h1>{ this.state.error }</h1>
		else return this.props.children;
	}
}

export default ErrorBoundary;