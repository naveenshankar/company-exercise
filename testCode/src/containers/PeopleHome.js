
import React from 'react';
import People from '../components/People';
import Person from '../components/Person';
import CompanyForm from '../components/CompanyForm';
import styles from '../theme/home.scss';
import PropTypes from 'prop-types'; // ES6 

class PeopleHome extends React.Component {
  	render() {
  			let peopleView;
  			console.log('inside people',this.props.params);

  			if(this.props.params.peopleid){
				peopleView = <Person/>;
			}
			else{
				peopleView = <People/>;
			}

			return (
				<div className="home_container">
				  	<h1>SigFig RPT</h1>
				  	<div className="home_container_left col-xs-12 col-lg-6">
				  		{peopleView}
				  	</div>
				  	<div className="home_container_right col-xs-12 col-lg-3">
				  		<CompanyForm />
				  	</div>
			    </div>
			);
		}
}

PeopleHome.propTypes = {
	params: PropTypes.object.isRequired
};

export {PeopleHome};
