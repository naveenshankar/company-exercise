
import React from 'react';
import PropTypes from 'prop-types'; // ES6 
import {connect} from 'react-redux';
import styles from '../theme/company.scss';
import {getCompany} from '../actions/CompanyActions';

class Company extends React.Component {
	componentWillMount()
    {	
    	this.props.getCompany(this.props['data-id']);
    }
  	render() {
  			console.log('inside Company');
  			let thisObj = this;
  			return (
				<div className="company_container">
				  <div className="title">Company</div>
				  {this.props.companiesState.companies.map(function(val,index){
				  		let companyPath = '/companies/'+val._id;
				  		let peoplePath = '/companies/'+val._id+'/people';
				  		let linkKey = 'link_key'+index;
			  			if(val._id == thisObj.props.companiesState.currentCompanyId){
                            return <div key={index} className="company" ></div>;
			  			}
			  			else{
			  				return '';
			  			}
                    })}
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