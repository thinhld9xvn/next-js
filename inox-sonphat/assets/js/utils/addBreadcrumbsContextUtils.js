import { getPageUrlByLocale } from "./urlUtils";
export function addBreadcrumbsContext(data, locale, messages) {  
    const breadcrumbsData = [];
    const {base, id, title, data : categoryListsData} = data;
    breadcrumbsData.push({
        id : "breadcrumbs_home",
        text : messages['home_label'],
        url : "/"
    });
    if ( base === 'category' ) {  
        if ( categoryListsData && categoryListsData.length ) {
            categoryListsData.map((e, i) => {
                let {id, name, url} = e;
                if ( id === 'products_base' ) {
                    breadcrumbsData.push({
                        id : "breadcrumbs_products",
                        text : messages.products_label,
                        url : getPageUrlByLocale('products', locale),
                        active : i === categoryListsData.length - 1
                    });  
                }
                else {
                    breadcrumbsData.push({
                        id : "breadcrumbs_" + id,
                        text : name,
                        url,
                        active : i === categoryListsData.length - 1
                    });  
                }
            });  
        }
        else {
            breadcrumbsData.push({
                id : "breadcrumbs_" + id,
                text : title,
                active : true
            });  
        }
    }     
    else {
        breadcrumbsData.push({
            id : "breadcrumbs_" + id,
            text : title,
            active : true
        });  
    }
    return breadcrumbsData;
}