import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import Breadcrumbs from './templates/breadcrumbs';
import DetailsBanner from './single-products/details-banner';
import DetailsIntro from './single-products/details-intro';
import DetailsSlider from './single-products/details-slider';
import DetailsTab from './single-products/details-tab';
import { injectIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { isDiff } from '@js_dir/utils/arrayUtils';
import { addBreadcrumbsContext } from '@js_dir/utils/addBreadcrumbsContextUtils';
import Related from './single-products/related';
import SeoHelmet from './seo-helmet';
function SingleProductLayout({ pageContext, siteOptions, UpdateSiteOptions, 
                                activePolyLangUrl, updateActivePolyLangUrl, 
                                cartsList, UpdateCartsList,
                                intl }) {
    const router = useRouter();
    const {messages} = intl;       
    useEffect(() => {
        updateActivePolyLangUrl(null);
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
        if ( polylang_post && 
                isDiff(polylang_post.url, url) && 
                    isDiff(polylang_post.url, activePolyLangUrl) ) { 
            updateActivePolyLangUrl(polylang_post.url);
        }
    }, [, router.locale, router.query.slug]);
    const {siteOptions : mySiteOptions, productPageData, breadcrumbs} = pageContext;
    const {productData, relatedProductsList} = productPageData;
    const myProductData = productData[0];
    const {url, status, description, specifications, polylang_post, galleries, seo, banner_image} = myProductData;
    const detailsIntroData = {...myProductData, hotline: mySiteOptions.ctInfoList.hotline,status: messages[status]}; 
    const tabsIntroData = [
        {
            id : 'tab1',
            title : messages['product_details_label'],
            contents : description
        },
        {
            id : 'tab2',
            title : messages['spec_label'],
            contents: specifications
        }
    ];    
    const breadcrumbsData = addBreadcrumbsContext(breadcrumbs, router.locale, messages);
    const bg_banner = banner_image || mySiteOptions.ctInfoList.default_banner;
    return (
        <>
            <SeoHelmet data = {seo} />
            <main className="">
                <DetailsBanner data = {bg_banner} />
                <section className="pdetail">
                    <div className="container">
                        <Breadcrumbs data = {breadcrumbsData} />
                        <div className="pdetail">
                            <div className="row">
                                <div className="col-sm-6 col-pdetail-slider">
                                    <DetailsSlider data = {galleries} />
                                </div>
                                <div className="col-sm-6 col-pdetail-intro mtop20-xs">
                                    <DetailsIntro data = {detailsIntroData}
                                                props = {{cartsList, UpdateCartsList}}
                                                messages = {messages} />
                                </div>
                            </div>
                            <DetailsTab data = {tabsIntroData} />
                        </div>
                    </div>
                </section>
                <Related data = {relatedProductsList}
                        messages = {messages} />
            </main>
        </>
    )
}
function mapStateToProps(state) {   
    return { 
        siteOptions: state.globalReducer.siteOptions,
        activePolyLangUrl: state.globalReducer.activePolyLangUrl,
        cartsList: state.globalReducer.cartsList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        }),
        updateActivePolyLangUrl : async (v) => await dispatch({
            type : "UPDATE_ACTIVE_POLYLANG_URL",           
            payload : v
        }),
        UpdateCartsList : async (v) => await dispatch({
            type : "UPDATE_CARTS_LIST",
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SingleProductLayout));
