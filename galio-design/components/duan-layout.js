import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import FooterPage from '@templates/footer-page';
import { setupAnimationsUtils } from '@js_dir/utils/animations/setupAnimationsUtils';
import DuAnSection from './duan/duan-section';
import SeoHelmet from './seo-helmet';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
var isRunEffect = false;
function DuAnLayout({pageContext,
                        updateSiteOptions}) {
    const router = useRouter();
    const {options, data} = pageContext;
    const {getFooterPageData, getTaxonomiesList, pages} = data;
    const seo = getSeoExtrasPage(pages);
    useEffect(() => {
        updateSiteOptions({...options});
        if ( router.query.slug ) {
            const slug = router.query.slug;
            const term = getTaxonomiesList.find(e => e.url.split('/').pop() === slug);  
            window.activePolyLangUrl = term.polylang_term;
        }
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
                <DuAnSection data = {data} />
                <FooterPage data = {getFooterPageData} />
            </main>
        </>
    )
}
function mapStateToProps(state) {   
    return { 
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DuAnLayout);
