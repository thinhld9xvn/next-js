import React, {useEffect, useState} from 'preact/compat'
import { getArticleData, getArticleFullLink } from '@js_dir/utils/articleUtils';
import Link from 'next/link'
import { BLANK_IMAGE, CATEGORY_LAYOUT, DEFAULT_THUMBNAIL, USER_ICON } from '@constants/constants';
import { cloneArray, isDiff } from '@js_dir/utils/arrayUtils';
import { onClick_savePost } from '@postpage/events/onClick_savePost'
import { isPostSavedInLists } from '@js_dir/utils/articleUtils';
import { checkImage, getImageUrlFromAmazonS3 } from '@js_dir/utils/imageUtils';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { css } from "@emotion/react";
import { getFirstCategoryNameFromPost } from '@js_dir/utils/categoriesUtils';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function FeaturedMobileFavoriteArticle({data = null, 
                                        index = 1,
                                        single = null,
                                        lazy = true,
                                        savedPostsList }) {        
    const article = !single ? (data && data[index] ? data[index] : null) : single;
    const [savedPostsListData, setSavedPostsListData] = useState(savedPostsList);
    const [imageUrl, setImageUrl] = useState(article ? getImageUrlFromAmazonS3(article.image) : DEFAULT_THUMBNAIL); 
    useEffect(() => {
        if ( article ) {            
            let {image} = article;
            if (image) {
                image = getImageUrlFromAmazonS3(image)
            }
            if ( !lazy ) {
                checkImage(image).then(results => {
                    results.status === 'ok' ? isDiff(imageUrl, image) && setImageUrl(image) : 
                                            isDiff(imageUrl, DEFAULT_THUMBNAIL) && setImageUrl(DEFAULT_THUMBNAIL);
                });       
            }     
            else {
                isDiff(imageUrl, image) && setImageUrl(image || DEFAULT_THUMBNAIL);
            }
        }
    });    
    useEffect(() => {
        if ( isDiff(savedPostsListData, savedPostsList) ) {
            setSavedPostsListData(cloneArray(savedPostsList));
        }
    }, [savedPostsList]);
    if ( ! article ) {
        return (
            <></>
        )
    }    
    const {title, slug, introtext, author, date_format} = getArticleData(article);
    return (
        <article className="account-article-favorite">
            <div className="thumbnail">
                <Link href={article.link || getArticleFullLink(article)}>
                    <img className={lazy ? "loading-img" : ''} src={lazy ? BLANK_IMAGE : imageUrl} data-src={lazy ? (imageUrl || DEFAULT_THUMBNAIL) : ''} alt="" />
                </Link>
            </div>
            <h3 className="mb-element-title mb-element-harquant-title mb-judge-normal-title mtop10">
                <Link href={article.link || getArticleFullLink(article)}>
                    {title}
                </Link>
            </h3>
            <div className="mb-post-content mb-judge-post-content mtop10">
                {introtext}
            </div>
            <div className="mb-element-metadata mb-element-harquant-metadata flex flex-align-center flex-justify-space-between mtop10">
                {author ? (
                    <div className="author flex flex-align-center">
                        <img className="mb-default-avatar" src={USER_ICON} alt="" />
                        <div className="padleft10">
                            <div>
                                <strong className="mb-author-name">{author}</strong>
                                <strong className="mb-post-category flex flex-align-center">
                                    {date_format}
                                </strong>
                            </div>
                        </div>
                    </div>
                ) : null}
                <div className="unbookmark">
                    <img src="/static/images/unbookmark.svg" alt="" />
                </div>
            </div>
        </article>

    )
}
function mapStateToProps(state) {  
    return {
        savedPostsList : state.globalReducer.savedPostsList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateSavedPostsList : async (v) => await dispatch({
            type : "UPDATE_SAVED_POSTS_LIST",
            payload : v
        }),
        updateShowLoginModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_LOGIN_MODAL",
            payload : v
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMobileFavoriteArticle);
