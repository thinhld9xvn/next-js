import { CAT_FEATURED_ID, DEFAULT_PAGE, FEATURED_POSTS_NUM, INFO_TITLE, MAX_POSTS_NUM, NEWEST_POSTS_NUM, POSTS_LIST_SAVED_KEY, SAVE_POST_SUCCESS_MESSAGE, SESSION_EXPIRES_WARNING, SUCCESS_CODE, TOASTR_DEF_OPTIONS, UNAUTH_CODE, UNSAVE_POST_SUCCESS_MESSAGE, WARNING_TITLE } from '@constants/constants';
import { getPostsList } from '@lib/getPostsListApi';
import { savePost } from '@lib/savePostApi';
import toastr from 'toastr';
import { cloneArray } from './arrayUtils';
import { formatDateStr } from './dateUtils';
import { getUserLoginToken } from './membership';

export function getIntroText(text) {
    const key = 'ilike.com.vn - ';
    const index = text.indexOf(key);
    if ( index !== -1 ) {
        return text.substr(index + key.length);
    };
    return text;
}
export function getArticleData(article) {
    if ( ! article ) return {
        title : '',
        slug : '',
        image : '',
        date_format : '',
        timeago_label : '',
        comment_count : '',
        introtext : '',
        author : '',
    };
    const {title = '', 
            slug = '', 
            image = '',
            created_at = '',
            created_time = '',
            updated_time = '',
            published_time = '',
            comment_count = '',
            introtext = '',
            author = ''} = article;
    return {
        title,
        slug,
        image,
        comment_count : !comment_count ? 0 : comment_count,
        introtext : getIntroText(introtext),
        author,
        date_format : published_time ? (created_at && formatDateStr(created_at)) || (published_time && formatDateStr(published_time)) || (updated_time && formatDateStr(updated_time)) : ''
    }
}
export function getArticleSlug(article) {
    return article.slug + '-' + article.code;
}
export function getArticleFullLink(article) {
    const baseUrl = {
        development: process.env.SITE_LOCALHOST_URL,
        production: process.env.SITE_BASE_URL,
      }[process.env.NODE_ENV];
    const slug = '/' + getArticleSlug(article) + '.html';
    return (typeof(window) !== 'undefined' ? window.location.origin : baseUrl) + slug;
}
export function getSavedFavoriteArticlesList() {
    const data = localStorage.getItem(POSTS_LIST_SAVED_KEY);
    return data ? JSON.parse(data) : null;
}
function pushArticlesListToStorage(articlesList) {
    localStorage.setItem(POSTS_LIST_SAVED_KEY, JSON.stringify(articlesList));
}
export async function saveFavoriteArticle(article) {
    const articlesListData = localStorage.getItem(POSTS_LIST_SAVED_KEY);
    const articlesList = articlesListData ? JSON.parse(articlesListData) : [];
    const searchedArticleIdx = articlesList.findIndex(e => e.id ===  article.id);
    const token = getUserLoginToken();
    if (!token) {
        return;
    }
    const results = await savePost(article.id, token);
    if ( results.data === null && results.code === UNAUTH_CODE ) {
        toastr.warning(SESSION_EXPIRES_WARNING, WARNING_TITLE, TOASTR_DEF_OPTIONS);
        return null;
    }    
    if ( !results.data && results.code === SUCCESS_CODE ) {
        toastr.info(UNSAVE_POST_SUCCESS_MESSAGE, INFO_TITLE, TOASTR_DEF_OPTIONS);
        if ( searchedArticleIdx !== -1 ) {   
            articlesList.splice(searchedArticleIdx, 1);
            pushArticlesListToStorage(articlesList);
        }   
    }
    if ( results.data && results.code === SUCCESS_CODE ) {
        if ( searchedArticleIdx === -1 ) {   
            articlesList.push(article);
            pushArticlesListToStorage(articlesList);
        }           
        toastr.success(SAVE_POST_SUCCESS_MESSAGE, INFO_TITLE, TOASTR_DEF_OPTIONS);        
    }    
    return articlesList;
}
export function isPostSavedInLists(postsSavedList, article) {
    return postsSavedList ? postsSavedList.filter(post => post.id === article.id).length : null;
}
export async function getHomeFeaturedLists() {
    const featuredPostsList = (await getPostsList(CAT_FEATURED_ID, null, NEWEST_POSTS_NUM, DEFAULT_PAGE)).map(e => e._source);
    const newsPostsList = (await getPostsList(null, null, MAX_POSTS_NUM, DEFAULT_PAGE)).map(e => e._source); 
    return {
        featuredPostsList,
        newsPostsList
    }
}
export function addExcludes(data, excludeIds) {
    if ( !data || data.length === 0 ) return;
    data.map(e => excludeIds.push(e.id));
}
export function getFilteredFromExcludes(data, excludeIds, num = 5) {
    return cloneArray(data.filter(e => excludeIds.indexOf(e.id) === -1))
                          .filter((e, i) => i < num);
}
export async function setWidgetPostsListWithExcludes(cid, excludeIds, updateCallback, num = 5) {
    const data = (await getPostsList(cid, null, MAX_POSTS_NUM, DEFAULT_PAGE)).map(e => e._source);
    const filteredList = getFilteredFromExcludes(data, excludeIds, num);
    addExcludes(filteredList, excludeIds);
    updateCallback(cloneArray(filteredList));
}
export async function getWidgetPostsListWithExcludes(cid, excludeIds, num = 5) {
    const data = (await getPostsList(cid, null, MAX_POSTS_NUM, DEFAULT_PAGE)).map(e => e._source);
    const filteredList = getFilteredFromExcludes(data, excludeIds, num);
    addExcludes(filteredList, excludeIds);
    return filteredList;
}