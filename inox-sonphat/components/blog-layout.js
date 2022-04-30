import { isDiff } from '@js_dir/utils/arrayUtils';
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'preact/compat'
import { connect } from 'react-redux';
import Breadcrumbs from '@templates/breadcrumbs'
import { addBreadcrumbsContext } from '@js_dir/utils/addBreadcrumbsContextUtils';
import { injectIntl } from 'react-intl';
import TemplateBlogItem from './templates/template-blog-item';
import TemplatePaginationBar from './templates/blog-pagination/template-pagination-bar';
import { DEFAULT_SHOW_PRODUCTS } from '@constants/constants';
import SeoHelmet from './seo-helmet';
import { getBannerPage } from '@js_dir/utils/pagesUtils';
function BlogLayout({ pageContext, siteOptions, UpdateSiteOptions, intl }) {
    const router = useRouter();
    const {messages} = intl;
    const [paged, setPaged] = useState(1);
    const [filteredResults, setFilteredResults] = useState(null);
    const [total, setTotal] = useState(null);
    const {siteOptions : mySiteOptions, breadcrumbs, blogsPageData} = pageContext;
    const {blogsData, articlesList} = blogsPageData;
    const {title, seo, featuredImage} = blogsData;
    const breadcrumbsData = addBreadcrumbsContext(breadcrumbs, router.locale, messages);  
    const bg_banner = getBannerPage(featuredImage, mySiteOptions);
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
    }, [,router.locale,router.query.slug]);
    useEffect(() => {
        if ( articlesList ) {
            setFilteredResults(articlesList.map((blog, i) => <TemplateBlogItem key = {i}
                                                                                className="col-lg-4 col-md-6 col-sm-6"
                                                                                data = {blog} />));
            setTotal(articlesList.length);
        }
    }, [pageContext]);
    return (
        <>
            <SeoHelmet data = {seo} />
            <main className="">
                <div className="banner text-center">
                    <a href="#" className="link-ef"><img src={bg_banner}  alt="" /></a>
                </div>
                <section className="pb-4 contact">
                    <div className="container">
                        <Breadcrumbs data = {breadcrumbsData} />
                        <div className="blog-wrap">
                            <h1 className="s30 p404-tit">{title}</h1>
                            <div className="blogs-page mtop40">
                                <div className="row hpro-row">
                                    {filteredResults}
                                </div>
                            </div>
                            <TemplatePaginationBar data = {{
                                paged, numPerPage : DEFAULT_SHOW_PRODUCTS, total, setPaged
                            }} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
function mapStateToProps(state) {   
    return {
        siteOptions: state.globalReducer.siteOptions,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BlogLayout));