import { cloneArray } from "./arrayUtils";

export function getArticleDateCreatedStr(data, format = false) {
    if ( !data ) return false;
    const {date_created} = data;
    if ( !date_created || date_created.length === 0 ) return false;
    const {day, month, year} = date_created[0];
    return !format ? 
                `${day}.${month}.${year}` : 
                    `${day} tháng ${month} năm ${year}`;
}
export function getFeaturedImage(data, options) {
    if ( !data || !data.node ) return options.siteFooter.default_banner;
    return data.node.mediaItemUrl || options.siteFooter.default_banner;
}
export function getSingleFeaturedImage(thumbnail, options) {
    return thumbnail || options.siteFooter.default_banner;
}
export function filterArticlesByCatId(data, cid = -1) {
    return cloneArray(data.filter(e => cid !== -1 ? inCategory(e, cid, 'id') : true));
}
export function getArticles(data, paged = 1, limit = DEFAULT_SHOW_PRODUCTS) { // data : danh sách bài đã filter theo cat id rồi
    const from = (paged - 1) * limit;
    const to = paged * limit - 1;
    return data.filter((e, i) => i >= from && i <= to );
}
export function getArticleCategoryStr(data) {
    const {categories} = data;
    if ( categories ) {
        return categories[0].name;
    }
    return false;
}
function isChildCat(cid, pid, data, key = 'term_id') {   
    let boolSearched = false;
    const trarvselChildItem = function(cat) {
        if ( boolSearched ) return;
        if ( cat[key] === cid ) {
            boolSearched = true;
        }
        cat.childrens && 
            cat.childrens.length && 
                cat.childrens.map(child => trarvselChildItem(child));
    }
    data.map(cat => {
        if ( cat[key] === pid ) {
            if ( cat.childrens && 
                    cat.childrens.length ) {
                cat.childrens.map(child => trarvselChildItem(child));
            }
        }
    });
    return boolSearched;
}
export function inCategory(o, cat_id, cid_key = 'id') {
    const categories = o.categories;
    if ( categories ) {
        return categories.filter(cat => cat[cid_key] === cat_id).length;
    }
    return false;
}