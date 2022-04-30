import { getCodeObjFromUrl, getSlugObjFromUrl } from '@js_dir/utils/urlUtils';
import { getCategoryApi } from '@lib/getCategoryApi';
import { CATEGORY_LAYOUT } from '@constants/constants';
import { getTagApi } from '@lib/getTagApi.js';
import { getArticle } from '@lib/getArticleApi';
async function getCategoryProps(slug) {
    let layout = CATEGORY_LAYOUT.default;
    if ( slug.startsWith(CATEGORY_LAYOUT.magazine) ) {
        layout = CATEGORY_LAYOUT.magazine;
    }
    if ( slug.startsWith(CATEGORY_LAYOUT.beauty) ) {
        layout = CATEGORY_LAYOUT.beauty;
    }
    if ( slug.startsWith(CATEGORY_LAYOUT.movie) ) {
        layout = CATEGORY_LAYOUT.movie;
    }
    const dataCode = getCodeObjFromUrl(slug); 
    const dataSlug = getSlugObjFromUrl(slug);
    const category = await getCategoryApi(dataCode, dataSlug);
    const {name, id, meta_title, meta_keyword, meta_description, parent_id} = category;
    return {
        props : {
            pageContext : {  
                name,
                id, 
                parent_id,
                meta_title,
                meta_keyword,
                meta_description,
                layout,
                child_layout : parent_id > 0
            },
            middleType : 'category'
        }
    }
}
async function getTagProps(slug) {
    const tagSlug = getSlugObjFromUrl(slug);
    const tagCode = getCodeObjFromUrl(slug);
    const {id, name, meta_title, meta_description, meta_keyword, content, image, profile} = (await getTagApi(tagSlug, null, tagCode))[0]._source;
    return {
        props : {
            pageContext : {
                id, 
                name, 
                meta_title,
                meta_description,
                meta_keyword,
                content,
                image,
                profile
                //breadcrumbs
            },
            middleType : 'tag'
        }
    }
}
async function getPostProps(slug) {
    slug = getSlugObjFromUrl(slug);
    const {id, category_obj, title, introtext, meta_keyword, image, code} = await getArticle(slug);
    //const categories = JSON.parse(category_obj);
    //const cid = categories && Object.keys(categories).length ? (Object.keys(categories))[0] : null;
    //const category = cid ? ((await getCategoriesApi({id : cid})).map(e => e._source))[0] : null;
    return {
        props : {
          pageContext : {
            id, 
            title,
            image,
            slug,
            code,
            introtext,
            meta_keyword
          },
          middleType : 'post'
        }
    }
}
export async function getPgProps(slug) {
    const regCatMatch = /-nt[a-zA-Z0-9]{4,4}.html$/;
    const regTagMatch = /-kt[a-zA-Z0-9]{4,4}.html$/;
    //const regPostMatch = /-t[a-zA-Z0-9]{5,5}.html$/;
    if ( regCatMatch.test(slug) ) {
        return await getCategoryProps(slug);
    }
    if ( regTagMatch.test(slug) ) {
        return await getTagProps(slug);
    }
    return await getPostProps(slug);
}
