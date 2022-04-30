import { calcTotalPrices } from '@js_dir/utils/shoppingCartsUtils';
import TemplateCheckoutCartItem from '@templates/template-checkout-cart-item';
import React from 'preact/compat'

export default function CheckoutList({ data, messages, locale, wooBacsPayment }) {
    const {cartsList} = data;
    const {bank_name, account_number, account_name} = wooBacsPayment;
    const arrCartsList = cartsList.map(item => <TemplateCheckoutCartItem data = {item}
                                                                         messages = {messages}
                                                                         locale = {locale}
                                                                         key={item.id} />);
    const totals = calcTotalPrices(cartsList);
    return (
        <legend>
            <div className="checkoutlists">
                {arrCartsList}
            </div>
            <div className="checkoutlists-bottom">
                <div className="ckl-row">
                    {messages['totals_label']} ({cartsList.length} {messages['products_label']}): 
                    <span className="price __new __total padleft10">{totals.format.total}</span>
                </div>
                {/*<div className="ckl-row">
                    <div className="ckl-bank">
                        <p><strong>{messages['transfer_bank_label']}</strong></p>
                        <p className="mtop20">
                            {messages['transfer_bank_contents']}
                        </p>
                        <p className="mtop20"><strong>{messages['account_name_label']}: {account_name}</strong></p>
                        <p><strong>{messages['account_no_label']}: {account_number}</strong></p>
                        <p><strong>{messages['bank_label']}: {bank_name}</strong></p>
                    </div>
                    </div>*/}
            </div>
        </legend>
    )
}
