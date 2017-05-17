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

export function editPerson(status) {
    return {
        type: 'EDIT_PERSON',
		payload: new Promise((resolve, reject) => {
            resolve({'editing':status});
        })
    };
}

export function deletePerson(id) {
    return {
        type: 'DELETE_PERSON',
		payload: new Promise((resolve, reject) => {
			let newStaffList = store.getState().people.staff;
            $.ajax({
                   url: serverHost+'/person/'+id,
                   type:'DELETE'
                 }).done(function(response) {
                 	newStaffList.forEach(function(val,index){
			  			if(val._id == id){
			  				newStaffList.splice(index,1);
			  			}
			  		});

                    resolve({'staff':newStaffList,'editing':false});
                 }).fail(function(failResponse){
                         
                });
        })
    };
}

export function savePerson(currentPerson) {
    return {
        type: 'SAVE_PERSON',
		payload: new Promise((resolve, reject) => {
			let newStaffList = store.getState().people.staff;
            $.ajax({
                   url: serverHost+'/person/'+currentPerson.id,
                   data:currentPerson,
                   type:'PUT'
                 }).done(function(response) {
                 	newStaffList = newStaffList.map(function(val,index){
			  			if(val._id == currentPerson.id){
			  				let responseObj = currentPerson;
			  				responseObj._id = val._id;
			  				delete responseObj.id;
			  				return responseObj;
			  			}
			  			else{
			  				return val;
			  			}
			  		});

                    resolve({'staff':newStaffList,'editing':false});
                 }).fail(function(failResponse){
                         
                });
        })
    };
}

export function getPerson(id) {
    return {
        type: 'GET_PERSON',
		payload: new Promise((resolve, reject) => {
            resolve({'currentPersonId':id});
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