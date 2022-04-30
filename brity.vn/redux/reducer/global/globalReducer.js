const initialStates = {  

    pageContext : {},
    originalResultsFiltered : [],
    resultsFiltered : [],  // after sorting 
    searchKey : '',
    catSearch : '',
    paged : 1,
    fbAppId : '2147827908693613'

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

        case 'UPDATE_SEARCH_KEY' :

            state.searchKey = action.payload;
            //state.chosenValue = action.payload;

            return JSON.parse( JSON.stringify(state) );

        case 'UPDATE_CAT_SEARCH' :

            state.catSearch = action.payload;
            //state.chosenValue = action.payload;

            return JSON.parse( JSON.stringify(state) );


        default :

            break;

    }

    return JSON.parse( JSON.stringify(state) );

}