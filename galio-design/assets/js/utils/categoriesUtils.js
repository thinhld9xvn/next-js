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
export function inCategory(o, cat_id, cid_key = 'term_id') {
    const categories = o.categories;
    if ( categories ) {
        return categories.filter(cat => cat[cid_key] === cat_id || isChildCat(cat_id, cat[cid_key], categories) ).length;
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
export function getCatListByPosts(posts) {
    const results = [];
    posts.map(post => {
        post.categories.map(cat => {
            const catResults = results.filter(c => c.id === cat.id);
            if (catResults.length === 0) {
                results.push({...cat, count : 1});
            }
            else {
                catResults[0].count++;
            }
        });
    });
    return results;
}
export function addCatFilterAllItem(categoryLists, label) {
    if ( categoryLists[0].id !== 0 ) {
        categoryLists.splice(0, 0, {
            id : 0,
            title : label,
            name : label,
            text : label,
            url : '#'
        });
    }
}