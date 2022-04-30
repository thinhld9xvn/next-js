const initialStates = { 
    
    searchedProductsList : [],
    chosenFilteredValues : {},
    currentProduct : {}

};

export const productsReducer = (state = initialStates, action) => {

    switch ( action.type ) {        

        case 'UPDATE_FILTER_VALUES' :

            state.chosenFilteredValues = action.payload;
            //state.chosenValue = action.payload;

            return JSON.parse( JSON.stringify(state) );

        case 'UPDATE_SEARCHED_PRODUCTS_LIST' :

            state.searchedProductsList = action.payload;           

            return JSON.parse( JSON.stringify(state) );
        
         case 'UPDATE_CURRENT_PRODUCT' :

            state.currentProduct = action.payload;
            //state.chosenValue = action.payload;

            return JSON.parse( JSON.stringify(state) );

        default :

            break;

    }

    return JSON.parse( JSON.stringify(state) );

}