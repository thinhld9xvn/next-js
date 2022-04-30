import { SICKY_POST_NUM, CATEGORIES } from "@constants/constants";
import { followCategory } from "@lib/followCategoryApi";
import { getCategoriesApi } from "@lib/getCategoriesApi";
import { cloneArray } from "./arrayUtils";
import { getUserLoginToken } from "./membership";
import toastr from 'toastr';
import { TOASTR_DEF_OPTIONS } from '@constants/constants';
export function isChildCat(cid, pid, data) {   
    let boolSearched = false;
    const trarvselChildItem = function(cat) {
        if ( boolSearched ) return;
        if ( cat.term_id === cid ) {
            boolSearched = true;
        }
        cat.childrens && 
            cat.childrens.length && 
                cat.childrens.map(child => trarvselChildItem(child));
    }
    data.map(cat => {
        if ( cat.term_id === pid ) {
            if ( cat.childrens && 
                    cat.childrens.length ) {
                cat.childrens.map(child => trarvselChildItem(child));
            }
        }
    });
    return boolSearched;
}
export function inCategory(o, cat_id, data, cid_key = 'term_id') {
    if ( o.categories ) {
        return o.categories.filter(cat => cat[cid_key] === cat_id || isChildCat(cat_id, cat[cid_key], data) ).length;
    }
    return false;
}
export function findCategory(id, categoriesData) {
    var searchedCat = null;
    const search = function(cat) {
        if ( searchedCat ) return true;
        if ( cat.id === id ) {
            searchedCat = JSON.parse(JSON.stringify(cat));
        }
        else {
            if ( cat.childrens && cat.childrens.length ) {
                cat.childrens.map(child => search(child));
            }
        }
    }
    categoriesData.map(cat => search(cat));
    return searchedCat;
}
export function getCategorySlug(cat) {
    if ( cat.id === CATEGORIES.MAGAZINE.id ) return cat.slug;
    return cat.slug + '-' + cat.code;
}
export function getCategoryLink(cat) {
    const baseUrl = {
        development: process.env.SITE_LOCALHOST_URL,
        production: process.env.SITE_BASE_URL,
      }[process.env.NODE_ENV];
    const slug = '/' + getCategorySlug(cat) + '.html';
    return (typeof(window) !== 'undefined' ? window.location.origin : baseUrl) + slug;
}
export function getStickyPostsList(data, n = SICKY_POST_NUM, v = 1) {
    if ( v === 1 ) {
        return data.filter((e, i) => i >= 0 && i < n );
    }
    return data.filter((e, i) => i >= 0 && i < n )
               .map(e => {
                  return e._source;
               });
}
export function getOldPostsList(data, n = SICKY_POST_NUM, v = 1) {
    if ( v === 1) {
        return data.filter((e, i) => i >= n );
    }
    return data.filter((e, i) => i >= n )
               .map(e => {
                  return e._source;
               });
}
export function getFirstCategoryIdFromPost(post) {    
    if (!post.category_obj) return null;    
    const categories = JSON.parse(post.category_obj);
    const key = (Object.keys(categories))[0];
    return key ? parseInt(key) : null;
}
export function getFirstCategoryNameFromPost(post) {
    if (!post.category_obj) return null;
    const categories = JSON.parse(post.category_obj);
    const key = Object.keys(categories)[0];
    return categories ? categories[key] : null;
}
export async function getCatParentLists(id) {
    const getDefaultCatListAttr = (catLists) => {
        return catLists.map(e => getDefaultCatAttr(e));
    }
    const getDefaultCatAttr = (e) => {
        return {id: e.id, name: e.name, code: e.code, slug: e.slug, parent_id: e.parent_id};
    }
    const getChildTreeLists = async (cid) => {
        return getDefaultCatListAttr((await getCategoriesApi({parent: cid})).map(e => e._source));
    }
    const getCatData = async (cid) => {
        return ((await getCategoriesApi({id : cid})).map(e => e._source))[0];
    }
    const travselLoopHook = async (category) => {
        if ( category.parent_id && 
            category.parent_id > 0 ) {   
            const parentCat = {...cloneArray(getDefaultCatAttr(await getCatData(category.parent_id))), childrens: cloneArray(await getChildTreeLists(category.parent_id))};
            myCat.data.push({ data : [ cloneArray(parentCat) ] });            
            await travselLoopHook(parentCat);
        }
    }   
    const cat = getDefaultCatAttr(await getCatData(id));
    const myCat = {...cloneArray(cat), data: []};    
    await travselLoopHook(cat);  
    const childCatLists = await getChildTreeLists(cat.id);
    if (childCatLists.length ) {
        myCat.data.push({data : cloneArray(childCatLists)});
    }
    if (isLastEntryLevel(myCat)) {
        myCat.data.reverse();
    }
    return myCat;
}
export function isLastEntryLevel(treeCatList) {
    const data = treeCatList.data[0].data[0];
    return data.parent_id !== 0;
}
export async function onClick_followCategory(e, data, updateShowLoginModal) {
    e.preventDefault();
    try {
        const {id, session} = data;    
        const token = getUserLoginToken();
        if ( !token && !session ) {
            updateShowLoginModal(true);
            return;
        }
        const {data : resultsData} = await followCategory(id);
        const {status, code, message} = resultsData;
        if ( status && code === 200 ) {
            toastr.success(message, 'Thông báo', TOASTR_DEF_OPTIONS);
            return;
        }
        toastr.error('Có lỗi xảy ra, mời thử lại sau !!!', 'Lỗi', TOASTR_DEF_OPTIONS);
    } catch {
        toastr.error('Có lỗi xảy ra, mời thử lại sau !!!', 'Lỗi', TOASTR_DEF_OPTIONS);
    }
}