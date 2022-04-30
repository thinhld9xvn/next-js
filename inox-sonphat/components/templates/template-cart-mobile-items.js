import React from 'preact/compat'
import Link from 'next/link'
import { calcTotalCartPrice, onClick_removeCartEvent } from '@js_dir/utils/shoppingCartsUtils'
import { getCartLocaleData, performAction } from '@js_dir/utils/productUtils';
const TemplateCartItemRow = ({ data, index, props, locale, messages }) =>  {
    const {cartsList : carts, UpdateCartsList : updateCartsAction} = props;
    const {id, price, old_price, count} = data;
    const {productUrl, productThumbnail, productName, productColors, productSizes} = getCartLocaleData(data, locale);
    const {format: priceFormat} = price[0];
    const {format: priceOldFormat} = old_price[0];
    const totals = calcTotalCartPrice(data);
    return (
        <>
            <div className={"carts-row-cqj flex justify-space-between ".concat(index > 0 ? 'mtop20' : '')}>
                <div className="col-element">
                    <div className="element flex align-center"><label>{messages['products_label']}</label></div>
                    <div className="element flex align-center"><label>{messages['price_label']}</label></div>
                    <div className="element flex align-center"><label>{messages['quantity_label']}</label></div>
                    <div className="element flex align-center"><label>{messages['totals_label']}</label></div>
                </div>
                <div className="col-element">
                    <div className="element flex align-center">
                        <div className="heading"><label>{messages['products_label']}</label></div>
                        <div className="thumbnail"><Link href={productUrl}><a><img src={productThumbnail} alt="" /></a></Link></div>
                        <div className="title"><Link href={productUrl}>{productName}</Link></div>
                    </div>
                    <div className="element flex flex-direction-column justify-center">
                        <div className="heading"><label>{messages['product_attr_label']}</label></div>
                        <p>
                            {messages['colors_label']}: <span className="strong">{productColors}</span>
                        </p>
                        <p>
                            {messages['sizes_label']}: <span className="strong">{productSizes}</span>
                        </p>
                    </div>
                    <div className="element flex flex-direction-column justify-center">
                        <div className="heading"><label>{messages['price_label']}</label></div>
                        <p><span className="price __old">{priceOldFormat}</span></p>
                        <p><span className="price __new">{priceFormat}</span></p>
                    </div>
                    <div className="element flex flex-direction-column justify-center">
                        <div className="heading"><label>{messages['quantity_label']}</label></div>
                        <p className="flex align-items-center">
                            <a href="#" className="qty-dec"  onClick={e => performAction(e, 'dec', data, props)}>-</a>
                            <input type="text" name="txtQty" value={count} className="txtQty" />
                            <a href="#" className="qty-inc"  onClick={e => performAction(e, 'inc', data, props)}>+</a>
                        </p>
                    </div>
                    <div className="element flex flex-direction-column justify-center">
                        <div className="heading">
                            <label>{messages['totals_label']}</label>
                        </div>
                        <p>
                            <span className="price __new __total">{totals.format.total}</span>
                            <a href="#" 
                                className="btnRmCart"
                                onClick={e => onClick_removeCartEvent({
                                    id,
                                    carts,
                                    updateCartsAction,
                                    messages
                                  }, e)}>{messages['remove_label']}</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default function TemplateCartMobileItems({ data, messages, props, locale }) {
    const arrCartsRow = data.map((item, i) => <TemplateCartItemRow data = {item}
                                                              messages = {messages}
                                                              index = {i}
                                                              key = {item.id}
                                                              locale = {locale}
                                                              props = {{...props, cartsList: data}} />)                                                   
    return (
        <>
            {data && data.length > 0 ? (
                <>
                    {arrCartsRow}
                </>
            ) : <div className="empty-carts-table">{messages['no_products_label']}</div>}
        </>
    )
}
