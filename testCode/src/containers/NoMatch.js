import React from 'react';
import {Link} from 'react-router';
import styles from '../theme/nomatch.scss';

export class NoMatch extends React.Component {
  render()
  		{
  			return (
					<div className="nomatch_container">
				      <h1>404 Page Not Found!!</h1>
				      <p>This url does not exist</p>
				      <Link className="rs_redirect_link" to="/companies">This should get you back on track</Link>
				    </div>
			);
		}
}