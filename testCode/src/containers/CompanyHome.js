
import React from 'react';
import Companies from '../components/Companies';
import Company from '../components/Company';
import CompanyForm from '../components/CompanyForm';
import styles from '../theme/home.scss';
import PropTypes from 'prop-types'; // ES6 

class CompanyHome extends React.Component {
  	render() {
  			let companyView;
  			console.log(this.props.params);

  			if(this.props.params.companyid){
				companyView  =	<Company data-id={this.props.params.companyid} />;
			}
			else{
				companyView  =	<Companies/>;
			}

			return (
				<div className="home_container">
				  	<h1>SigFig RPT</h1>
				  	<div className="home_container_left col-xs-12 col-lg-6">
				  		{companyView}
				  	</div>
				  	<div className="home_container_right col-xs-12 col-lg-3">
				  		<CompanyForm />
				  	</div>
			    </div>
			);
		}
}

CompanyHome.propTypes = {
	params: PropTypes.object.isRequired
};

export {CompanyHome};
