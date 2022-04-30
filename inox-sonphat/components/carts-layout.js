import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { isDiff } from '@js_dir/utils/arrayUtils';
import Breadcrumbs from './templates/breadcrumbs';
import { addBreadcrumbsContext } from '@js_dir/utils/addBreadcrumbsContextUtils';
import TableCartsDesktop from './carts-layout/table-carts-desktop';
import TableCartsMobile from './carts-layout/table-carts-mobile';
import CartsFooter from './carts-layout/carts-footer';
import SeoHelmet from './seo-helmet';
function CartsLayout({pageContext, cartsList, UpdateCartsList, siteOptions, UpdateSiteOptions, intl}) {
    const router = useRouter();
    const {messages} = intl;
    const {siteOptions : mySiteOptions, cartsPageData, breadcrumbs} = pageContext;    
    const {seo} = cartsPageData;
    const breadcrumbsData = addBreadcrumbsContext(breadcrumbs, router.locale, messages);
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
    }, [, router.locale, router.query.slug]);
    return (
        <>
            <SeoHelmet data = {seo} />
            <main>
                <section className="carts-page">
                    <div className="container">
                        <Breadcrumbs data = {breadcrumbsData}
                                    className = "__carts-bread" />
                        <div className="element-box">
                            <div className="carts-table-resp">
                                <TableCartsDesktop data = {cartsList}
                                                messages = {messages}
                                                props = {{UpdateCartsList}}
                                                locale = {router.locale} />
                                <TableCartsMobile data = {cartsList}
                                                messages = {messages}
                                                locale = {router.locale}
                                                props = {{UpdateCartsList}} />
                            </div>
                            {cartsList.length > 0 ? (
                                <CartsFooter data = {cartsList}
                                            messages = {messages}
                                            locale = {router.locale}  />
                            ) : null}
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
        cartsList: state.globalReducer.cartsList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        }),
        UpdateCartsList : async (v) => await dispatch({
            type : "UPDATE_CARTS_LIST",
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(CartsLayout));
