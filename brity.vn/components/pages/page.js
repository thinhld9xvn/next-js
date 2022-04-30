import React, {useState, useEffect} from 'preact/compat'
import Header from '@components/header'
import Footer from '@components/footer'

import SeoHelmet from "@components/seo-helmet"

import PageBreadcrumbs from '@templates/page-breadcrumbs'
import MainPage from './page/main-page'

import ClientsCarousel from '@templates/clients-carousel'

import { connect } from 'react-redux';

function Page({ pageContext, updateCurrentArticle }) {

    const {  header, clients, extras, ctinfo, seo } = pageContext.data;

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

            <main id="main" className="storiesMain">

                <div className="data-scroll">

                    <PageBreadcrumbs />
                    
                    <MainPage />

                    <ClientsCarousel data = {clients} />

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


export default connect(mapStateToProps, mapDispatchToProps)(Page);
