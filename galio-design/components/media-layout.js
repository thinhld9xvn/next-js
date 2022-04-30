import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { useRouter } from 'next/router'
import { setupWow } from '@js_dir/utils/setupWowUtils';
import { setupAnimationsUtils } from '@js_dir/utils/animations/setupAnimationsUtils';
import FooterPage from './templates/footer-page';
import SectionMedia from './media/section-media';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
import SeoHelmet from './seo-helmet';
var isRunEffect = false;
function MediaLayout({ pageContext, updateSiteOptions }) {
    const router = useRouter();
    const {options, data} = pageContext;
    const {getMediaList, getTaxonomiesList, getFooterPageData, pages} = data;
    const mediaSectionData = {getTaxonomiesList, getMediaList};
    const seo = getSeoExtrasPage(pages);

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
            <main id="main">

                <SectionMedia data = {mediaSectionData} />
                <FooterPage data = {getFooterPageData} />

            </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(MediaLayout);