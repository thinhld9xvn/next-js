import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import HomeSlider from './home/home-slider';
import AboutSection from './home/about-section';
import WrapperImage from './home/wrapper-image';
import CareerSection from './home/career-section';
import LogoSection from './home/logo-section';
import { useRouter } from 'next/router';
import { setupAnimationsUtils } from '@js_dir/utils/animations/setupAnimationsUtils';
import SeoHelmet from './seo-helmet';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
var isRunEffect = false;
function HomeLayout({ pageContext, 
                        updateSiteOptions }) {
    const router = useRouter();
    const {options, data} = pageContext;
    const {getSliderItemsList, 
                getGTSectionInfo,
                    getLHTKSectionInfo,
                        getClientsLogoList,
                            getTaxonomiesList,
                                pages} = data;
    const seo = getSeoExtrasPage(pages);
    useEffect(() => {
        document.body.classList.add('bg-transparent');
        return () => {
            document.body.classList.remove('bg-transparent');
        }
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
            <main id="main">
                <HomeSlider data = {getSliderItemsList} />
                <AboutSection data = {getGTSectionInfo} />
                <WrapperImage data = {getTaxonomiesList} />
                {/*<CareerSection data = {getLHTKSectionInfo} />*/}
                <LogoSection data = {getClientsLogoList} />
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
