import React from 'preact/compat'
import Header from '@components/header'
import Footer from '@components/footer'

import { connect } from 'react-redux';

import SeoHelmet from "@components/seo-helmet"

import ContactBreadcrumbs from '@templates/contact-breadcrumbs';
import ContactPageMain from './contact/contact-page-main'

function PageContactUs({ pageContext, updateCurrentArticle }) {

    const { header, extras, ctinfo, seo } = pageContext.data;

    const updateReduxCallback = async () => {

        extras && 
            await updateCurrentArticle(JSON.parse(JSON.stringify(extras)));

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
                    
                    <ContactBreadcrumbs />    
                    <ContactPageMain data = {ctinfo} />

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
        })
  
      }
  
  }


export default connect(mapStateToProps, mapDispatchToProps)(PageContactUs);
