
import React from 'react';
import PropTypes from 'prop-types'; // ES6 
import {connect} from 'react-redux';
import {Link} from 'react-router';
import styles from '../../src/theme/companies.scss';
import {getCompanies} from '../actions/CompanyActions';

class Companies extends React.Component {
	componentWillMount()
    {
    	this.props.getCompanies();
    }

  	render() {
  			return (
				<div className="companies_container">
				  	<div className="title">Companies</div>
				  	{this.props.companiesState.companies.map(function(val,index){
				  		let companyPath = '/companies/'+val._id;
				  		let peoplePath = '/companies/'+val._id+'/people';
				  		let linkKey = 'link_key'+index;
                        return <div key={index} className="company" ><Link to={companyPath} className="title" data-tsIndex={index} key={'title'+index}>{val.name}</Link><div key={index} className="address">{val.address}</div><Link key={linkKey} to={peoplePath} className="viewmore">People who work here</Link></div>;
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
     	getCompanies: () => {
            dispatch(getCompanies());
        }
    };
};

Companies.propTypes = {
    companiesState: PropTypes.object.isRequired,
    getCompanies: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Companies);