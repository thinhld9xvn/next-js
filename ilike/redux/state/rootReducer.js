import { combineReducers } from "redux";
import { homeReducer } from "@home_redux/homeReducer";
import { globalReducer } from "@global_redux/globalReducer";

export const reducer = combineReducers({ 

    globalReducer,
    homeReducer
    
}); 