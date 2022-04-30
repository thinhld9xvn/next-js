import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { setupWow } from '@js_dir/utils/setupWowUtils';
import { setupAnimationsUtils } from '@js_dir/utils/animations/setupAnimationsUtils';
import BlogDetails from './single-blog/blog-details';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
import SeoHelmet from './seo-helmet';
var isRunEffect = false;
function SingleBlogLayout({ pageContext, updateSiteOptions }) {
    const router = useRouter();
    const {options, data} = pageContext;
    const {posts, polylang_post} = data;
    const seo = getSeoExtrasPage(posts);

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
                <BlogDetails data = {data} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlogLayout);
