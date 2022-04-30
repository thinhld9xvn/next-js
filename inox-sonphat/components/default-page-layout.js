import { isDiff } from '@js_dir/utils/arrayUtils';
import { useRouter } from 'next/router';
import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import Breadcrumbs from '@templates/breadcrumbs'
import { addBreadcrumbsContext } from '@js_dir/utils/addBreadcrumbsContextUtils';
import { injectIntl } from 'react-intl';
import SeoHelmet from './seo-helmet';
import { getBannerPage } from '@js_dir/utils/pagesUtils';
import {isEmptyObj} from '@js_utils/arrayUtils'
function DefaultPageLayout({ pageContext, siteOptions, UpdateSiteOptions, updateActivePolyLangUrl, intl }) {
    const router = useRouter();
    const {messages} = intl;
    useEffect(() => {
        updateActivePolyLangUrl(null);
    }, [pageContext]);
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {
            UpdateSiteOptions({...mySiteOptions});
        }
    }, [,router.locale,router.query.slug]);
    const {siteOptions : mySiteOptions, breadcrumbs, defPageData} = pageContext;
    const {content : html, seo : yoastseo, featuredImage} = defPageData.pages.nodes[0];
    const breadcrumbsData = addBreadcrumbsContext(breadcrumbs,router.locale, messages);    
    const bg_banner = getBannerPage(featuredImage, mySiteOptions);
    return (
        <>
            <SeoHelmet data = {yoastseo} />
            <main className="">
                <div className="banner text-center">
                    <a href="#" title="" className="link-ef">
                        <img src={bg_banner} title="" alt="" />
                    </a>
                </div>
                <section className="pb-5 aboutpage">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <Breadcrumbs data = {breadcrumbsData} />
                                <div className="main-page"
                                    dangerouslySetInnerHTML={{
                                        __html : html
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
function mapStateToProps(state) {   
    return { 
        siteOptions: state.globalReducer.siteOptions,
        activePolyLangUrl: state.globalReducer.activePolyLangUrl
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
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(DefaultPageLayout));