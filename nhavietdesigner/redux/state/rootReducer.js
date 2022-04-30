import { combineReducers } from "redux";
import { globalReducer } from "@global_redux/globalReducer";
import { articlesReducer } from "@articles_redux/articlesReducer";

export const reducer = combineReducers({ 

    globalReducer,
    articlesReducer
    
}); 