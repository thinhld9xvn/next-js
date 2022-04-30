import React, {useState, useEffect} from 'preact/compat'

import Header from '@components/header'
import SingleMainBlog from './single/single-main-blog'
import Footer from '@components/footer'

import { connect } from 'react-redux';

import SeoHelmet from "@components/seo-helmet"

function SingleBlogLayout({ pageContext, updateCurrentArticle, updateRelatedArticle }) {

    const {seo, ctinfo, header, extras} = pageContext.data;
    const {article, articlesList} = extras;

    const currentArticle = article,
          currentArticleIndex = articlesList.findIndex(post => post.id === article.id),
          nextRelatedArticle = currentArticleIndex !== -1 && currentArticleIndex + 1 < articlesList.length ? articlesList[currentArticleIndex + 1] : null;

    const updateReduxCallback = async () => {

        await updateCurrentArticle(JSON.parse(JSON.stringify(currentArticle)));
            
        await updateRelatedArticle(JSON.parse(JSON.stringify(nextRelatedArticle)));

    }

    updateReduxCallback(); 
   
    return (

        <>     

            {seo && (
                <SeoHelmet data = {seo} />
            )}

            <Header data = {header} />  

            <main id="main">

                <div className="data-scroll">

                     <SingleMainBlog />     

                    <Footer data = {ctinfo} />                    

                </div>

            </main>            
                
           
        </>

    )

}

function mapStateToProps(state) {   

    return {}
  
  }
  
  function mapDispatchToProps(dispatch) {
  
    return {
  
        updateCurrentArticle : async (v) => await dispatch({
            type : "UPDATE_CURRENT_ARTICLE",           
            payload : v
        }),

        updateRelatedArticle : async (v) => await dispatch({
            type : "UPDATE_RELATED_ARTICLE",           
            payload : v
        }),
  
      }
  
  }


export default connect(mapStateToProps, mapDispatchToProps)(SingleBlogLayout);