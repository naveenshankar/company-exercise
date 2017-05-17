
const peopleReducer = (state = {
    currentPersonId:null,
    addPersonPending:false,
    editing:false,
    staff:[]
}, action) => {
    switch (action.type) {
        case 'FETCH_STAFF_FULFILLED':
            state = {
                ...state,
                staff:action.payload.staff,
                addPersonPending:false
            };
            break;
        case 'ADD_PERSON_PENDING':
            state = {
                ...state,
                addPersonPending:true
            };
            break;
        case 'EDIT_PERSON_FULFILLED' :
            state = {
                ...state,
                editing:action.payload.editing
            };
            break;
        case 'SAVE_PERSON_FULFILLED' :
            state = {
                ...state,
                currentPersonId:action.payload.currentPersonId,
                editing:action.payload.editing
            };
            break;
        case 'ADD_PERSON_FULFILLED':
            state = {
                ...state,
                staff:action.payload.staff,
                addPersonPending:false
            };
            break;
        default:
        // do nothing
    }
    return state;
};

export default peopleReducer;