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
const numPerPage = DEFAULT_SHOW_PRODUCTS;
function CategoryProductsLayout({ pageContext, siteOptions, UpdateSiteOptions, activePolyLangUrl, updateActivePolyLangUrl, intl }) {
    const router = useRouter();
    const {messages} = intl;
    const [productsListData, setProductsListData] = useState(null);
    const [paged, setPaged] = useState(1);
    const [total, setTotal] = useState(null);
    const [filterValue, setFilterValue] = useState('default');    
    useEffect(() => {
        updateActivePolyLangUrl(null);
        if ( isDiff(mySiteOptions, siteOptions) ) {
            UpdateSiteOptions({...mySiteOptions});
        }
        if ( polylang_term && 
                isDiff(polylang_term, url) && 
                    isDiff(polylang_term, activePolyLangUrl) ) {
            updateActivePolyLangUrl(polylang_term);
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
    const {siteOptions : mySiteOptions, termProductPageData, breadcrumbs} = pageContext;
    const {productsList, termsList} = termProductPageData;
    const {title, url, description, polylang_term, seo, thumbnail} = termsList[0];
    const breadcrumbsData = addBreadcrumbsContext(breadcrumbs, router.locale, messages);
    const bg_banner = thumbnail || mySiteOptions.ctInfoList.default_banner;
    return (
        <>
            <SeoHelmet data = {seo} />
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
                        <div className="py-3 pdetail-like">
                            <img src="/static/images/like.png" title="" alt="" />
                        </div>
                        <div className="pdetail-sum text-justify"
                            dangerouslySetInnerHTML={{
                                __html : description
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
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(CategoryProductsLayout));
