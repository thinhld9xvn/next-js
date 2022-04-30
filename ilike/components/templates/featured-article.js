import React, {useEffect, useState} from 'preact/compat'
import { getArticleData, getArticleFullLink } from '@js_dir/utils/articleUtils';
import Link from 'next/link'
import { BLANK_IMAGE, CATEGORY_LAYOUT, DEFAULT_THUMBNAIL } from '@constants/constants';
import FeaturedArticleLoading from './featured-article-loading';
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
function FeaturedArticle({ loading = true, 
                                data = null, 
                                index = 1, 
                                showexcerpt = true, 
                                showthumbnail = false, 
                                thumbnailpos = "right",
                                thumbnail = "large",
                                layout = "default",
                                showcomments = true,
                                showbookmark = true,
                                lazy = true,
                                updateShowLoginModal,
                                savedPostsList,
                                updateSavedPostsList }) {        
    const article = data && data[index] ? data[index] : null;
    const [savedPostsListData, setSavedPostsListData] = useState(savedPostsList);
    const [showLoader, setShowLoader] = useState(false);
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
    if ( loading ) {
        return (
            <FeaturedArticleLoading showthumbnail = {showthumbnail}
                                    thumbnailpos = {thumbnailpos}
                                    thumbnail = {thumbnail} />
        )
    }
    if ( ! article ) {
        return (
            <></>
        )
    }    
    const {title, slug, introtext, comment_count, date_format} = getArticleData(article);
    const PostTitle = <h3 className="news__title">
                            <Link href={isDiff(layout, CATEGORY_LAYOUT.magazine) ? getArticleFullLink(article) : 
                                                                                article.link || getArticleFullLink(article)}>
                                <a title={title}>
                                    {title}
                                </a>
                            </Link>
                        </h3>
    const PostExcerpt = <>
                            {showexcerpt ? (
                                <div className="news__desc">
                                    {introtext}
                                </div>
                            ) : null}
                        </>
    const PostControl = <>
                            <div className="news__control">
                                {date_format ? (
                                    <time>{date_format}</time>
                                ) : null}
                                {showcomments ? (
                                    <>
                                        {comment_count > 0 ? (
                                            <span> {comment_count} Bình luận </span>
                                        ) : null}
                                    </>
                                ) : null}
                                {showbookmark ? (
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
                                ) : null}
                            </div>
                        </>
    const PostThumbnail = <>
                            {showthumbnail ? (
                                <Link href={isDiff(layout, CATEGORY_LAYOUT.magazine) ? getArticleFullLink(article) : 
                                                                                        article.link || getArticleFullLink(article)}>
                                    <a className="frame news__avatar" 
                                        title={title}>
                                        <img className={lazy ? "loading-img" : ''} src={lazy ? BLANK_IMAGE : imageUrl} data-src={lazy ? (imageUrl || DEFAULT_THUMBNAIL) : ''} alt={title} />
                                    </a>
                                </Link>
                            ) : null}
                          </>
    const getTempDefaultItem = () => {
        return (
            <>
                <div className="news__content">
                    {PostTitle}
                    {PostExcerpt}
                    {PostControl}
                </div>
                {PostThumbnail}
            </>
        )
    }
    const getTempMovieItem = () => {
        return (
            <>
                <div className="news__content">
                    <div className="news__header">
                        {PostTitle}
                        {PostThumbnail}
                    </div>
                    {PostExcerpt}
                    {PostControl}
                </div>
            </>
        )
    }
    const temp = layout === 'movie' ? getTempMovieItem() : getTempDefaultItem();
    return (
        <div className="news__global">
            {temp}
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
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArticle);
