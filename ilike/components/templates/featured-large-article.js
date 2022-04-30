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
function FeaturedLargeArticle({ loading = true, 
                                data = null, 
                                index = 0,
                                thumbnailpos = 'top',
                                thumbnail = 'large',
                                fluidrow = false,
                                lazy = true,
                                updateShowLoginModal,
                                savedPostsList,
                                updateSavedPostsList }) { 
    const [showLoader, setShowLoader] = useState(false);
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
    if ( loading ) {
        return (
            <FeaturedLargeArticleLoading thumbnailpos = {thumbnailpos} 
                                        thumbnail = {thumbnail}
                                        fluidrow = {fluidrow} />
        )
    }
    if ( ! article ) {
        return (
            <>
            </>
        )
    }
    const {title, slug, comment_count, introtext, date_format} = getArticleData(article);
    return (
        <div className="news__global">
            <Link href={getArticleFullLink(article)}>
                <a className="frame news__avatar" 
                    title={title}>
                    <img src={lazy ? BLANK_IMAGE : imageUrl} data-src={lazy ? (imageUrl || DEFAULT_THUMBNAIL) : ''} alt={title} />
                </a>
            </Link>
            <div className="news__content">
                <h3 className="news__title">
                    <Link href={getArticleFullLink(article)}>
                        <a title={title}>
                            {title}
                        </a>
                    </Link>
                </h3>
                {introtext ? (
                    <div className="news__desc">
                        {introtext}
                    </div>
                ) : null}
                <div className="news__control">
                    {date_format ? (
                        <time>{date_format}</time>
                    ) : null}
                    {comment_count > 0 ? (
                            <span> {comment_count} Bình luận </span>
                    ) : null}
                    <a href="#" 
                        className={`news__save `.concat(isPostSavedInLists(savedPostsListData, article) ? ' __saved ' : '')
                                                .concat(showLoader ? ' disabled ' : '')}
                                                onClick={e=> onClick_savePost(e, article, { updateSavedPostsList, updateShowLoginModal, setShowLoader })}>
                        <i className="fa fa-bookmark-o fa__active" aria-hidden="true"></i>
                        <i className="fa fa-bookmark fa__hover" aria-hidden="true"></i>
                        {showLoader ? (
                            <BeatLoader size={5} css={override} />
                        ): null}
                    </a>
                </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedLargeArticle);