import React from 'react';
import styles from '../../src/theme/welcome.scss';

class Welcome extends React.Component {
  	render() {
  			return (
				<div className="welcome_container">
				  <h1>Welcome to SigFig Company Management Application</h1>
			      <p>Expertly manage your companies and people!</p>
				  <div className="calendar__link">
				  	<a className="link__activity"href="/companies">Click to Navigate to home page</a>
				  </div>
			    </div>
			);
	}
}

export {Welcome};