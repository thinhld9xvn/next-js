import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { setupAnimationsUtils } from '@js_dir/utils/animations/setupAnimationsUtils';
import Banner from './single-duan/banner';
import ProjectDetails from './single-duan/project-details';
import SeoHelmet from './seo-helmet';
var isRunEffect = false;
function SingleDuAnLayout({ pageContext, updateSiteOptions }) {
    const router = useRouter();
    const {options, data, navigation} = pageContext;
    const {seoProjectData, polylang_post} = data;
    const {seo} = seoProjectData;
    useEffect(() => {
        window.activePolyLangUrl = polylang_post;        
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
                <Banner data = {data} />
                <ProjectDetails data = {data}
                                navigation = {navigation} />
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
export default connect(mapStateToProps, mapDispatchToProps)(SingleDuAnLayout);
