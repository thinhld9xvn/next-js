import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { setupWow } from '@js_dir/utils/setupWowUtils';
import { setupAnimationsUtils } from '@js_dir/utils/animations/setupAnimationsUtils';
import TuyenDungSection from './tuyendung/tuyendung-section';
import SeoHelmet from './seo-helmet';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
var isRunEffect = false;
function TuyenDungLayout({ pageContext, updateSiteOptions }) {
    const router = useRouter();
    const {options, data} = pageContext;
    const {pages} = data;  
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
                <TuyenDungSection data = {data} />            
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

export default connect(mapStateToProps, mapDispatchToProps)(TuyenDungLayout);
