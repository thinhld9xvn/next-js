import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { useRouter } from 'next/router';
import Breadcrumbs from './templates/breadcrumbs';
import { addBreadcrumbsContext } from '@js_dir/utils/addBreadcrumbsContextUtils';
import { isDiff } from '@js_dir/utils/arrayUtils';
import SeoHelmet from './seo-helmet';
import { getBannerPage } from '@js_dir/utils/pagesUtils';
function ContactLayout({pageContext, siteOptions, UpdateSiteOptions, intl}) {
    const router = useRouter();
    const {messages} = intl;
    const {siteOptions : mySiteOptions, contactPageData, breadcrumbs} = pageContext;    
    const {content, seo, featuredImage} = contactPageData;
    const breadcrumbsData = addBreadcrumbsContext(breadcrumbs, router.locale, messages);
    const bg_banner = getBannerPage(featuredImage, mySiteOptions);
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
    }, [, router.locale, router.query.slug]);
    return (
        <>
            <SeoHelmet data = {seo} />
            <main className="">
                <div className="banner text-center">
                    <a href="#" title="" className="link-ef"><img src={bg_banner} title="" alt="" /></a>
                </div>
                <section className="pb-4 contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <Breadcrumbs data = {breadcrumbsData} />
                                <div className="text-justify" dangerouslySetInnerHTML={{
                                    __html : content
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
        siteOptions: state.globalReducer.siteOptions
    }
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ContactLayout));
