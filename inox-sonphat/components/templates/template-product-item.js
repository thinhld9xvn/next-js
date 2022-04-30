import React from 'preact/compat'
import Link from 'next/link'
import {injectIntl} from 'react-intl';
import { connect } from 'react-redux';
import {onClick_addToCartEvent} from '@js_dir/utils/shoppingCartsUtils'

function TemplateProductItem({ data, cartsList, UpdateCartsList, intl }) {
    const {messages} = intl;
    const {thumbnails, url, title, price, status} = data;
    const {format : price_format} = price[0];
    const {url : thumbnail} = thumbnails[1]; // medium
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <article className="bg-white hp-item">
                <figure className="text-center bg-white position-relative hp-item-img">
                    <Link href={url}>
                        <a>
                            <img src={thumbnail} alt="product" height="220" />
                        </a>
                    </Link>
                </figure>
                <figcaption className="m-auto hp-item-info">
                    <h3 className="prod_title bold">
                        <Link href={url}>{title}</Link>
                    </h3>
                    <div className="prod_meta_captions prod_price">
                        <small>{messages['price_label']}:</small> <span className="strong">{price_format}</span>
                        <small className="padleft5">vnđ</small>
                    </div>
                    <div className="prod_meta_captions">
                        <small>{messages['status_label']}:</small>
                        <small className="padleft5">{messages[status]}</small>
                    </div>
                    <div className="prod_meta_captions cart">
                        <a className="cart-button flex align-center" href="#"
                            onClick={e => onClick_addToCartEvent({
                                product : data,
                                carts : cartsList,
                                updateCartsAction : UpdateCartsList,
                                messages
                            }, e)}>
                            {/*<span className="fa fa-shopping-cart"></span>*/}
                            <img src="/static/images/scicon.png" />
                            <span className="padleft10">{messages['add_to_cart_label']}</span>
                        </a>
                    </div>
                </figcaption>
            </article>
        </div>
    )
}
function mapStateToProps(state) {   
    return { 
        cartsList: state.globalReducer.cartsList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateCartsList : async (v) => await dispatch({
            type : "UPDATE_CARTS_LIST",
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(TemplateProductItem));

