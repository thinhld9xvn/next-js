import React, {useEffect} from 'preact/compat'

import { connect } from 'react-redux';

import Header from '@components/header'
import Footer from '@components/footer'

import BlogBreadcrumbs from '@templates/blog-breadcrumbs'
import BlogMain from './blog/blog-main'
import BlogPagination from './blog/blog-pagination'

import {setupWow} from '@js_utils/setupWowUtils';

import SeoHelmet from "@components/seo-helmet"

function BlogLayout({ pageContext,
                        updateResultsFiltered,
                        updatedPaged }) {

    const {seo, ctinfo, header, extras} = pageContext.data;
    const {articles} = extras;

    const resultsFilteredData = articles;
    
    const updateReduxCallback = async () => {

        resultsFilteredData && 
            await updateResultsFiltered(JSON.parse(JSON.stringify(resultsFilteredData)));
            
        await updatedPaged(1);
        
    }

    updateReduxCallback(); 

    setTimeout( function(){ 
      
        setupWow();

    }, 1000);
   
    return (

        <>     

            {seo && (
                <SeoHelmet data = {seo} />
            )}

            <Header data = {header} />  

            <main id="main">

                <div className="data-scroll">

                    <BlogBreadcrumbs data = {pageContext.data} />

                    <BlogMain />

                    <BlogPagination />

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
        updateResultsFiltered : async (v) => await dispatch({
            type : "UPDATE_RESULTS_FILTERED",           
            payload : v
        }),
        updatedPaged : async (v) => await dispatch({

            type : "UPDATED_CURRENT_PAGED",
            payload : v

        })
    }
  
  }


export default connect(mapStateToProps, mapDispatchToProps)(BlogLayout);
