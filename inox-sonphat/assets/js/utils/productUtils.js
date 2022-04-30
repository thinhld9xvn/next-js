import { DEFAULT_SHOW_PRODUCTS, SORTS } from "@constants/constants";
import { cloneArray } from "./arrayUtils";
import { removeAccents } from "./removeAccentsUtils";
import { saveCartsToStorage } from "./shoppingCartsUtils";
export function getProducts(data, paged = 1, limit = DEFAULT_SHOW_PRODUCTS) {
    const from = (paged - 1) * limit;
    const to = paged * limit - 1;
    return data.filter((product, i) => i >= from && i <= to );
}
export function sort(data, type = SORTS.default) {
    return data.sort((p1, p2) => {
        const name1 = removeAccents(p1.name),
               name2 = removeAccents(p2.name),
               price1 = parseFloat(p1.price[0].fixed),
               price2 = parseFloat(p2.price[0].fixed);
        if ( type === SORTS.price_a_to_z ) {                
            return name1.localeCompare(name2);
        }
        else if ( type === SORTS.price_z_to_a ) {
            return name2.localeCompare(name1);
        }
        else if ( type === SORTS.price_to_up ) {   
            if ( price1 === price2 ) return 0;
            return price1 < price2 ? -1 : 1;
        }
        else if ( type === SORTS.price_to_down ) {
            if ( price1 === price2 ) return 0;
            return price1 > price2 ? -1 : 1;
        }
        return -1;
    });
}
export function getCartLocaleData(product, locale) {
    const {polylang_post : localeProduct, locale: plocale, thumbnails, url, title, sizes, colors, brands, places} = product;
    const {url : thumbnail} = thumbnails[1];
    const {url : localeThumbnail} = localeProduct.thumbnails[1];
    const productName = locale === plocale ? title : localeProduct.title;
    const productThumbnail = locale === plocale ? thumbnail : localeThumbnail;
    const productUrl = locale === plocale ? url : localeProduct.url;
    const productSizes = locale === plocale ? sizes : localeProduct.sizes;
    const productColors = locale === plocale ? colors : localeProduct.colors;
    const productBrands = locale === plocale ? brands : localeProduct.brands;
    const productPlaces = locale === plocale ? places : localeProduct.places;
    return {
        productName,
        productThumbnail,
        productSizes,
        productColors,
        productBrands,
        productPlaces,
        productUrl
    }
}
export function performAction(e, action, data, props) {
    e.preventDefault();
    const {id} = data;
    const {cartsList, UpdateCartsList} = props;
    const product = cartsList.find(cart => cart.id === id);
    const dec = (e) => {
        if ( product.count > 1 ) {
            product.count--;
            product.polylang_post.count--;
            UpdateCartsList(cloneArray(cartsList));
            saveCartsToStorage(cloneArray(cartsList));
        }
    }   
    const inc = (e) => {
        product.count++;
        product.polylang_post.count++;
        UpdateCartsList(cloneArray(cartsList));
        saveCartsToStorage(cloneArray(cartsList));
    }
    if ( action === 'inc' ) {
        inc();
    }
    else {
        dec();
    }
 }