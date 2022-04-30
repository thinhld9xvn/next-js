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
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function FeaturedMobileArticle({ data = null, 
                                index = 1,
                                single = null, 
                                showexcerpt = true, 
                                showthumbnail = false, 
                                thumbnailpos = "right",
                                showauthormeta = false,
                                lazy = true,
                                savedPostsList,
                                callback = null }) {        
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
    const PostTitle = <h3 className="mb-element-title mb-element-harquant-title mb-judge-normal-title">
                        <Link href={article.link || getArticleFullLink(article)}>
                            <a onClick={callback}>
                                {title}
                            </a>
                        </Link>
                    </h3>    
    const PostContent = <div className="mb-post-content mb-judge-post-content mb-judge-post-excerpt mtop10"
                              dangerouslySetInnerHTML={{
                                __html : introtext
                              }}>
                        </div>     
    const PostThumbnail = <div className="mb-post-thumbnail thumbnail">
                                <Link href={article.link || getArticleFullLink(article)}>
                                    <a onClick={callback}>
                                        <img className={lazy ? "loading-img" : ''} src={lazy ? BLANK_IMAGE : imageUrl} data-src={lazy ? (imageUrl || DEFAULT_THUMBNAIL) : ''} alt="" />
                                    </a>
                                </Link>
                            </div>
    const PostAuthorMeta = <div className="mb-element-metadata mb-element-harquant-metadata flex flex-align-center mtop10">
                                {author ? (
                                    <>
                                        <img className="mb-default-avatar" src={USER_ICON} alt="" />
                                        <strong className="mb-author-name padleft10">{author}</strong>
                                    </>
                                ) : null}
                                <strong className={"mb-post-category mb-dot-before flex flex-align-center ".concat(author ? 'padleft10' : '')}>
                                    {date_format}
                                </strong>
                            </div>
    return (
        <div className="mb-judge-post mb-judge-normal-post flex">
            {showthumbnail ? (
                <>
                    <div className={"mb-judge-post-leftswang ".concat(thumbnailpos === 'right' ? 'order1' : 'order2')}>
                        {PostTitle}
                        {showauthormeta ? (
                            <>
                                {PostAuthorMeta}
                            </>
                        ) : null}
                        {showexcerpt ? (
                            <>
                                {PostContent}
                            </>
                        ) : null}
                    </div>
                    <div className={"mb-judge-post-rightswang ".concat(thumbnailpos === 'right' ? 'order2' : 'order1')}>
                       {PostThumbnail}
                    </div>
                </>
            ) : (
                <div className="mb-judge-post-wrapper">
                    {PostTitle}
                    {showexcerpt ? (
                        <>
                            {PostContent}
                        </>
                    ) : null}
                </div>
            )}
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
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMobileArticle);
