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