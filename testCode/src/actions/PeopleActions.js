const serverHost = process.env.SERVICE_URL;
import store from '../store';

export function getPeople(id) {
    return {
        type: 'FETCH_STAFF',
		payload: new Promise((resolve, reject) => {
            $.ajax({
                   url: serverHost+'/companies/'+id+'/people',
                   type:'GET'
                 }).done(function(response) {
                     resolve({'staff': response});
                 }).fail(function(failResponse){
                         
                }); 
        })
    };
}

export function addNewPerson(person) {
    return {
        type: 'ADD_PERSON',
		payload: new Promise((resolve, reject) => {
			let newStaffList = store.getState().people.staff;
            $.ajax({
                   url: serverHost+'/person',
                   data:person,
                   type:'POST'
                 }).done(function(response) {
                     newStaffList.push(response);
                     resolve({'staff':newStaffList});
                 }).fail(function(failResponse){
                         
                });
        })
    };
}