import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils';
import TemplatePageBanner from './templates/template-page-banner';
import { getFeaturedImage } from '@js_dir/utils/articleUtils';
import TemplateServiceItem from './templates/template-service-item';
function ProductsLayout({ pageContext, siteOptions, UpdateSiteOptions }) {
    const {headSchema, siteOptions : mySiteOptions, pageData, termsList} = pageContext;
    const {title, featuredImage} = pageData;
    const bannerImage = getFeaturedImage(featuredImage, mySiteOptions);
    const arrTermsList = termsList.map(item => <TemplateServiceItem key = {item.id} 
                                                                    data = {item} />);
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
                <section className="products">
                    <div className="service-media">
                        <div className="container">
                            <div className="service-media-inner">
                                {arrTermsList}
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductsLayout);
