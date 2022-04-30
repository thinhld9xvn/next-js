import React, {useState, useEffect} from 'preact/compat'
import Header from '@components/header'
import Footer from '@components/footer'

import SingleBreadcrumbs from '@templates/single-breadcrumbs'
import SingleMainStory from './single/single-main-story'

import SeoHelmet from "@components/seo-helmet"

import { connect } from 'react-redux';

function SingleStoryLayout({ pageContext, updateCurrentArticle, updateRelatedArticle }) {

    const {seo, ctinfo, header, extras} = pageContext.data;
    const {story, stories} = extras;

    const currentArticle = story,
          currentArticleIndex = stories.findIndex(st => st.id === story.id),
          nextRelatedArticle = currentArticleIndex !== -1 && currentArticleIndex + 1 < stories.length ? stories[currentArticleIndex + 1] : null;

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

            <main id="main" className="storiesMain">

                <div className="data-scroll">
                    
                    <SingleBreadcrumbs />
                    
                    <SingleMainStory />                    

                    <Footer data ={ctinfo} />                    

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


export default connect(mapStateToProps, mapDispatchToProps)(SingleStoryLayout);