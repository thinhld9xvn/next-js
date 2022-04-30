function isChildCat(cid, pid, data) {   

    let boolSearched = false;

    const trarvselChildItem = function(cat) {

        if ( boolSearched ) return;

        if ( cat.id === cid ) {

            boolSearched = true;

        }

        cat.childrens && 
            cat.childrens.length && 
                cat.childrens.map(child => trarvselChildItem(child));

    }

    data.map(cat => {

        if ( cat.id === pid ) {

            if ( cat.childrens && 
                    cat.childrens.length ) {

                cat.childrens.map(child => trarvselChildItem(child));

            }

        }

    });

    return boolSearched;

}

function isArticleInCategory(article, cat_id, data) {

    return article.categories.filter(cat => cat.id === cat_id || isChildCat(cat_id, cat.id, data) ).length;

}

function findCategory(id, categoriesData) {

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

module.exports.isChildCat = isChildCat;
module.exports.isArticleInCategory = isArticleInCategory;
module.exports.findCategory = findCategory;