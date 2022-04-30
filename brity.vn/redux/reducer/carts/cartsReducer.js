const initialStates = { 
   
    carts : []

};

export const cartsReducer = (state = initialStates, action) => {

    switch ( action.type ) {

        case 'UPDATE_CARTS_LIST' :

            state.carts = action.payload;
            //state.chosenValue = action.payload;

            return JSON.parse( JSON.stringify(state) );
            

        default :

            break;

    }

    return JSON.parse( JSON.stringify(state) );

}