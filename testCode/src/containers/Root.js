import React from 'react';
import styles from '../../src/theme/root.scss';

export class Root extends React.Component {
  	render() {
  			return (
				<div className="sigfig_container">
					<div className="col-xs-12 col-sm-12 col-lg-12">
						{this.props.children}
					</div>
				</div>
			);
		}
}