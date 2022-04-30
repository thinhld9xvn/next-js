import React, { useEffect } from 'preact/compat'
import BlogLayout from "@components/blog-layout"
import { isArticleInCategory } from "@js_dir/utils/categoriesUtils";
import { getInitPropsJsonData } from "@js_dir/utils/data/getInitPropsJsonDataUtils";
import { getSeoExtras } from "@js_dir/utils/getSeoExtrasUtils";
import { getAllCategories } from "@lib/getAllCategoriesApi";
import { getArticlesList } from "@lib/getArticlesListApi";
import { getCategoriesList } from "@lib/getCategoriesListApi";
import { getCategory } from "@lib/getCategoryApi";
import { setNotiTimer } from '@js_dir/utils/notificationsUtils';

export default function BlogsCategory(pageContext) {
    useEffect(() => {

        const tmrNoti = setInterval(setNotiTimer, 5000);
  
        return () => {
            clearInterval(tmrNoti);
        }
  
    }, []);

    return <BlogLayout pageContext = {pageContext} />
}

export async function getStaticProps({ slug = 'our-blogs' }) {

    const props = await getInitPropsJsonData();

    const result = await getAllCategories();

    const categoriesList = await getCategoriesList();
    const cat = await getCategory(slug);

    const articles = await getArticlesList();    
    const articlesList = articles.filter(article => isArticleInCategory(article, cat.id, categoriesList));

    const pageContext = {
        data : {
            id : cat.id,
            title : cat.title,
            heading : cat.heading,
            url : cat.url,
            extras : {
                articles: [...articlesList]
            },
            seo : getSeoExtras(result, {
                id : cat.id,
                url : cat.old_url,
                rewrite : cat.url
            }),
            ...props
        }
    };

    return {
        props: {
            ...pageContext
        },
        revalidate: 10
    }

}