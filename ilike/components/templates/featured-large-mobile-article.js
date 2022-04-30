import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link'
import { getArticleData, getArticleFullLink } from '@js_dir/utils/articleUtils';
import { BLANK_IMAGE, DEFAULT_THUMBNAIL } from '@constants/constants';
import FeaturedLargeArticleLoading from './featured-large-article-loading';
import { cloneArray, isDiff } from '@js_dir/utils/arrayUtils';
import { onClick_savePost } from '@postpage/events/onClick_savePost'
import { isPostSavedInLists } from '@js_dir/utils/articleUtils';
import { checkImage, getImageUrlFromAmazonS3 } from '@js_dir/utils/imageUtils';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function FeaturedLargeMobileArticle({data = null, 
                                        index = 0,
                                        lazy = true,
                                        thumbnailpos = 'bottom',
                                        savedPostsList }) { 
    const [savedPostsListData, setSavedPostsListData] = useState(savedPostsList);
    const article = data && data[index] ? data[index] : null; 
    const [imageUrl, setImageUrl] = useState(article ? getImageUrlFromAmazonS3(article.image) : DEFAULT_THUMBNAIL);     
    useEffect(() => {
        if ( article ) {
            let {image} = article;
            if ( image ) {
                image = getImageUrlFromAmazonS3(image);
            }
            if ( !lazy ) {
                checkImage(image).then(results => {
                    results.status === 'ok' ? isDiff(imageUrl, image) && setImageUrl(image) : 
                                            isDiff(imageUrl, DEFAULT_THUMBNAIL) && setImageUrl(DEFAULT_THUMBNAIL);
                });       
            }     
            else {
                isDiff(imageUrl, image) && setImageUrl(image);
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
            <>
            </>
        )
    }
    const {title, slug, comment_count, introtext, date_format} = getArticleData(article);
    const PostThumbnail = ({className = ''}) => (<div className={"mb-post-thumbnail mb-judge-post-thumbnail ".concat(className)}>
                                                    <Link href={article.link || getArticleFullLink(article)}>
                                                        <img className={lazy ? "loading-img" : ''} src={lazy ? BLANK_IMAGE : imageUrl} data-src={lazy ? (imageUrl || DEFAULT_THUMBNAIL) : ''} alt="" />
                                                    </Link>
                                                </div>)
    return (
        <div className="mb-judge-post mb-judge-large-post">
            {thumbnailpos === 'top' ? (
                <PostThumbnail />
            ) : null} 
            <h3 className="mb-post-title mb-judge-post-title mtop10">
                <Link href={article.link || getArticleFullLink(article)}>
                   {title}
                </Link>
            </h3>
            <div className="mb-post-content mb-judge-post-content mtop10">
                {introtext}
            </div>
            {thumbnailpos === 'bottom' ? (
                <PostThumbnail className='mtop10' />
            ) : null} 
        </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedLargeMobileArticle);