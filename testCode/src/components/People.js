
import React from 'react';
import PropTypes from 'prop-types'; // ES6 
import {connect} from 'react-redux';
import {Link} from 'react-router';
import styles from '../../src/theme/people.scss';
import {getPeople} from '../actions/PeopleActions';
import {deletePerson} from '../actions/PeopleActions';

class People extends React.Component {
	componentWillMount()
    {
    	this.props.getPeople(this.props['data-id']);
    }

  	render() {
  		let thisPeople = this;
  		let currentCompany;
  		this.props.companiesState.companies.forEach(function(val,index){
  			if(val._id == thisPeople.props['data-id']){
  				currentCompany = val;
  			}
  		});

  		function onDeletePerson(){
  				
  		}

		return (
			<div className="people_container">
			  <div className="title">People at {currentCompany.name}</div>
			  <div className="people_details">
			  	{this.props.peopleState.staff.map(function(val,index){
			  		let companyPath = '/companies/'+val._id;
			  		let personPath = '/companies/'+thisPeople.props['data-id']+'/people/'+val._id;
                    return <li key={'li_key'+index} className="people"><Link key={'link_key'+index} to={personPath}>{val.name}</Link><a onClick={() => thisPeople.props.deletePerson(val._id)} className="people_delete" key={'link_delete_key'+index} >X</a></li>;
                })}
			  	<Link to={'/companies/'+currentCompany._id} className="viewmore">Back to {currentCompany.name}</Link>
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
     	getPeople: (id) => {
            dispatch(getPeople(id));
        },
        deletePerson: (id) => {
            dispatch(deletePerson(id));
        }
    };
};

People.propTypes = {
    companiesState: PropTypes.object.isRequired,
    peopleState: PropTypes.object.isRequired,
    'data-id': PropTypes.string.isRequired,
    getPeople: PropTypes.func.isRequired,
    deletePerson: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(People);