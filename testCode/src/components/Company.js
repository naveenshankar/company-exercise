
import React from 'react';
import PropTypes from 'prop-types'; // ES6 
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getCompany} from '../actions/CompanyActions';

class Company extends React.Component {
	componentWillMount()
    {	
    	this.props.getCompany(this.props['data-id']);
    }
  	render() {
  			let thisObj = this;
  			let companyObj = {};

  			this.props.companiesState.companies.forEach(function(val,index){
	  			if(val._id == thisObj.props['data-id']){
	  				companyObj = val;
	  			}
	  		});

  			return (
				<div className="company_container">
				  	<div className="title">Company</div>
				  	<div className="company_details">
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
        }
    };
};

Company.propTypes = {
    companiesState: PropTypes.object.isRequired,
    getCompany: PropTypes.func.isRequired,
    'data-id': PropTypes.string.isRequired
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Company);