
export function fetchStaff(slotsMap) {
    return {
        type: 'FETCH_STAFF',
		payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({'currentCurrentStaff': {}});
            }, 20);
        })
    };
}

export function addNewPeople(person) {
    return {
        type: 'ADD_PEOPLE',
		payload: new Promise((resolve, reject) => {
            $.ajax({
                   url: serverHost+'/person',
                   data:JSON.parse(person),
                   type:'POST'
                 }).done(function(response) {
                     console.log(response);
                     resolve({'currentCompanyId':response._id});
                 }).fail(function(failResponse){
                         
                });
        })
    };
}