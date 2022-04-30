import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils';
import TemplatePageBanner from './templates/template-page-banner';
import { getFeaturedImage } from '@js_dir/utils/articleUtils';
import { onSubmit_submitCf7 } from '@js_dir/utils/contactformUtils';
import Overlay from './templates/overlay';
function ContactUsLayout({ pageContext, siteOptions, UpdateSiteOptions }) {
    const {headSchema, siteOptions : mySiteOptions, pageData} = pageContext;
    const {title, featuredImage, content} = pageData;
    const {siteFooter} = mySiteOptions;
    const {contact_form} = siteFooter;
    const bannerImage = getFeaturedImage(featuredImage, mySiteOptions);
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            ``
            UpdateSiteOptions({...mySiteOptions});
        }
        document.querySelector('.wpcf7-submit')
                .addEventListener('click', e => onSubmit_submitCf7(e, process.env.WPCF7_ID));
    }, [,pageContext]);    
    return (
        <>
            <head dangerouslySetInnerHTML={{
                __html : headSchema
            }}></head>
            <TemplatePageBanner data = {{bannerImage, title }} />
            <main>
                <section className="contact-info">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{
                            __html : content
                        }}></div>
                    </div>
                </section>
                <section className="contact-form">
                    <div className="container">
                        <div className="contact-form-inner"
                             dangerouslySetInnerHTML={{
                                 __html : contact_form
                             }}>
                        </div>
                    </div>
                </section>
            </main>
            <Overlay />
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactUsLayout);
