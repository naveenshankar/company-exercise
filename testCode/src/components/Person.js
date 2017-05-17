
import React from 'react';
import PropTypes from 'prop-types'; // ES6 
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getPerson} from '../actions/PeopleActions';
import {editPerson} from '../actions/PeopleActions';

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
  				let companyFormObj = {};
  				if(processFormElements(['address_input','revenue_input','phone_input','name_input']) == true){
  					companyFormObj['name'] = document.getElementById('name_input').value;
	  				companyFormObj['address'] = document.getElementById('address_input').value;
	  				companyFormObj['revenue'] = document.getElementById('revenue_input').value;
	  				companyFormObj['phone'] = document.getElementById('phone_input').value;
	  				companyFormObj['id'] = thisObj.props['data-id'];
  					thisObj.props.saveCompany(companyFormObj);
  				}
  		}

	  	if(this.props.peopleState.editing){
	  		editSaveLink = <a onClick={() => processNewCompanyForm()} className="edit_person">Save</a>;
	  	}
	  	else{
	  		editSaveLink = <a onClick={() => this.props.editPerson(true)} className="edit_person">Edit</a>;
	  		personDetails = 
	  		<div className="person_details_container">
					<div className="name">Name</div>
					<div className="name_value"> 	
						{peopleObj.name}
					</div>
					<div className="address">Address</div>
					<div className="address_value">	
						{peopleObj.address}
					</div>
					<div className="company">Company</div>
					<div className="company_value">
						{peopleObj.company}
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
        }
    };
};

Person.propTypes = {
    companiesState: PropTypes.object.isRequired,
    peopleState: PropTypes.object.isRequired,
    getPerson: PropTypes.func.isRequired,
    editPerson: PropTypes.func.isRequired,
    'data-id': PropTypes.string.isRequired
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Person);