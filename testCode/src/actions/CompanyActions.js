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

