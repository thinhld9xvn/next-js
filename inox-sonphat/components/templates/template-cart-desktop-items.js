import React from 'preact/compat'
import Link from 'next/link'
import { calcTotalCartPrice, onClick_removeCartEvent } from '@js_dir/utils/shoppingCartsUtils'
import { getCartLocaleData, performAction } from '@js_dir/utils/productUtils';

const TemplateColProduct = ({ data, index, locale }) => {
    const {productUrl, productThumbnail, productName} = getCartLocaleData(data, locale);
    return (
        <div className={"element flex align-center ".concat(index > 0 ? 'mtop20' : '')}>
            <div className="thumbnail"><Link href={productUrl}><a><img src={productThumbnail} alt="" /></a></Link></div>
            <div className="title"><Link href={productUrl}>{productName}</Link></div>
        </div>
    );
}
const TemplateColPrice = ({ data, index }) => {
    const {price, old_price} = data;
    const {format: priceFormat} = price[0];
    const {format: priceOldFormat} = old_price[0];
    return (
        <div className={"element flex flex-direction-column justify-center ".concat(index > 0 ? 'mtop20' : '')}>
            <p><span className="price __old">{priceOldFormat}</span></p>
            <p><span className="price __new">{priceFormat}</span></p>
        </div>
    );
}
const TemplateColQty = ({ data, props, index }) => {
    const {count} = data;
    return (
        <div className={"element flex flex-direction-column justify-center ".concat(index > 0 ? 'mtop20' : '')}>
            <p className="flex align-items-center">
                <a href="#" className="qty-dec" onClick={e => performAction(e, 'dec', data, props)}>-</a>
                <input type="text" name="txtQty" disabled value={count} className="txtQty" />
                <a href="#" className="qty-inc"  onClick={e => performAction(e, 'inc', data, props)}>+</a>
            </p>
        </div>
    );
}
const TemplateColEntries = ({ data, index, messages, locale }) => {
    const {productSizes, productColors} = getCartLocaleData(data, locale);
    
    return (
        <div className={"element flex flex-direction-column justify-center ".concat(index > 0 ? 'mtop20' : '')}>
            <p>
                {messages['colors_label']}: <span className="strong">{productColors}</span>
            </p>
            <p>
               {messages['sizes_label']}: <span className="strong">{productSizes}</span>
            </p>
        </div>
    );
}
const TemplateColTotal = ({ data, index, messages, props }) => {
    const {id} = data;
    const {carts, UpdateCartsList : updateCartsAction} = props;
    const totals = calcTotalCartPrice(data);
    return (
        <div className={"element flex flex-direction-column justify-center ".concat(index > 0 ? 'mtop20' : '')}>
            <p>
                <span className="price __new __total block">
                    {totals.format.total}
                </span>
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
    );
}
export default function TemplateCartDesktopItems({ data, props, locale, messages }) {
    const {UpdateCartsList} = props;
    const arrProductNameCols = data.map((item, i) => <TemplateColProduct data = {item}
                                                                    key = {item.id}
                                                                    index = {i}
                                                                    locale = {locale} />);
    const arrProductPriceCols = data.map((item, i) => <TemplateColPrice data = {item}
                                                                    key = {item.id}
                                                                    index = {i} />);
    const arrProductEntriesCols = data.map((item, i) => <TemplateColEntries data = {item}
                                                                            messages = {messages}
                                                                            key = {item.id}
                                                                            index = {i}
                                                                            locale = {locale} />);
    const arrProductQtyCols = data.map((item, i) => <TemplateColQty data = {item}
                                                                    props = {{
                                                                        cartsList : data,
                                                                        UpdateCartsList,
                                                                        locale
                                                                    }}
                                                                    key = {item.id}
                                                                    index = {i} />); 
    const arrProductTotalCols = data.map((item, i) => <TemplateColTotal data = {item}
                                                                    key = {item.id}
                                                                    index = {i}
                                                                    messages = {messages}
                                                                    props = {{
                                                                        carts: data,
                                                                        UpdateCartsList
                                                                    }} />);         
    return (
        <>
            <div className="col-element">
                <label>{messages['products_label']}</label>
                {arrProductNameCols ? (
                    <div className="elements mtop40">
                        {arrProductNameCols}
                    </div>
                ): null}
            </div>
            <div className="col-element">
                <label>{messages['product_attr_label']}</label>
                {arrProductEntriesCols ? (
                    <div className="elements mtop40">
                        {arrProductEntriesCols}
                    </div>
                ) : null}
            </div>
            <div className="col-element">
                <label>{messages['price_label']}</label>
                {arrProductPriceCols ? (
                    <div className="elements mtop40">
                        {arrProductPriceCols}
                    </div>
                ) : null}
            </div>
            <div className="col-element">
                <label>{messages['quantity_label']}</label>
                {arrProductQtyCols ? (
                    <div className="elements mtop40">
                        {arrProductQtyCols}
                    </div>
                ): null}
            </div>
            <div className="col-element">
                <label>{messages['totals_label']}</label>
                {arrProductTotalCols ? (
                    <div className="elements mtop40">
                        {arrProductTotalCols}                    
                    </div>  
                ): null}
            </div>
            {data.length === 0 ? (
                <>
                    <div className="empty-carts-table">{messages['no_products_label']}</div>
                </>
            ) : null}
                
        </>
    )
}
