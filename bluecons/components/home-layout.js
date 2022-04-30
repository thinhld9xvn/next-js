import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import SliderWidget from './home/slider-widget';
import { isDiff } from '@js_dir/utils/arrayUtils';
import ServicesWidget from './home/services-widget';
import IntroWidget from './home/intro-widget';
import ProductsWidget from './home/products-widget';
import KnowledgeWidget from './home/knowledge-widget';
import ClientsWidget from './home/clients-widget';
function HomeLayout({ pageContext, siteOptions, UpdateSiteOptions }) {    
    const {headSchema, siteOptions : mySiteOptions, homePageData} = pageContext;
    const {SliderItemsList, SVSectionInfo, 
            GTSectionInfo, ProductSectionInfo, 
                KTSectionInfo, ClientsSectionInfo} = homePageData;
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
    }, [,pageContext]);
    return (
        <>
            <head dangerouslySetInnerHTML={{
                __html : headSchema
            }}></head>
            <SliderWidget data = {SliderItemsList} />
            <ServicesWidget data = {SVSectionInfo} />
            <IntroWidget data = {GTSectionInfo} />
            <ProductsWidget data = {ProductSectionInfo} />
            <KnowledgeWidget data = {KTSectionInfo} />
            <ClientsWidget data = {ClientsSectionInfo} />
        </>
    )
}
function mapStateToProps(state) {   
    return { 
        siteOptions : state.globalReducer.siteOptions
    }
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
