
import React from 'react';

class Person extends React.Component {
  	render() {
  		console.log('inside person');
  			return (
				<div className="people_container">
				  <div className="title">Person</div>
			    </div>
			);
		}
}

export default Person;