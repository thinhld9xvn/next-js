import { formatMoney } from "./formatMoneyUtils";
import toastr from 'toastr';
import { LANGUAGES, TOASTR_DEF_OPTIONS } from "@constants/constants";
import router from "next/router";
import { getPageUrlByLocale } from "./urlUtils";
export function getCartsFromStorage(locale = LANGUAGES.vi) {
    const data = typeof(window) !== 'undefined' ? window.localStorage.getItem('carts') : [];
    return data ? JSON.parse(data) : [];
}
export function saveCartsToStorage(carts) {
    typeof(window) !== 'undefined' && 
            window.localStorage.setItem('carts', JSON.stringify(carts));
}
export function calcTotalCartPrice(cart) {
 const total = parseFloat(parseFloat(cart.price[0].fixed) * parseInt(cart.count));
 return {
    total,
    format : {
        total : formatMoney(total)
    } 
}
}
export function calcTotalPrices(carts) {
    let total = 0;
    carts.forEach(cart => {
        total += (calcTotalCartPrice(cart)).total;
    });
    return {
        total,
        format : {
            total : formatMoney(total)
        } 
    }
}
export function onClick_addToCartEvent(data, e) {
    e.preventDefault();
    const { product, carts, updateCartsAction, messages } = data;
    const myProduct = JSON.parse(JSON.stringify(product)),
          myCarts = JSON.parse(JSON.stringify(carts));
    const index = myCarts.findIndex(c => c.id === myProduct.id);    
    if ( typeof(myProduct.count) === 'undefined' ) {
        myProduct.count = 1;
        myProduct.polylang_post.count = 1;
    }
    if ( index === -1 ) {
        myCarts.push(myProduct);
    }
    else {
        myCarts[index].count += myProduct.count;
        myCarts[index].polylang_post.count += myProduct.count;
    }      
    
    updateCartsAction(myCarts); 
    saveCartsToStorage(myCarts);
    toastr.success(messages['add_product_success'], messages['noti'], TOASTR_DEF_OPTIONS);
}
export function onClick_removeCartEvent(data, e) { 
    e.preventDefault();
    const {id, carts, updateCartsAction, messages} = data;
    const index = carts.findIndex(cart => cart.id === id );
    if ( index !== -1 ) {
        carts.splice(index, 1);
        updateCartsAction(carts);     
        saveCartsToStorage(carts);
        toastr.info(messages['remove_product_success'], messages['noti'], TOASTR_DEF_OPTIONS);
    }
}
export function onClick_buyCartEvent(data, e) { 
    e.preventDefault();
    const {locale} = data;
    const url = getPageUrlByLocale('checkout', locale);
    onClick_addToCartEvent(data, e);    
    router.push(url, url);
}