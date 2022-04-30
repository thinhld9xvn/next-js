const initialStates = {     
  
    currentArticle : null,
    relatedArticle : null

};

export const articlesReducer = (state = initialStates, action) => {

    switch ( action.type ) {        

        case 'UPDATE_CURRENT_ARTICLE' :
            
            state.currentArticle = action.payload;

            return JSON.parse( JSON.stringify(state) );

         case 'UPDATE_RELATED_ARTICLE' :
            
            state.relatedArticle = action.payload;

            return JSON.parse( JSON.stringify(state) );

        default :

            break;

    }

    return JSON.parse( JSON.stringify(state) );

}