import { combineReducers } from "redux";
import { globalReducer } from "@global_redux/globalReducer";
import { productsReducer } from "@products_redux/productsReducer";
import { cartsReducer } from "@carts_redux/cartsReducer";
import { articlesReducer } from "@articles_redux/articlesReducer";

export const reducer = combineReducers({ 

    globalReducer,
    productsReducer,
    cartsReducer,
    articlesReducer
    
}); 