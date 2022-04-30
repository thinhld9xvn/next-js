import React, {useEffect} from 'preact/compat'

import { connect } from 'react-redux';

import { isUndefined } from '@js_dir/utils/arrayUtils'

import Header from '@components/header'
import Footer from '@components/footer'
import StoriesHeading from './stories/stories-heading'
import StoriesMain from './stories/stories-main'
import StoriesPagination from './stories/stories-pagination'

import SeoHelmet from "@components/seo-helmet"

import {setupWow} from '@js_utils/setupWowUtils';

function StoriesLayout({ pageContext,
                            updateResultsFiltered,
                            updatedPaged }) {

    const {seo, heading, description, label, ctinfo, header, extras} = pageContext.data;
    const {stories} = extras;

    const updateReduxCallback = async () => {

        await updateResultsFiltered(JSON.parse(JSON.stringify(stories)))
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

            <main id="main" className="storiesMain">

                <div className="data-scroll">

                    <StoriesHeading data = {{ heading, description, label }} />

                    <StoriesMain />
                    <StoriesPagination />

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


export default connect(mapStateToProps, mapDispatchToProps)(StoriesLayout);

