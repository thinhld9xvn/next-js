import React from 'preact/compat'
import Link from 'next/link'
import { getCartLocaleData } from '@js_dir/utils/productUtils';
export default function TemplateCheckoutCartItem({ data, messages, locale }) {
    const {count, price} = data;
    const {format: priceFormat} = price[0];
    const {productName,
            productThumbnail,
            productUrl,
            productColors} = getCartLocaleData(data, locale);
    return (
        <div className="product checkout-product flex">
            <div className="thumbnail">
                <Link href={productUrl}><img src={productThumbnail} alt="" /></Link>
            </div>
            <div className="contents">
                <h4 className="title">
                    <Link href={productUrl}>{productName}</Link>
                </h4>
                <div className="mtop10">{messages['colors_label']}: {productColors}</div>
                <div className="qty mtop10">{messages['quantity_label']}: {count}</div>
            </div>
        </div>
    )
}
