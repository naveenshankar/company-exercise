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
                     console.log(response);
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
            $.ajax({
                   url: serverHost+'/companies/'+companyid,
                   type:'GET'
                 }).done(function(response) {
                     console.log(response);
                     resolve({'currentCompanyId':response._id});
                 }).fail(function(failResponse){
                         
                });
        })
    };
}

export function addNewCompany(company) {
    return {
        type: 'ADD_COMPANY',
		payload: new Promise((resolve, reject) => {
            $.ajax({
                   url: serverHost+'/companies',
                   data:JSON.parse(company),
                   type:'POST'
                 }).done(function(response) {
                     console.log(response);
                     resolve({'currentCompanyId':response._id});
                 }).fail(function(failResponse){
                         
                });
        })
    };
}

