const serverHost = process.env.SERVICE_URL;
import store from '../store';

export function getCompanies() {
    return {
        type: 'GET_COMPANIES',
		payload: new Promise((resolve, reject) => {
            $.ajax({
                   url: serverHost+'/companies',
                   type:'GET'
                 }).done(function(response) {
                     resolve({'companies': response});
                 }).fail(function(failResponse){
                         
                }); 
        })
    };
}

export function getCompany(companyid) {
    return {
        type: 'GET_COMPANY',
		payload: new Promise((resolve, reject) => {
            resolve({'currentCompanyId':companyid});
        })
    };
}

export function editCompany(status) {
    return {
        type: 'EDIT_COMPANY',
		payload: new Promise((resolve, reject) => {
            resolve({'editing':status});
        })
    };
}

export function saveCompany(company) {
    return {
        type: 'SAVE_COMPANY',
		payload: new Promise((resolve, reject) => {
			let newCompanyList = store.getState().companies.companies;
            $.ajax({
                   url: serverHost+'/companies/'+company.id,
                   data:company,
                   type:'PUT'
                 }).done(function(response) {
                 	newCompanyList = newCompanyList.map(function(val,index){
			  			if(val._id == company.id){
			  				let responseObj = company;
			  				responseObj._id = val._id;
			  				delete responseObj.id;
			  				return responseObj;
			  			}
			  			else{
			  				return val;
			  			}
			  		});

                    resolve({'companies':newCompanyList,'editing':false});
                 }).fail(function(failResponse){
                         
                });
        })
    };
}

export function addNewCompany(company) {
    return {
        type: 'ADD_COMPANY',
		payload: new Promise((resolve, reject) => {
			let newCompanyList = store.getState().companies.companies;
            $.ajax({
                   url: serverHost+'/companies',
                   data:company,
                   type:'POST'
                 }).done(function(response) {
                     newCompanyList.push(response);
                     resolve({'companies':newCompanyList});
                 }).fail(function(failResponse){
                         
                });
        })
    };
}

