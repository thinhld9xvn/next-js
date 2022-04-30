import { HOME_PAGE_URL } from "@constants/constants";
import { addPathToUrl, filterSeoUrlExtras, filterURL } from "./urlUtils";

export function isValidateArray(arr) {

    return arr && arr.length > 0;

}

export function isObject(e) {

    return typeof(e) === 'object';

}

export function isUndefined(e) {

    return typeof(e) === 'undefined';

}

export function isNumeric(str) {

    if (typeof str != "string") return false // we only process strings!

    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export function isParseToArray(e) {
    
    const keys = Object.keys(e);
    
    let boolValidate = true;

    keys.map(k => {

        if ( boolValidate ) {

            boolValidate = isNumeric(k);

        }

    });

    return boolValidate;

}

export function parseElemToArray(elem) {

    const keys = Object.keys(elem);
    const data = [];

    for ( let i = 0; i < keys.length; i++ ) {

        const key = keys[i];

        data.push(elem[key]);

    }

    return data;

}

export function travselElement(elem) {

    if ( Array.isArray(elem) ) return elem;

    let data = {};
    const keys = Object.keys(elem);

    if ( isObject(elem) && isParseToArray(elem) ) {

        data = parseElemToArray(elem)
                        .map(e1 => travselElement(e1));

    }

    else {

        for (let i = 0; i < keys.length; i++ ) {

            const key = keys[i],
                e = elem[key];

            if ( isObject(e) ) {

                if ( isParseToArray(e) ) {

                    data[key] = parseElemToArray(e)
                                        .map(e1 => travselElement(e1));

                }

                else {

                    data[key] = e;

                }

            }

            else {

                data[key] = e;

            }
            
            
        }

    }

    return data;
    
}

export function convertObjectToArray(data) {    

    return travselElement(data);

}

export function getObjectArrayData(data) {

    return convertObjectToArray(JSON.parse(data));

}

export function filterObjectArrayData(data, type = 'page') {

    data.map(item => {

        item.origin = item.url;
        item.slug = item.url;

        if ( item.url !== HOME_PAGE_URL ) {
                        
            item.slug = item.url.split('/')[1];
            item.url = addPathToUrl(item.url, type);

        }

    });

    return data;

}

export function cloneArray(o) {
    return JSON.parse(JSON.stringify(o));
}