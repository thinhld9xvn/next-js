import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { setupWow } from '@js_dir/utils/setupWowUtils';
import { setupAnimationsUtils } from '@js_dir/utils/animations/setupAnimationsUtils';
import FooterPage from './templates/footer-page';
import BlogSection from './blog/blog-section';
import SeoHelmet from './seo-helmet';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
var isRunEffect = false;
function BlogLayout({ pageContext, updateSiteOptions }) {
    const router = useRouter();
    const {options, data} = pageContext;
    const {getFooterPageData, pages} = data;
    const seo = getSeoExtrasPage(pages);
    useEffect(() => {
        setTimeout(function() {
            setupWow();
        }, 200);
    }, []);

    useEffect(() => {
        updateSiteOptions({...options});        
    }, [router.locale]);

    useEffect(() => {
        if ( !isRunEffect ) {
            isRunEffect = true;
            setupAnimationsUtils();
            setTimeout(function() {
                isRunEffect = false;
            }, 500);
        }
    });
    return (
        <>
            <SeoHelmet data = {seo} />
            <BlogSection data = {data} />        
            <FooterPage data = {getFooterPageData} />
        </>
    )
}

function mapStateToProps(state) {   

    return {}

}

function mapDispatchToProps(dispatch) {

    return {
        updateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BlogLayout);