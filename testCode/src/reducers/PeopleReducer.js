
const peopleReducer = (state = {
    currentCurrentStaff: {}
}, action) => {
    switch (action.type) {
        case 'FETCH_STAFF_FULFILLED':
            state = {
                ...state,
                currentCurrentStaff:action.payload.currentCurrentStaff
            };
            break;
        default:
        // do nothing
    }
    return state;
};

export default peopleReducer;