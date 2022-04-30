import { isDiff } from '@js_dir/utils/arrayUtils';
import { getFeaturedImage } from '@js_dir/utils/articleUtils';
import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux'
import TemplatePageBanner from './templates/template-page-banner';
function AboutLayout({ pageContext, siteOptions, UpdateSiteOptions }) {
    const {headSchema, siteOptions : mySiteOptions, pageData} = pageContext;
    const {title, content, featuredImage, defaultPage} = pageData;
    const bannerImage = getFeaturedImage(featuredImage, mySiteOptions);
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
            <TemplatePageBanner data = {{bannerImage, title }} />
            <main>
                <section className="intro">
                    {!defaultPage ? (
                        <div dangerouslySetInnerHTML={{
                            __html : content
                        }}></div>
                    ) : <div className="intro-top">
                            <div className="container">
                                <div dangerouslySetInnerHTML={{
                                    __html : content
                                }}></div>
                            </div>
                        </div>}
                </section>
            </main>
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
export default connect(mapStateToProps, mapDispatchToProps)(AboutLayout);

