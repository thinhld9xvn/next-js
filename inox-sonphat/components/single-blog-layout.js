import { addBreadcrumbsContext } from '@js_dir/utils/addBreadcrumbsContextUtils';
import { isDiff } from '@js_dir/utils/arrayUtils';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'preact/compat'
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import SeoHelmet from './seo-helmet';
import Breadcrumbs from './templates/breadcrumbs';
import TemplateBlogItem from './templates/template-blog-item';
import {isEmptyObj} from '@js_utils/arrayUtils'
function SingleBlogLayout({ pageContext, siteOptions, UpdateSiteOptions, activePolyLangUrl, updateActivePolyLangUrl, intl }) {    
    const router = useRouter();
    const {messages} = intl;
    const [relatedListData, setRelatedListData] = useState(null);
    useEffect(() => {
        if ( relatedLists ) {
            setRelatedListData(relatedLists.map((blog, i) => <TemplateBlogItem key = {i}
                                                                        className="col-lg-4 col-md-6 col-sm-6"
                                                                        data = {blog} />));
        }
    }, [pageContext]);
    useEffect(() => {
        updateActivePolyLangUrl(null);
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
        if ( polylang_post && 
                isDiff(polylang_post, url) && 
                    isDiff(polylang_post, activePolyLangUrl) ) { 
            updateActivePolyLangUrl(polylang_post);
        }
    }, [,router.locale,router.query.slug]);
    const {siteOptions : mySiteOptions, breadcrumbs, articleData, relatedLists, seo} = pageContext;
    const {title, url, contents, polylang_post, banner_image} = articleData;
    const breadcrumbsData = addBreadcrumbsContext(breadcrumbs, router.locale, messages);
    const yoatseo = getSeoExtrasPage(seo);    
    const bg_banner = banner_image || mySiteOptions.ctInfoList.default_banner;
    return (
        <>
            <SeoHelmet data = {yoatseo} />
            <main className="">
                <div className="banner text-center">
                    <a href="#" className="link-ef"><img src={bg_banner} alt="" /></a>
                </div>
                <section className="pb-5 contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <Breadcrumbs data = {breadcrumbsData} />
                                <div className="pb-5 blog-wrap text-justify">
                                    <h1 className="s30 bdetail-tit"
                                        dangerouslySetInnerHTML={{
                                            __html : title
                                        }}>                                    
                                    </h1>
                                    <div dangerouslySetInnerHTML={{
                                        __html : contents
                                    }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bdetail-re">
                            <h2 className="s24 bold t3 text-center text-uppercase tit hpro-tit">
                                {messages['articles_related_label']}
                            </h2>  
                            <div className="blog-slider">
                                <div className="row">
                                    {relatedListData}
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
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SingleBlogLayout));
