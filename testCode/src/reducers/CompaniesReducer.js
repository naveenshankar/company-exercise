
const companiesReducer = (state = {
    deleteCache: false,
    companies: [],
    addCompanyPending:false,
    editing:false,
    currentCompanyId:null
}, action) => {
    switch (action.type) {
        case 'GET_COMPANIES_FULFILLED' :
            state = {
                ...state,
                companies:action.payload.companies,
                addCompanyPending:false
            };
            break;
        case 'GET_COMPANY_FULFILLED' :
            state = {
                ...state,
                currentCompanyId:action.payload.currentCompanyId,
                addCompanyPending:false
            };
            break;
        case 'EDIT_COMPANY_FULFILLED' :
            state = {
                ...state,
                editing:action.payload.editing
            };
            break;
        case 'SAVE_COMPANY_FULFILLED' :
            state = {
                ...state,
                editing:action.payload.editing,
                companies:action.payload.companies
            };
            break;
        case 'ADD_COMPANY_PENDING' :
            state = {
                ...state,
                addCompanyPending:true
            };
            break;
        case 'ADD_COMPANY_FULFILLED':
            state = {
                ...state,
                companies:action.payload.companies,
                addCompanyPending:false
            };
            break;
        default:
        // do nothing
    }
    return state;
};

export default companiesReducer;