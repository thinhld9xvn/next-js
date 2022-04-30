import { calcTotalPrices } from '@js_dir/utils/shoppingCartsUtils'
import { onClick_createWoocommerce } from '@js_dir/utils/woocommerceUtils';
import React from 'preact/compat'
export default function CheckoutFooter({ data, messages, loading, setLoading, locale }) {
    const {cartsList, UpdateCartsList} = data;
    const totals = calcTotalPrices(cartsList);    
    return (
        <div className="carts-footer">
            <div className="carts-row-elem carts-row-total-sj flex align-center flex-end flex-spacing-row">
                <div className="carts-element">
                    <div className="carts-total-sj">
                        {messages['totals_label']} ({data.length} {messages['products_label']}): 
                        <span className="price __new __total padleft10">{totals.format.total}</span>
                    </div>
                </div>
                <div className="carts-element">
                    <a href="#" 
                        className={"btnSingleCart __buy __painted ".concat(loading ? 'disabled' : '')}
                        onClick={e => onClick_createWoocommerce(e, cartsList, UpdateCartsList, setLoading, messages, locale)}>
                        <span className={"checkout_caption ".concat(loading ? 'mr10' : '')}>
                            {messages['checkout_label']}
                        </span>
                        {loading ? (
                            <span className="fa fa-spinner fa-spin"></span>
                        ) : null}
                    </a>
                </div>
            </div>
        </div>
    )
}
