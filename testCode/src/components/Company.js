
import React from 'react';
import PropTypes from 'prop-types'; // ES6 
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getCompany} from '../actions/CompanyActions';
import {editCompany} from '../actions/CompanyActions';
import {saveCompany} from '../actions/CompanyActions';
import {processFormElements} from '../utils/FormValidator.js';
import {inputOnChangeStatus} from '../utils/FormValidator.js';

class Company extends React.Component {
	componentWillMount()
    {	
    	this.props.getCompany(this.props['data-id']);
    }
  	render() {
  			let thisObj = this;
  			let companyObj = {};
  			let companyDetails ;
  			let editSaveLink ;

  			this.props.companiesState.companies.forEach(function(val,index){
	  			if(val._id == thisObj.props['data-id']){
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

	  		if(this.props.companiesState.editing){
	  			editSaveLink = <a onClick={() => processNewCompanyForm()} className="edit_company col-xs-12 col-lg-2">Save</a>;
	  			companyDetails= 
	  			<div className="company_details_container_form">
					<div className="address">Address</div>
					<input onChange={(e) => inputOnChangeStatus(e)} className="address_input" id="address_input" defaultValue={companyObj.address} />
					<label htmlFor="address_input">Address is required!</label>
					<div className="revenue">Revenue</div>
					<input onChange={(e) => inputOnChangeStatus(e)} className="revenue_input" id="revenue_input" defaultValue={companyObj.revenue} />	
					<label htmlFor="revenue_input">Revenue is required!</label>
					<div className="phone">Phone</div>
					<input onChange={(e) => inputOnChangeStatus(e)} className="phone_input" id="phone_input" defaultValue={companyObj.phone} />
					<label htmlFor="phone_input">Phone is required!</label>
					<div className="name">Name</div>
					<input onChange={(e) => inputOnChangeStatus(e)} className="name_input" id="name_input" defaultValue={companyObj.name} />
					<label htmlFor="name_input">Name is required!</label>
				</div>;
	  		}
	  		else{
	  			editSaveLink = <a onClick={() => this.props.editCompany(true)} className="edit_company col-xs-12 col-lg-2">Edit</a>;
				companyDetails = 
				<div className="company_details_container">
					<div className="address">Address</div>
					<div className="address_value"> 	
						{companyObj.address}
					</div>
					<div className="revenue">Revenue</div>
					<div className="revenue_value">	
						{companyObj.revenue}
					</div>
					<div className="phone">Phone</div>
					<div className="phone_value">
						{companyObj.phone}
					</div>
				</div>;
	  		}

  			return (
				<div className="company_container">
				  	<div className="title">{companyObj.name} Company Details{editSaveLink}</div>
				  	<div className="company_details">
				  		{companyDetails}
						<Link to={'/companies/'+companyObj._id+'/people'} className="viewmore">People who work here</Link>
						<Link to={'/companies'} className="viewmore">Back to Companies</Link>
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
     	getCompany: (id) => {
            dispatch(getCompany(id));
        },
        editCompany: (status) => {
            dispatch(editCompany(status));
        },
        saveCompany: (obj) => {
            dispatch(saveCompany(obj));
        }
    };
};

Company.propTypes = {
    companiesState: PropTypes.object.isRequired,
    getCompany: PropTypes.func.isRequired,
    editCompany: PropTypes.func.isRequired,
    saveCompany: PropTypes.func.isRequired,
    'data-id': PropTypes.string.isRequired
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Company);

