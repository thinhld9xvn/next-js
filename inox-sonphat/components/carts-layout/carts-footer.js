import { calcTotalPrices } from '@js_dir/utils/shoppingCartsUtils'
import React from 'preact/compat'
import Link from 'next/link'
import { getPageUrlByLocale } from '@js_dir/utils/urlUtils';
export default function CartsFooter({ data, locale, messages }) {
    const totals = calcTotalPrices(data);
    return (
        <div className="carts-footer">
            <div className="carts-row-elem carts-row-total-sj flex align-center flex-end flex-spacing-row">
                <div className="carts-element">
                    <div className="carts-total-sj">
                        {messages['totals_label']} ({data.length} {messages['products_label']}): 
                        <span className="price __new __total padleft10">
                            {totals.format.total}
                        </span>
                    </div>
                </div>
                <div className="carts-element">
                    <Link href={getPageUrlByLocale('checkout', locale)}>
                        <a className="btnSingleCart __buy __painted">
                            <span className="">{messages['checkout_label']}</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
