import { LANGUAGES } from "@constants/constants";
const initialStates = {  
    pageContext : {},
    originalResultsFiltered : [],
    resultsFiltered : [],  // after sorting 
    searchKey : '',
    catSearch : '',
    paged : 1,
    activeLang : LANGUAGES.vi,
    siteOptions : null,
    mobileMenuHtml : null,
    activePolyLangUrl : null,
    cartsList : []
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
        case 'UPDATE_ACTIVE_LANGUAGE' :
            state.activeLang = action.payload;
            //state.chosenValue = action.payload;
            return JSON.parse( JSON.stringify(state) );
         case 'UPDATE_ACTIVE_POLYLANG_URL' :
            state.activePolyLangUrl = action.payload;
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
        case 'UPDATE_CARTS_LIST' :
            state.cartsList = action.payload;
            //state.chosenValue = action.payload;
            return JSON.parse( JSON.stringify(state) );
        default :
            break;
    }
    return JSON.parse( JSON.stringify(state) );
}