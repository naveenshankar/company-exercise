
const companiesReducer = (state = {
    deleteCache: false,
    companies: [],
    currentCompanyId:null
}, action) => {
    switch (action.type) {
        case 'GET_COMPANIES_FULFILLED' :
            state = {
                ...state,
                companies:action.payload.companies
            };
            break;
        case 'GET_COMPANY_FULFILLED' :
            state = {
                ...state,
                currentCompanyId:action.payload.currentCompanyId
            };
            break;
        default:
        // do nothing
    }
    return state;
};

export default companiesReducer;