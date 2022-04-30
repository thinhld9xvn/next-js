import { addBreadcrumbsContext } from '@js_dir/utils/addBreadcrumbsContextUtils';
import { isDiff } from '@js_dir/utils/arrayUtils';
import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import Breadcrumbs from './templates/breadcrumbs';
import TemplateProductItem from './templates/template-product-item';
import { injectIntl } from 'react-intl';
import TemplatePaginationBar from './templates/blog-pagination/template-pagination-bar';
import Filter from './category-products-layout/filter';
import { getProducts, sort } from '@js_dir/utils/productUtils';
import { DEFAULT_SHOW_PRODUCTS } from '@constants/constants';
import SeoHelmet from './seo-helmet';
import { getBannerPage } from '@js_dir/utils/pagesUtils';
const numPerPage = DEFAULT_SHOW_PRODUCTS;
function SearchLayout({ pageContext, siteOptions, UpdateSiteOptions, intl }) {
    const router = useRouter();
    const {messages} = intl;
    const {siteOptions : mySiteOptions, searchPageData, productsList, breadcrumbs} = pageContext;
    const {title, content, seo : yoastseo, featuredImage} = searchPageData;
    const [productsListData, setProductsListData] = useState(null);
    const [paged, setPaged] = useState(1);
    const [total, setTotal] = useState(null);
    const [filterValue, setFilterValue] = useState('default');
    const breadcrumbsData = addBreadcrumbsContext(breadcrumbs, router.locale, messages);
    const bg_banner = getBannerPage(featuredImage, mySiteOptions);
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
        setPaged(1);
    }, [, router.locale, router.query.slug]);
    useEffect(() => {
        if ( siteOptions ) {
            setProductsListData(getProducts(productsList, paged, DEFAULT_SHOW_PRODUCTS).map(product => <TemplateProductItem key={product.id} data = {product} />));
            setTotal(productsList.length);
        }
    }, [siteOptions, paged]);
    useEffect(() => {
        const sortedProducts = sort(productsList, filterValue);
        const filteredList = getProducts(sortedProducts, paged, DEFAULT_SHOW_PRODUCTS);
        setProductsListData(filteredList.map(product => <TemplateProductItem key={product.id} data = {product} />));
        setTotal(productsList.length);
    }, [filterValue]);
    return (
        <>
            <SeoHelmet data = {yoastseo} />
            <main className="">
                <div className="banner text-center">
                    <a href="#" title="" className="link-ef"><img src={bg_banner} title="" alt="" /></a>
                </div>
                <section className="pdetail">
                    <div className="container">
                        <ul className="list-unstyled s14 bread">
                            <Breadcrumbs data = {breadcrumbsData} />
                        </ul>
                        <h1 className="s30 p404-tit">{title}</h1>
                        <div className="pdetail-sum"
                            dangerouslySetInnerHTML={{
                                __html : content
                            }}>                        
                        </div>
                    </div>
                    <div className="b2">
                        <div className="container">
                            <Filter data = {{filterValue, setFilterValue}}
                                    messages = {messages} />
                            <div className="row hpro-row">
                                {productsListData}
                            </div>
                            <TemplatePaginationBar data = {{
                                paged,
                                numPerPage,
                                total,
                                setPaged
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
        activePolyLangUrl: state.globalReducer.activePolyLangUrl
    }
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        }),
        updateActivePolyLangUrl : async (v) => await dispatch({
            type : "UPDATE_ACTIVE_POLYLANG_URL",           
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SearchLayout));
