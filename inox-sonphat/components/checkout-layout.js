import React, {useEffect, useState} from 'preact/compat'
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { isDiff } from '@js_dir/utils/arrayUtils';
import Breadcrumbs from './templates/breadcrumbs';
import { addBreadcrumbsContext } from '@js_dir/utils/addBreadcrumbsContextUtils';
import Form from './checkout-layout/form';
import CheckoutList from './checkout-layout/checkout-list';
import CheckoutFooter from './checkout-layout/checkout-footer';
import SeoHelmet from './seo-helmet';
function CheckoutLayout({pageContext, cartsList, UpdateCartsList, siteOptions, UpdateSiteOptions, intl}) {
    const router = useRouter();
    const {messages} = intl;
    const {siteOptions : mySiteOptions, wooBacsPayment, checkoutPageData, breadcrumbs} = pageContext;  
    const {seo} = checkoutPageData;  
    const [loading, setLoading] = useState(false);
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
                <section className="carts-page checkout-page">
                    <div className="container">
                        <Breadcrumbs data = {breadcrumbsData}
                                    className = "__carts-bread" />
                        <div className="element-box">
                            <form id="frmCheckout" className="frmCheckout form-layout" method="post">
                                <div className="form-main">
                                    {cartsList.length ? (
                                        <>
                                            <div className="grid grid-60pspan grid1300-50pspan grid992-100pspan">
                                                <Form  messages = {messages}
                                                        loading = {loading} />
                                                <CheckoutList data = {{cartsList}}
                                                            locale = {router.locale}
                                                            messages = {messages}
                                                            wooBacsPayment = {wooBacsPayment} />
                                            </div>
                                            <CheckoutFooter data = {{cartsList, UpdateCartsList}}
                                                            messages = {messages}
                                                            loading = {loading}
                                                            setLoading = {setLoading}
                                                            locale = {router.locale} />
                                        </>
                                    ) : <div className="empty-carts-table">{messages['no_checkout_label']}</div>}
                                </div>
                            </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(CheckoutLayout));
