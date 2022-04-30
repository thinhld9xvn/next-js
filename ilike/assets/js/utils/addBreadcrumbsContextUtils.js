import { getCategoryLink } from "./categoriesUtils";
export function addBreadcrumbsContext(data) {  
    const breadcrumbsData = [];
    const {base, id, title, data : categoryListsData} = data;
    breadcrumbsData.push({
        id : "breadcrumbs_home",
        text : "Trang chủ",
        url : "/"
    });
    if ( base === 'articles' ) { 
        const {category} = data;
        breadcrumbsData.push({
            id : "breadcrumbs_" + category.id,
            text : category.name,
            url : getCategoryLink(category)
        });
        breadcrumbsData.push({
            id : "breadcrumbs_" + id,
            text : title,
            active : true           
        });
    }       
    else if ( base === 'category' ) {  
        if ( categoryListsData && categoryListsData.length ) {
            categoryListsData.map((e, i) => {
                let {id, name, url} = e;
                url = getCategoryLink(e);
                breadcrumbsData.push({
                    id : "breadcrumbs_" + id,
                    text : name,
                    url,
                    active : i === categoryListsData.length - 1
                });  
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