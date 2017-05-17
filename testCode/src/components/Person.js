
import React from 'react';
import PropTypes from 'prop-types'; // ES6 
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getPerson} from '../actions/PeopleActions';
import {editPerson} from '../actions/PeopleActions';
import {savePerson} from '../actions/PeopleActions';
import {processFormElements} from '../utils/FormValidator.js';
import {inputOnChangeStatus} from '../utils/FormValidator.js';

class Person extends React.Component {
	componentWillMount()
    {	
    	this.props.getPerson(this.props['data-id']);
    }
  	render() {
  		let peopleObj ;
  		let companyObj ;
  		let personDetails ;
  		let editSaveLink ;
  		let thisObj = this;

  		this.props.peopleState.staff.forEach(function(val,index){
	  			if(val._id == thisObj.props['data-id']){
	  				peopleObj = val;
	  			}
	  	});

	  	this.props.companiesState.companies.forEach(function(val,index){
	  			if(val._id == thisObj.props.companiesState.currentCompanyId){
	  				companyObj = val;
	  			}
	  	});

	  	function processNewCompanyForm(){
  				let personFormObj = {};
  				if(processFormElements(['address_input','name_input']) == true){
  					personFormObj['name'] = document.getElementById('name_input').value;
	  				personFormObj['email'] = document.getElementById('address_input').value;
	  				personFormObj['id'] = thisObj.props['data-id'];
  					thisObj.props.savePerson(personFormObj);
  				}
  		}

	  	if(this.props.peopleState.editing){
	  		editSaveLink = <a onClick={() => processNewCompanyForm()} className="edit_person col-xs-12 col-lg-2">Save</a>;
	  		personDetails = 
	  		<div className="person_details_container_form">
					<div className="name">Name</div>
					<input onChange={(e) => inputOnChangeStatus(e)} className="name_input" id="name_input" defaultValue={peopleObj.name} />
					<label htmlFor="name_input">Name is required!</label>

					<div className="address">Address</div>
					<input onChange={(e) => inputOnChangeStatus(e)} className="address_input" id="address_input" defaultValue={peopleObj.email} />
					<label htmlFor="address_input">Address is required!</label>

					<div className="company">Company</div>
					<input onChange={(e) => inputOnChangeStatus(e)} className="company_input" id="company_input" defaultValue={companyObj.name} />
			</div>;
	  	}
	  	else{
	  		editSaveLink = <a onClick={() => this.props.editPerson(true)} className="edit_person col-xs-12 col-lg-2">Edit</a>;
	  		personDetails = 
	  		<div className="person_details_container">
					<div className="name">Name</div>
					<div className="name_value"> 	
						{peopleObj.name}
					</div>
					<div className="address">Address</div>
					<div className="address_value">	
						{peopleObj.email}
					</div>
					<div className="company">Company</div>
					<div className="company_value">
						{companyObj.name}
					</div>
			</div>;
	  	}

		return (
			<div className="people_container">
			  	<div className="title">{peopleObj.name}{editSaveLink}</div>
			  	<div className="person_details">
			  		{personDetails}
			  		<Link to={'/companies/'+thisObj.props.companiesState.currentCompanyId+'/people'} className="viewmore">Back to People at {companyObj.name}</Link>
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
     	getPerson: (id) => {
            dispatch(getPerson(id));
        },
        editPerson: (status) => {
            dispatch(editPerson(status));
        },
        savePerson: (obj) => {
            dispatch(savePerson(obj));
        }
    };
};

Person.propTypes = {
    companiesState: PropTypes.object.isRequired,
    peopleState: PropTypes.object.isRequired,
    getPerson: PropTypes.func.isRequired,
    editPerson: PropTypes.func.isRequired,
    savePerson: PropTypes.func.isRequired,
    'data-id': PropTypes.string.isRequired
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Person);