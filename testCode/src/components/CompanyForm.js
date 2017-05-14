
import React from 'react';
import PropTypes from 'prop-types'; // ES6 
import {connect} from 'react-redux';
import styles from '../../src/theme/companyform.scss';
import {addNewCompany} from '../actions/CompanyActions';
import {addNewPeople} from '../actions/PeopleActions';

class CompanyForm extends React.Component {

  	render() {
  			console.log('inside Company form');

  			function processNewCompanyForm(){
  				console.log('processNewCompanyForm');
  				//this.props.addNewCompany('rs_dashboardLink')
  			}

  			function processNewPeopleForm(){
  				console.log('processNewPeopleForm');
  				//this.props.addNewPeople('rs_dashboardLink')
  			}

  			return (
				<div className="company_form_container">
					<div className="company_create">
						<div className="title">Create new company</div>
					  	<fieldset>
					    	<legend>Name</legend>
					    	<input type="text" id="company_name" placeholder="Enter name"/>
					    	<label htmlFor="company_name">Name is required!</label>
					    	<legend>Address</legend>
					    	<input type="text" id="company_address" placeholder="Enter address"/>
					    	<label htmlFor="company_address">Address is required!</label>
					    	<legend>Revenue</legend>
					    	<input type="text" id="company_revenue" placeholder="Enter revenue"/>
					    	<label htmlFor="company_revenue">Revenue is required!</label>
					    	<legend>Phone number</legend>
					    	<input type="text" id="company_phone" placeholder="Enter number"/>
					    	<label htmlFor="company_phone">Number is required!</label>
							<button onClick={() => processNewCompanyForm()} className="button is-submit" name="save">Save</button>
					  	</fieldset>
					</div>
					<div className="person_create">
						<div className="title">Create new Person</div>
					  	<fieldset>
					    	<legend>Name</legend>
					    	<input type="text" id="person_name" placeholder="Enter name"/>
					    	<label htmlFor="person_name">Name is required!</label>
					    	<legend>Address</legend>
					    	<input type="text" id="person_address" placeholder="Enter address"/>
					    	<label htmlFor="person_address">Address is required!</label>
					    	<legend>Revenue</legend>
					    	<input type="text" id="person_company" placeholder="Enter revenue"/>
					    	<label htmlFor="person_company">Company is required!</label>
							<button onClick={() => processNewPeopleForm()} className="button is-submit" name="save">Save</button>
					  	</fieldset>
					</div>
			    </div>
			);
		}
}

const mapStateToProps = (state) => {
    return {
       	companiesState: state.companies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
     	addNewCompany: (id) => {
            dispatch(addNewCompany(id));
        },
        addNewPeople: (id) => {
            dispatch(addNewPeople(id));
        }
    };
};

CompanyForm.propTypes = {
    companiesState: PropTypes.object.isRequired,
    addNewCompany: PropTypes.func.isRequired,
    addNewPeople: PropTypes.func.isRequired
}; 

export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm);