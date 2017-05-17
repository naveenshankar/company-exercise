
import React from 'react';
import PropTypes from 'prop-types'; // ES6 
import {connect} from 'react-redux';
import styles from '../../src/theme/companyform.scss';
import {addNewCompany} from '../actions/CompanyActions';
import {addNewPerson} from '../actions/PeopleActions';
import {processFormElements} from '../utils/FormValidator.js';
import {inputOnChangeStatus} from '../utils/FormValidator.js';

class CompanyForm extends React.Component {

  		render() {
  			let thisForm = this;
  			let createCompanyForm,createPersonForm;

  			function processNewCompanyForm(){
  				let companyObj = {};
  				if(processFormElements(['company_name','company_address','company_revenue','company_phone']) == true){
  					companyObj['name'] = document.getElementById('company_name').value;
	  				companyObj['address'] = document.getElementById('company_address').value;
	  				companyObj['revenue'] = document.getElementById('company_revenue').value;
	  				companyObj['phone'] = document.getElementById('company_phone').value;
  					thisForm.props.addNewCompany(companyObj);
  				}
  			}

  			function processNewPeopleForm(){
  				let personObj = {};
  				if(processFormElements(['person_name','person_address','person_company']) == true){
  					let dropDown = document.getElementById('person_company');
  					personObj['name'] = document.getElementById('person_name').value;
	  				personObj['email'] = document.getElementById('person_address').value;
	  				personObj['companyId'] = dropDown.value.replace('select_','');
  					thisForm.props.addNewPerson(personObj);
  				}
  			}

  			if(this.props.companiesState.addCompanyPending == true){
  				createCompanyForm = undefined;
  			}
  			else{
  				createCompanyForm = 
				<fieldset>
			    	<legend>Name</legend>
			    	<input type="text" onChange={(e) => inputOnChangeStatus(e)} id="company_name" placeholder="Enter name"/>
			    	<label htmlFor="company_name">Name is required!</label>
			    	<legend>Address</legend>
			    	<input type="text" onChange={(e) => inputOnChangeStatus(e)} id="company_address" placeholder="Enter address"/>
			    	<label htmlFor="company_address">Address is required!</label>
			    	<legend>Revenue</legend>
			    	<input type="text" onChange={(e) => inputOnChangeStatus(e)} id="company_revenue" placeholder="Enter revenue"/>
			    	<label htmlFor="company_revenue">Revenue is required!</label>
			    	<legend>Phone number</legend>
			    	<input type="text" onChange={(e) => inputOnChangeStatus(e)} id="company_phone" placeholder="Enter number"/>
			    	<label htmlFor="company_phone">Number is required!</label>
					<button id="save_company" onClick={() => processNewCompanyForm()} className="button is-submit" name="save">Save</button>
				</fieldset>;
  			}

  			if(this.props.peopleState.addPersonPending == true){
  				createPersonForm = undefined;
  			}
  			else{
  				createPersonForm = 
				<fieldset>
			    	<legend>Name</legend>
			    	<input type="text" onChange={(e) => inputOnChangeStatus(e)} id="person_name" placeholder="Enter name"/>
			    	<label htmlFor="person_name">Name is required!</label>
			    	<legend>Address</legend>
			    	<input type="text" onChange={(e) => inputOnChangeStatus(e)} id="person_address" placeholder="Enter address"/>
			    	<label htmlFor="person_address">Address is required!</label>
			    	<legend>Company</legend>
			    	<select id="person_company" name="select"> 
					  {this.props.companiesState.companies.map(function(val){
			  				return <option key={val._id} value={'select_'+val._id}>{val.name}</option>;
			  		  })}
					</select>
			    	<label htmlFor="person_company">Company is required!</label>
					<button id="save_person" onClick={() => processNewPeopleForm()} className="button is-submit" name="save">Save</button>
			  	</fieldset>;
  			}

  			return (
				<div className="company_form_container">
					<div className="company_create">
						<div className="title">create new company</div>
					  	{createCompanyForm}
					</div>
					<div className="person_create">
						<div className="title">create new person</div>
					  	{createPersonForm}
					</div>
			    </div>
			);
		}
}

const mapStateToProps = (state) => {
    return {
       	companiesState: state.companies,
       	peopleState: state.people
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
     	addNewCompany: (id) => {
            dispatch(addNewCompany(id));
        },
        addNewPerson: (id) => {
            dispatch(addNewPerson(id));
        }
    };
};

CompanyForm.propTypes = {
    companiesState: PropTypes.object.isRequired,
    peopleState: PropTypes.object.isRequired,
    addNewCompany: PropTypes.func.isRequired,
    addNewPerson: PropTypes.func.isRequired
}; 

export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm);