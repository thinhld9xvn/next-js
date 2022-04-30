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
function FeaturedMobileTrendingArticle({data = null, 
                                        index = 1,
                                        single = null,
                                        lazy = true,
                                        savedPostsList }) {        
    const article = !single ? (data && data[index] ? data[index] : null) : single;
    //const [savedPostsListData, setSavedPostsListData] = useState(savedPostsList);
    //const [imageUrl, setImageUrl] = useState(article ? getImageUrlFromAmazonS3(article.image) : DEFAULT_THUMBNAIL); 
    /*useEffect(() => {
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
    }); */   
    /*useEffect(() => {
        if ( isDiff(savedPostsListData, savedPostsList) ) {
            setSavedPostsListData(cloneArray(savedPostsList));
        }
    }, [savedPostsList]);*/
    if ( ! article ) {
        return (
            <></>
        )
    }    
    const {title, author, date_format} = getArticleData(article);
    const category_name = getFirstCategoryNameFromPost(article);
    return (
        <div className="mb-element-harquant flex">
            <div className="mb-element-no mb-harquant-no">
                <strong>{(index + 1).toLocaleString('en-US', {
                                            minimumIntegerDigits: 2,
                                            useGrouping: false
                                        })}</strong>
            </div>
            <div className="mb-element-ctn mb-element-harquant-ctn padleft10">
                <div className="mb-element-metadata mb-element-harquant-metadata flex flex-align-center">
                    <img className="mb-default-avatar" src={USER_ICON} alt="" />
                    <strong className="mb-author-name padleft10">{author}</strong>
                    <strong className="mb-post-category mb-dot-before flex flex-align-center padleft10">
                        <Link href={article.link || getArticleFullLink(article)}>
                            {category_name}
                        </Link>
                    </strong>
                </div>
                <h3 className="mb-element-title mb-element-harquant-title mtop10">
                    <Link href={article.link || getArticleFullLink(article)}>
                        {title}
                    </Link>
                </h3>
                <div className="mb-element-footer-meta mb-element-harquant-footer-meta flex mtop10">
                    <span>{date_format}</span>
                    {/*<span className="mb-dot-before flex flex-align-center padleft10">5 phút</span>*/}
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
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMobileTrendingArticle);
