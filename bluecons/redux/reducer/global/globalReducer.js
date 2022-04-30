const initialStates = {  
    pageContext : {},
    originalResultsFiltered : [],
    resultsFiltered : [],  // after sorting 
    searchKey : '',
    catSearch : '',
    paged : 1,
    siteOptions : {},
    mobileMenuHtml : null,
};
export const globalReducer = (state = initialStates, action) => {
    switch ( action.type ) {   
        case 'UPDATE_PAGE_CONTEXT' :
            state.pageContext = action.payload;
            //state.chosenValue = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATED_CURRENT_PAGED' :
            state.paged = action.payload;
            //state.chosenValue = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_RESULTS_FILTERED' :
            state.resultsFiltered = action.payload;
            //state.chosenValue = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_ORIGINAL_RESULTS_FILTERED' :
            state.originalResultsFiltered = action.payload;
            //state.chosenValue = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_SITE_OPTIONS' :
            state.siteOptions = action.payload;
            //state.chosenValue = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_MOBILE_MENU_HTML' :
            state.mobileMenuHtml = action.payload;
            //state.chosenValue = action.payload;
            return JSON.parse( JSON.stringify(state) );
        default :
            break;
    }
    return JSON.parse( JSON.stringify(state) );
}