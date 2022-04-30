import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link'
import { getArticleData, getArticleFullLink } from '@js_dir/utils/articleUtils';
import { BLANK_IMAGE, DEFAULT_THUMBNAIL } from '@constants/constants';
import { cloneArray, isDiff } from '@js_dir/utils/arrayUtils';
import { checkImage, getImageUrlFromAmazonS3 } from '@js_dir/utils/imageUtils';
import { connect } from 'react-redux';
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function FeaturedImagazineMobileArticle({single = null, 
                                        lazy = true,
                                        savedPostsList }) { 
    const [savedPostsListData, setSavedPostsListData] = useState(savedPostsList);
    const article = single; 
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
    const {title} = getArticleData(article);
    const PostThumbnail = ({className = ''}) => (<div className={"mb-post-thumbnail thumbnail ".concat(className)}>
                                                    <Link href={article.link || getArticleFullLink(article)}>
                                                        <img className={lazy ? "loading-img" : ''} src={lazy ? BLANK_IMAGE : imageUrl} data-src={lazy ? (imageUrl || DEFAULT_THUMBNAIL) : ''} alt="" />
                                                    </Link>
                                                </div>)
    return (
        <div className="mb-judge-post mb-judge-normal-post mb-judge-ima-post flex">
            <PostThumbnail />
            <h3 className="mb-element-title mb-element-harquant-title mb-judge-normal-title mb-judge-ima-title mtop10">
                <Link href={article.link || getArticleFullLink(article)}>
                   {title}
                </Link>
            </h3>
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
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedImagazineMobileArticle);